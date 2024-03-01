import React, {useEffect, useState} from "react";
import {Dimensions, StyleSheet} from 'react-native';

//Screens & Stuff
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TeamScreen({navigation}) {
    const fetchStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('POKEMON');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            console.log('error');
            // Error retrieving data
        }
    };

    useEffect(() => {
        fetchStorage();
    }, [])
    return (
        <>
            <Header title={'MON ÉQUIPE'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >

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
