import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>POKÉDEX</Text>
        </View>
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
