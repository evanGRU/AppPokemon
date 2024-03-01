import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {fetchStorage, storeValue} from "../utils/storageManager";

export default function StorePokemonButton({data, storageKey}) {
    const [valueStored, setValueStored] = useState(null);

    const fetchData = async () => {
        setValueStored(await fetchStorage(storageKey));
    }

    useEffect(() => {
        fetchData();
    }, [storageKey])

    return (
        <TouchableOpacity
            onPress={() => {
                storeValue(storageKey, data)
                fetchData();
            }}
        >
            {
                valueStored ? (
                        <View style={styles.storedCardContainer}>
                            <Image
                                style={styles.storedImage}
                                source={{uri: valueStored?.sprites?.other?.home?.front_default}}
                            />
                            <View style={styles.storedCardSeparator}></View>
                            <Text style={styles.storedText}>{valueStored.name}</Text>
                        </View>
                    ) : (
                    <View style={styles.storedCardContainer}>
                        <Image
                            style={styles.defaultStoredImage}
                            source={require('../assets/plus.png')}
                        />
                        <View style={styles.storedCardSeparator}></View>
                        <Text style={styles.defaultStoredText}>Ajouter un Pokémon</Text>
                    </View>
                )
                }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    storedCardContainer: {
        backgroundColor: '#f5f2ff',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        position: "relative"
    },
    storedCardSeparator: {
        height: '60%',
        width: 2,
        borderRadius: 10,
        backgroundColor: 'rgba(73,110,113,0.1)',
        marginVertical: 30,
        marginLeft: 70,
        marginRight: 10
    },
    defaultStoredImage: {
        position: "absolute",
        width: 40,
        height: 40,
        top: 10,
        left: 15
    },
    storedImage: {
        position: "absolute",
        width: 50,
        height: 50,
        top: 5,
        left: 10
    },
    storedText: {
        textTransform: "capitalize",
        color: '#4C666B',
        fontWeight: '400',
        fontSize: 16,
    },
    defaultStoredText: {
        color: '#4C666B',
        fontWeight: '700',
        fontSize: 16,
    }
});
