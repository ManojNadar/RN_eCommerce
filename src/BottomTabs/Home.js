import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate("login")} />
    </View>
  );
};

export default Home;
