import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/home";
import Register from "../screens/register";
import Login from "../screens/login";


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
