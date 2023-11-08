import { View, Text } from "react-native";
import React from "react";

const Register = ({ navigation }) => {
  return (
    <View>
      <Text>register</Text>
      <Button onPress={() => navigation.navigate("login")} title="Register" />
    </View>
  );
};

export default Register;
