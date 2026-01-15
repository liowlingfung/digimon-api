import { Stack, useLocalSearchParams } from "expo-router";
import { Button, ScrollView, Text } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();

  console.log(params.name)

  return (
    <>
      <Stack.Screen options={{ title: params.name as string, headerShown: true}} />
      <ScrollView contentContainerStyle={{gap: 20, padding: 16}}>
        <Text>{params.name}</Text>
        <Button
          title="Test Button"
        >
        </Button>
      </ScrollView>
    </>
  );
}