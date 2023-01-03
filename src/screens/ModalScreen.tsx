import { Button, Modal, View, Text } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export default function ModalScreen() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Modal Screen" />
            <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />
            <Modal animationType="fade" visible={isVisible} transparent={true}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {/* Contenido del modal  */}
                    <View
                        style={{
                            backgroundColor: 'white',
                            width: 200,
                            height: 200,
                            justifyContent: 'center',
                            alignContent: 'center',
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.25,
                            elevation: 10,
                            borderRadius: 5,
                        }}>
                        <Text
                            style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                            {' '}
                            Modal{' '}
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: '400',
                                marginBottom: 20,
                            }}>
                            Cuerpo contenido Modal
                        </Text>
                        <Button
                            title="Cerrar"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
