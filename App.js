import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Screens & Stuff
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import TeamScreen from "./views/TeamScreen";
import {globals} from "./utils/globals";



// Stack Navigation
const Stack = createNativeStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={globals.homeStackName}
                component={HomeScreen}
                options={{
                    title: globals.homeTitle,
                }}
            />
            <Stack.Screen
                name={globals.detailStackName}
                component={DetailsScreen}
                options={{
                    title: globals.detailTitle,
                }}
            />
        </Stack.Navigator>
    );
}

// Tab Navigation
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                const icons = {
                    [globals.homeTabName]: 'home',
                    [globals.searchTabName]: 'magnify',
                    [globals.teamTabName]: 'pokeball',
                    [globals.paramsTabName]: 'cog',
                };

                return (
                    <MaterialCommunityIcons
                        name={icons[route.name]}
                        color={color}
                        size={size}
                    />
                );
            },
            tabBarLabel:() => {return null},
            headerShown: false
        })}>
            <Tab.Screen
                name={globals.homeTabName}
                component={HomeStack}
            />
            <Tab.Screen
                name={globals.searchTabName}
                component={TeamScreen}
            />
            <Tab.Screen
                name={globals.teamTabName}
                component={TeamScreen}
            />
            <Tab.Screen
                name={globals.paramsTabName}
                component={TeamScreen}
            />
        </Tab.Navigator>
    );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
  );
}
