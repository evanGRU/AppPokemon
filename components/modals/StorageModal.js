import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {Button} from "@rneui/base";
import DetailStorePokemonButton from "../DetailStorePokemonButton";
import {teamKeys} from "../../utils/globals";

export default function StorageModal({hideModal, setHideModal, data}) {
    return (
        <>
            {
                !hideModal && (
                    <View
                        style={styles.modalBackground}
                    >
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Modifier mon équipe</Text>
                            <View style={styles.modalButtonsContainer}>
                                {
                                    teamKeys.map((key) => {
                                        return (
                                            <DetailStorePokemonButton
                                                data={data}
                                                storageKey={key}
                                            />
                                        )
                                    })
                                }

                            </View>
                            <Button
                                title={'Fermer'}
                                onPress={() => setHideModal(!hideModal)}
                                buttonStyle={styles.modalCloseButton}
                            />
                        </View>
                    </View>
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    modalContainerHide: {
        display: 'none'
    },
    modalBackground: {
        backgroundColor: 'rgba(217,217,217,0.7)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '80%',
        position: 'absolute',
        zIndex: 110,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 25
    },
    modalTitle: {
        color: '#4C666B',
        fontWeight: '600',
        fontSize: 20,
    },
    modalButtonsContainer: {
        gap: 10,
        width: '100%'
    },
    modalCloseButton: {
        borderRadius: 5,
        backgroundColor: '#896bd8'
    },
});
