import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        height: 800,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Home Screen</Text>
      <View>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}
