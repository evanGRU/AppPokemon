import {StyleSheet, Image} from 'react-native';
import axios from "axios";
import {useEffect, useState} from "react";

export default function DataCard({detailUrl}) {
    const [dataDetail, setDataDetail] = useState({});
    const [dataImage, setDataImage] = useState();

    useEffect (() => {
        const result = axios.get(detailUrl).then((data) => {
            setDataDetail(data.data);
            setDataImage(data.data.sprites.front_default);
        })
    }, [detailUrl])

    return (
        dataImage ? <Image
                style={{width: 120, height: 120, marginBottom: 5}}
                source={{uri: dataImage}}
            />
            : <Image
                    style={{width: 75, height: 75, marginBottom: 10}}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png'}}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
