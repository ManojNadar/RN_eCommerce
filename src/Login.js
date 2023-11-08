import { View, Text, Button } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => navigation.navigate("mainbottomtab")}
        title="Login"
      />
    </View>
  );
};

export default Login;
