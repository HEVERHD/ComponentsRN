import {
    View,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

export default function TextInputScreen() {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title="TextInputs" />

                    <TextInput
                        style={stylesScreen.input}
                        placeholder="Ingrese su nombre"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={value => onChange(value, 'name')}
                    />

                    <TextInput
                        style={stylesScreen.input}
                        placeholder="Ingrese su email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={value => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                    />

                    <View style={stylesScreen.switchRow}>
                        <Text style={stylesScreen.switchText}>
                            Suscribirse :
                        </Text>
                        <CustomSwitch
                            isOn={isSubscribed}
                            onChange={value => onChange(value, 'isSubscribed')}
                        />
                    </View>

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <TextInput
                        style={stylesScreen.input}
                        placeholder="Ingrese su telefono"
                        onChangeText={value => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const stylesScreen = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#5555554c',
        paddingHorizontal: 10,
        borderRadius: 7,
        marginVertical: 5,
    },

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginVertical: 5,
    },
    switchText: {
        fontSize: 25,
    },
});
