import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-red-600 font-bold">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}