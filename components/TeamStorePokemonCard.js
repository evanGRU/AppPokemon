import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from "react";
import {fetchStorage} from "../utils/storageManager";
import {globals} from "../utils/globals";

export default function TeamStorePokemonCard({storageKey, navigation}) {
    const [valueStored, setValueStored] = useState(null);

    const fetchData = async () => {
        setValueStored(await fetchStorage(storageKey));
    }

    useEffect(() => {
        fetchData();
    }, [storageKey])

    return (
        <>
            {
                valueStored?.sprites?.other?.home?.front_default ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(globals.teamDetailStackName, {
                            item: valueStored
                        })}
                        style={styles.teamCard}
                    >
                        <Image
                            style={styles.teamImage}
                            source={{uri: valueStored?.sprites?.other?.home?.front_default}}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(globals.homeStackName)}
                        style={styles.defaultTeamCard}
                    >
                        <Image
                            style={styles.defaultTeamImage}
                            source={require('../assets/teamPokeball.png')}
                        />
                    </TouchableOpacity>
                )

            }
        </>
    );
}

const styles = StyleSheet.create({
    teamCard: {
        backgroundColor: "#fff",
        width: '45%',
        height: '25%',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
    },
    teamImage: {
        height: 120,
        width: 120,
    },
    defaultTeamCard: {
        width: '45%',
        height: '25%',
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    defaultTeamImage: {
        height: '100%',
        width: '100%',
    }
});
