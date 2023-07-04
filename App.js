import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LargeButton from './src/components/large_button';
import TextField from './src/components/textfield';

export default function App() {
  return (
    <View style={styles.container}>
      <TextField placeholder="(###) ###-####" keyboardType="phone-pad"/>
      <LargeButton title="Next"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
