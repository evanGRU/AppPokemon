import {StyleSheet, Text} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

export default function Header({title}) {
    return (
        <LinearGradient
            colors={['#fdfdfe', '#eee7ff']}
            style={styles.headerContainer}
        >
            <Text style={styles.headerTitle}>{title}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 70,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(246,237,253)'
    },
    headerTitle: {
        letterSpacing: 5,
        fontSize: 20,
        fontWeight: '300'
    }
});
