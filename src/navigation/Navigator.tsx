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

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#21003b',
                },
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animations01" component={Animation101} />
            <Stack.Screen name="Animations02" component={Animation102} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
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
        </Stack.Navigator>
    );
};
