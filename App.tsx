import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './android/app/src/Screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SelectCity from './android/app/src/Screens/SelectCity';
import Home from './android/app/src/Screens/Home';
import Details from './android/app/src/Screens/Details';

import Theater from './android/app/src/Screens/Theater';
import MyTickets from './android/app/src/Screens/MyTickets';
import Wrapper from './android/app/src/Components/Context/Wrapper';
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Wrapper>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='SelectCity' component={SelectCity} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='Theater' component={Theater} />
        <Stack.Screen name='MyTickets' component={MyTickets} />
      </Stack.Navigator>
    </NavigationContainer>
    </Wrapper>
  )
}

export default App

const styles = StyleSheet.create({})