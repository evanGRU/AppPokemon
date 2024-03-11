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
        console.log('error');
    }
};

const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log('error');
    }
};

export {
    fetchStorage,
    storeValue,
    clearStorage
}