import React from "react";
import { View, Text, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View
      style={{
        height: 800,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Details Screen</Text>
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}
