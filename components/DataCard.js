import {StyleSheet, Image} from 'react-native';
import axios from "axios";
import {useEffect, useState} from "react";

export default function DataCard({detailUrl}) {
    const [dataDetail, setDataDetail] = useState({});
    const [dataImage, setDataImage] = useState();

    useEffect (() => {
        const result = axios.get(detailUrl).then((data) => {
            setDataDetail(data.data);
            setDataImage(data.data.sprites.other.home.front_default);
        })
    }, [detailUrl])

    return (
        dataImage ? <Image
                style={styles.homePicture}
                source={{uri: dataImage}}
            />
            : <Image
                style={styles.homePicture}
                source={require('../assets/defaultPokemon.png')}

            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homePicture: {
        width: 75,
        height: 75,
    },
});
