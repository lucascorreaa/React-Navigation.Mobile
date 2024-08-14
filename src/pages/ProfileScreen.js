import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View
      style={{
        height: 800,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Profile Screen</Text>
      <View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
}
