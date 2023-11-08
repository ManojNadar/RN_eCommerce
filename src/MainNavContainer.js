import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import MainBottomTab from "./BottomTabs/MainBottomTab";
import Register from "./Register";
const Stack = createNativeStackNavigator();

const MainNavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="mainbottomtab">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen
          name="mainbottomtab"
          component={MainBottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavContainer;
