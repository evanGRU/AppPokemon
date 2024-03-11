import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Header from "../components/Header";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";
import {Button} from "@rneui/base";
import {globals} from "../utils/globals";

export default function SettingsScreen({navigation}) {
    return (
        <>
            <Header title={'PARAMETRES'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >
                <View style={styles.settingsContainer}>
                    <Text style={styles.settingsText}>
                        Camera
                    </Text>
                    <Button
                        title={'Ouvrir la camera'}
                        buttonStyle={styles.settingsButton}
                        containerStyle={styles.settingsButtonContainer}
                        onPress={()=>navigation.navigate(globals.paramsCameraStackName)}
                    ></Button>
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
    settingsContainer: {
        padding: 10,
        gap: 5,
    },
    settingsText: {
        fontSize: 15
    },
    settingsButton: {
        backgroundColor: '#896bd8',
        padding: 20,
    },
    settingsButtonContainer: {
        borderRadius: 10,
    }
});
