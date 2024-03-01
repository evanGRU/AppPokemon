import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Header from "../components/Header";
import { SearchBar } from '@rneui/themed';
import React, {useEffect, useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import axios from "axios";
import {globals} from "../utils/globals";
import {useDebounce} from "../components/hooks/useDebounce";

export default function SearchScreen({navigation}) {
    const [search, setSearch] = useState('');
    const [saveSearch, setSaveSearch] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)

    const debouncedSearch = useDebounce(nextValue => setSaveSearch(nextValue), 1000);

    const handleChange = (value) => {
        setSearch(value);
        debouncedSearch(value);
    };

    useEffect(() => {
        setData(null);
        setError(null);
        if (saveSearch) {
            const url = 'https://pokeapi.co/api/v2/pokemon/' + saveSearch;
            axios.get(url).then((data) => {
                setData(data);
            }).catch(reason => {
                setError('Nous n\'avons pas trouvé votre Pokémon.');
            });
        }
    }, [saveSearch])

    return (
        <>
            <Header title={'RECHERCHE'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >
                <SearchBar
                    onChangeText={(value) => {handleChange(value)}}
                    onCancel={() => setSearch(null)}
                    value={search}
                    placeholder="Bulbasaur, charizard, weedle..."
                    containerStyle={styles.searchBarContainer}
                    inputContainerStyle={styles.searchBarInput}
                    lightTheme={true}
                />
                {/*{*/}
                {/*    error ? <Text>{error}</Text>*/}
                {/*        : data &&*/}
                {/*        (*/}
                {/*            */}
                {/*        )*/}
                {/*}*/}
                {
                    error &&
                    (
                        <Text>{error}</Text>
                    )
                }
                <View style={styles.searchContainer}>
                    {
                        data &&
                        (
                            <TouchableOpacity
                                key={data?.data.id}
                                onPress={() => navigation.navigate(globals.detailStackName, {
                                    item: data.data
                                })}
                            >
                                <View style={styles.resultCardContainer}>
                                    <Image
                                        style={styles.resultImage}
                                        source={{uri: data?.data.sprites?.other?.home?.front_default}}
                                    />
                                    <View style={styles.resultCardSeparator}></View>
                                    <Text style={styles.resultText}>{data?.data.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={styles.searchPictureContainer}>
                    <Image
                        style={styles.searchPicture}
                        source={require('../assets/bg-pictures/searchPicture.png')}
                    />
                </View>

            </LinearGradient>
        </>
    );
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    global: {
        flex: 1,
        height: height,
        paddingTop: 20,
        paddingHorizontal: 10
    },

    searchBarContainer: {
        backgroundColor: 'rgba(73,110,113,0.1)',
    },
    searchBarInput: {
        backgroundColor: '#fff',
    },
    searchContainer: {
        height: 380,
    },
    searchPictureContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 40
    },
    searchPicture: {
        width: 250,
        height: 200,
    },


    resultCardContainer: {
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        margin: 12,
        borderRadius: 10,
        position: "relative"
    },
    resultCardSeparator: {
        height: '70%',
        width: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(73,110,113,0.1)',
        marginVertical: 30,
        marginLeft: 90,
        marginRight: 15
    },
    resultImage: {
        position: "absolute",
        width: 60,
        height: 60,
        top: 0,
        left: 20
    },
    resultText: {
        textTransform: "capitalize",
        color: '#4C666B',
        fontWeight: '600',
        fontSize: 20,
    }
});
