import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import CommentsScreen from '../screen/CommentsScreen';
import TabNavigator from './TabNavigator';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Application" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
