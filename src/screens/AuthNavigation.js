import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./Welcome";
import SignUp from "./SignUp";
import Login from "./Login";
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomePage" component={Welcome}
                options={
                    {
                        headerShown: false,
                    }
                } />
            <Stack.Screen name="SignUpPage" component={SignUp}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen name="loginPage" component={Login}
                options={
                    {
                        headerShown: false,
                    }
                } />
        </Stack.Navigator>

    )
}

export default AuthNavigation
