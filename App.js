import {StyleSheet, View, Text, Button, FlatList, Dimensions} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from "axios";
import {useEffect, useState} from "react";
import DataCard from "./components/DataCard";

function HomeScreen() {
    const [dataList, setDataList] = useState([]);
    const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    useEffect (() => {
        loadData(nextPage);
    }, [])

    const loadData = (url) => {
        axios.get(url).then((data) => {
            setDataList([...dataList, ...data.data.results]);
            setNextPage(data.data.next);
        })
    }

    const Item = ({item}) => (
        <View style={styles.item}>
            <DataCard detailUrl={item.url}></DataCard>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.global}>
            <FlatList
                data={dataList}
                numColumns={2}
                onEndReached={() => loadData(nextPage)}
                onEndReachedThreshold={0.5}
                renderItem={({item}) => <Item item={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();
function MyStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="API Pokemon"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyStacks/>
      </NavigationContainer>
  );
}

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    global: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF1617',
        paddingTop: 20
    },
    item: {
        backgroundColor: '#fff',
        width: 150,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 200,
    },
    title: {
        color: 'black',
        fontSize: 15,
        textTransform: 'capitalize'
    }


});
