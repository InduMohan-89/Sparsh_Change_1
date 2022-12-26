import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import  {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cause from './screens/Cause';
import ExerciseRecord from './screens/ExerciseRecord';
import NoPhoneRecord from './screens/NoPhoneRecord';

const Stack = createStackNavigator();

function App () {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cause' 
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name = "Cause" component={Cause}  />
        <Stack.Screen name = "ExerciseR" component={ExerciseRecord} />
        <Stack.Screen name='NoPhoneR' component={NoPhoneRecord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
