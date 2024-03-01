import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import {globals} from "../utils/globals";
import {LinearGradient} from "expo-linear-gradient";
import PokemonTypes from "../components/PokemonTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DetailsScreen({route, navigation}) {
    const {item} = route.params;

    const defaultUrl = item.url;
    const [dataDetail, setDataDetail] = useState(defaultUrl ? {} : item);
    const [dataImage, setDataImage] = useState(defaultUrl ? null : item.sprites.other.home.front_default);

    const [isOnFavorite, setIsOnFavorite] = useState(false);

    useEffect (() => {
        axios.get(defaultUrl).then((data) => {
            setDataDetail(data.data);
            setDataImage(data.data.sprites.other.home.front_default);
        })
    }, [defaultUrl])

    const roundValue = (value) => {
        return (
            Math.round((value / 10) * 100) / 100
        );
    }

    const storeData = async (dataDetail) => {
        try {
            console.log('start stored');
            await AsyncStorage.setItem(
                'POKEMON',
                'aa',
            );
            console.log('stored');
        } catch (error) {
            // Error saving data
        }
    };

    useEffect(() => {
        isOnFavorite && storeData(dataDetail);
    }, [isOnFavorite])
    return dataDetail && (
        <LinearGradient
            colors={['#2f2fd2', '#896bd8', '#9882d0']}
            style={styles.globalDetail}
        >
            <View style={styles.detailHeader}>
                <TouchableOpacity
                    style={{width: 50, height: 50}}
                    onPress={()=>navigation.navigate(route.name === 'HomeDetailsStack' ? 'HomeStack' : 'SearchStack')}
                >
                    <Image
                        source={require('../assets/arrow_backward.png')}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setIsOnFavorite(!isOnFavorite)}>
                    <Image
                        source={isOnFavorite ? require('../assets/star_fill.png') : require('../assets/star.png')}
                    ></Image>
                </TouchableOpacity>
            </View>

            <Image
                style={styles.picture}
                source={{uri: dataImage}}
            />
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{dataDetail.name}</Text>
                    <View style={styles.titleHealth} />
                    <Text style={styles.titleTextPara}>{dataDetail?.stats?.[0].base_stat} / {dataDetail?.stats?.[0].base_stat} HP</Text>
                </View>
                <View style={styles.characteristicsContainer}>
                    <View style={styles.characteristicsElement}>
                        <Text style={styles.characteristicsH1}>
                            {roundValue(dataDetail.weight)}kg
                        </Text>
                        <Text style={styles.characteristicsH2}>Poids</Text>
                    </View>
                    <View style={styles.characteristicsLine}/>
                    <View style={styles.characteristicsElement}>
                        <View style={styles.characteristicsH1}>
                            <PokemonTypes pokemonTypesData={dataDetail.types}/>
                        </View>
                        <Text style={styles.characteristicsH2}>Types</Text>
                    </View>
                    <View style={styles.characteristicsLine}/>
                    <View style={styles.characteristicsElement}>
                        <Text style={styles.characteristicsH1}>
                            {roundValue(dataDetail.height)}m
                        </Text>
                        <Text style={styles.characteristicsH2}>Taille</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}


const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    globalDetail: {
        flex: 1,
        height: height,
        alignItems: 'center',
        backgroundColor: 'rgb(246,237,253)',
        position: "relative",
    },
    detailHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingTop: 70,
        paddingBottom: 150,
        paddingHorizontal: 25,
        zIndex: 100
    },
    picture: {
        top: 100,
        width: 230,
        height: 230,
        position: 'absolute',
        zIndex: 10
    },

    card: {
        paddingTop: 80,
        backgroundColor: '#fff',
        color: '#496E71',
        width: '95%',
        height: '100%',
        padding: 20,
        borderRadius: 20,
    },
    lineSeparator: {
        height: 2,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(73,110,113,0.1)',
        marginVertical: 30
    },

    titleContainer: {
        alignItems: "center",
    },
    titleText: {
        color: '#4C666B',
        fontWeight: '600',
        textTransform: 'capitalize',
        fontSize: 25,
    },
    titleHealth: {
        marginTop: 10,
        marginBottom: 5,
        height: 7,
        width: '70%',
        borderRadius: 10,
        backgroundColor: '#70ECBB'
    },
    titleTextPara: {
        color: '#4C666B',
        fontWeight: '700',
        fontSize: 12,
    },

    characteristicsContainer: {
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: "center",
        gap: 30
    },
    characteristicsElement: {
        alignItems: "center",
    },
    characteristicsH1: {
        color: '#4C666B',
        fontSize: 22,
        fontWeight: '600',
        height: 30,
        position: "relative",
        alignItems: "center"
    },
    characteristicsH2: {
        color: 'rgba(76,102,107,0.52)',
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    characteristicsLine: {
        backgroundColor: 'rgba(76,102,107,0.3)',
        height: '80%',
        width: 1,

    }
});

