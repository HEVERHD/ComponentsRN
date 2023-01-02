import { View, Button, Alert } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export default function AlertScreen() {
    const showAlert = () => {
        Alert.alert('Titulo', 'Cuerpo del mensaje alerta', [
            {
                text: 'Cancel',
                onPress: () => Alert.alert('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK press') },
        ]);
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts" />

            <Button title="Mostrar Alerta" onPress={showAlert} />
        </View>
    );
}
