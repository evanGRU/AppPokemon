import React, {useEffect, useState} from "react";
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from 'react-native';

//Screens & Stuff
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";
import {clearStorage} from "../utils/storageManager";
import {teamKeys} from "../utils/globals";
import TeamStorePokemonCard from "../components/TeamStorePokemonCard";
import {Button} from "@rneui/base";

export default function TeamScreen({navigation}) {
    const [storedPokemon, setStoredPokemon] = useState([])
    const setLocalTeam = () => {
        let defaultTeam = []
        teamKeys.map((key) => {
            defaultTeam.push(key)
        })
        return defaultTeam;
    }

    useEffect(() => {
        setStoredPokemon(setLocalTeam());
    }, []);

    return (
        <>
            <Header title={'MON ÉQUIPE'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >
                <View style={styles.teamContainer}>
                    {
                        storedPokemon.map((pokemon) => {
                            return (
                                <TeamStorePokemonCard
                                    storageKey={pokemon}
                                    navigation={navigation}
                                />
                            )
                        })
                    }
                    <View style={styles.teamButtonsContainer}>
                        <Button
                            title={'Recommencer mon équipe'}
                            buttonStyle={styles.teamDeleteButton}
                            containerStyle={styles.teamDeleteButtonContainer}
                            onPress={() => {
                                clearStorage();
                                setStoredPokemon(setLocalTeam());
                            }}
                        />
                        <TouchableOpacity
                            style={styles.teamRefreshContainer}
                            onPress={() => {setStoredPokemon(setLocalTeam());}}
                        >
                            <Image
                                style={styles.teamPicture}
                                source={require('../assets/arrow_refresh.png')}
                            />
                        </TouchableOpacity>
                    </View>
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
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    teamContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
    },
    teamButtonsContainer: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    teamDeleteButtonContainer: {
        borderRadius: 20,
        width: '75%'
    },
    teamDeleteButton: {
        backgroundColor: '#bb0000',
        padding: 20,
    },
    teamPicture: {
        height: '100%',
        width: '100%',
    },
    teamRefreshContainer: {
        backgroundColor: '#002A51',
        padding: 20,
        borderRadius: 20,
        height: 65,
        width: 70

    }
});
