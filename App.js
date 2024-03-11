import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Screens & Stuff
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import TeamScreen from "./views/TeamScreen";
import {globals} from "./utils/globals";
import SearchScreen from "./views/SearchScreen";
import SettingsScreen from "./views/SettingsScreen";
import CameraScreen from "./views/CameraScreen";



// Stack Navigation
const Stack = createNativeStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={globals.homeStackName}
                component={HomeScreen}
            />
            <Stack.Screen
                name={globals.homeDetailStackName}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
}

function TeamStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={globals.teamStackName}
                component={TeamScreen}
            />
            <Stack.Screen
                name={globals.teamDetailStackName}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
}

function SearchStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={globals.searchStackName}
                component={SearchScreen}
            />
            <Stack.Screen
                name={globals.searchDetailStackName}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name={globals.paramsStackName}
                component={SettingsScreen}
            />
            <Stack.Screen
                name={globals.paramsCameraStackName}
                component={CameraScreen}
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
                name={globals.teamTabName}
                component={TeamStack}
            />
            <Tab.Screen
                name={globals.searchTabName}
                component={SearchStack}
            />
            <Tab.Screen
                name={globals.paramsTabName}
                component={SettingsStack}
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
