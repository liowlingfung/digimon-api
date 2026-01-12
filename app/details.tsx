import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  console.log(params.name)

  return (
    <>
      <Stack.Screen options={{ title: params.name as string, headerShown: true}} />
      <ScrollView contentContainerStyle={{gap: 20, padding: 16}}>
        <Text>{params.name}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details:{
    fontSize: 16,
    color: "gray"
  },
  level: {
    fontSize: 16,
  },
  attribute: {
    fontSize: 16,
  },
  group:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 5
  },
});