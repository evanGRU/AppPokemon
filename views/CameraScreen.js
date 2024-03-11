import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from "../components/Header";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {Camera, CameraType} from "expo-camera";

export default function CameraScreen({navigation}) {
    const [type, setType] = useState(CameraType.back);


    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <>
            <Header title={'CAMERA'}></Header>
            <LinearGradient
                colors={['#eee7ff', '#c1d6f6']}
                style={styles.global}
            >
                <View style={styles.container}>
                    <Camera style={styles.camera} type={type}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                                <Image
                                    style={styles.picture}
                                    source={require('../assets/flipCamera.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
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
    container: {
        height: '95%'
    },
    camera: {
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 30
    },
    buttonContainer: {
        backgroundColor: '#fff',
        borderRadius: 2000
    },
    picture: {
        height: 60,
        width: 60
    }
});
