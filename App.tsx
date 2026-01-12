import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProgramsScreen from './src/screens/ProgramsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProgramsScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
