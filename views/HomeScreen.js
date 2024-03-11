import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import axios from "axios";

//Screens & Stuff
import HomeDataCard from "../components/HomeDataCard";
import {globals} from "../utils/globals";
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";

export default function HomeScreen({navigation}) {
    const [dataList, setDataList] = useState([]);
    const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=21');

    const loadData = (url) => {
        axios.get(url).then((data) => {
            setDataList([...dataList, ...data.data.results]);
            setNextPage(data.data.next);
        })
    };
    useEffect (() => {
        loadData(nextPage);
    }, []);

    const Item = ({item}) => (
        <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate(globals.homeDetailStackName, {
                item: item
            })}
        >
            <View style={styles.item}>
                <HomeDataCard detailUrl={item.url}></HomeDataCard>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <Header title={'POKÉDEX'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >
                <FlatList
                    data={dataList}
                    numColumns={3}
                    onEndReached={() => loadData(nextPage)}
                    onEndReachedThreshold={0.5}
                    renderItem={({item}) => <Item item={item}/>}
                />
            </LinearGradient>
        </>
    );
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    global: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 110,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 110,
    }
});
