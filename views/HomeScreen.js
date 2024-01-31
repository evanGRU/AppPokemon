import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from "axios";

//Screens & Stuff
import DataCard from "../components/DataCard";
import {globals} from "../utils/globals";
import Header from "../components/Header";

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
            onPress={() => navigation.navigate(globals.detailStackName, {
                item: item
            })}
        >
            <View style={styles.item}>
                <DataCard detailUrl={item.url}></DataCard>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <Header></Header>
            <View style={styles.global}>
                <FlatList
                    data={dataList}
                    numColumns={3}
                    onEndReached={() => loadData(nextPage)}
                    onEndReachedThreshold={0.5}
                    renderItem={({item}) => <Item item={item}/>}
                    keyExtractor={item => item.id}
                />
            </View>
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
        backgroundColor: 'rgb(246,237,253)',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    item: {
        backgroundColor: '#fff',
        width: 110,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 110,
    }
});
