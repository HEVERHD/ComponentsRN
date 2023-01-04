import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefreshScreen from '../screens/PullToRefreshScreen';
import CustomListScreen from '../screens/CustomListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollscreen from '../screens/InfiniteScrollscreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        // backgroundColor: 'white',
                    },
                }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Animations01" component={Animation101} />
                <Stack.Screen name="Animations02" component={Animation102} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen
                    name="TextInputScreen"
                    component={TextInputScreen}
                />
                <Stack.Screen
                    name="PullToRefreshScreen"
                    component={PullToRefreshScreen}
                />
                <Stack.Screen
                    name="CustomListScreen"
                    component={CustomListScreen}
                />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen
                    name="InfiniteScrollscreen"
                    component={InfiniteScrollscreen}
                />
                <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                <Stack.Screen
                    name="ChangeThemeScreen"
                    component={ChangeThemeScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
