import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchStorage = async (key) => {
    try {
        const valueStored = await AsyncStorage.getItem(key);
        if (valueStored !== null) {
            // We have data!!
            return JSON.parse(valueStored);
        }
        return null;
    } catch (error) {
        console.log('error');
        // Error retrieving data
    }
};

const storeValue = async (key, valueToStore) => {
    try {
        await AsyncStorage.setItem(
            key,
            JSON.stringify(valueToStore),
        );
    } catch (error) {
        // Error saving data
    }
};

export {
    fetchStorage,
    storeValue
}