import {Image, StyleSheet, View} from 'react-native';

export default function DetailPokemonTypes(pokemonTypesData) {
    const pokemonTypes = pokemonTypesData.pokemonTypesData !== undefined && [...pokemonTypesData.pokemonTypesData];

    if (pokemonTypes){
        return (
            <View style={styles.typesContainer}>
                {
                    pokemonTypes.map((type) => {
                        const typeName = type.type.name;
                        switch (typeName) {
                            case 'normal':
                                return (
                                    <Image style={styles.typesImage}
                                        source={require("../assets/types/normal.png")}
                                    ></Image>
                                );
                            case 'fighting':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/fighting.png")}
                                    ></Image>
                                );
                            case 'flying':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/flying.png")}
                                    ></Image>
                                );
                            case 'poison':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/poison.png")}
                                    ></Image>
                                );
                            case 'ground':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/ground.png")}
                                    ></Image>
                                );
                            case 'rock':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/rock.png")}
                                    ></Image>
                                );
                            case 'bug':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/bug.png")}
                                    ></Image>
                                );
                            case 'ghost':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/ghost.png")}
                                    ></Image>
                                );
                            case 'steel':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/steel.png")}
                                    ></Image>
                                );
                            case 'fire':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/fire.png")}
                                    ></Image>
                                );
                            case 'water':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/water.png")}
                                    ></Image>
                                );
                            case 'grass':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/grass.png")}
                                    ></Image>
                                );
                            case 'electric':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/electric.png")}
                                    ></Image>
                                );
                            case 'psychic':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/psychic.png")}
                                    ></Image>
                                );
                            case 'ice':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/ice.png")}
                                    ></Image>
                                );
                            case 'dragon':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/dragon.png")}
                                    ></Image>
                                );
                            case 'dark':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/dark.png")}
                                    ></Image>
                                );
                            case 'fairy':
                                return (
                                    <Image style={styles.typesImage}
                                           source={require("../assets/types/fairy.png")}
                                    ></Image>
                                );
                        }
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    typesContainer: {
        flexDirection: "row",
        gap: 5,
        position: "absolute"
    },
    typesImage: {
        height: 25,
        width: 25
    }
});
