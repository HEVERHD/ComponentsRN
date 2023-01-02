import { Switch, Platform } from 'react-native';
import React, { useState } from 'react';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export default function CustomSwitch({ isOn, onChange }: Props) {
    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#D9D9Db', true: '#5856D6' }}
            thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
}
