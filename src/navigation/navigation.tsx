import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screen/HomeScreen'
import { useAuthStore } from '../store/auth'
import ProfileScreen from '../screen/ProfileScreen'
import SettingsScreen from '../screen/SettingsScreen'
import SignInScreen from '../screen/SignInScreen'
import SigunUpScreen from '../screen/SigunUpScreen'
import SplashScreen from '../screen/SplashScreen'

type RootStackParamList = {
  HomeScreen: undefined
  ProfileScreen: undefined
  SettingsScreen: undefined
  SignInScreen: undefined
  SigunUpScreen: undefined
}
const NavigationStack = createStackNavigator<RootStackParamList>()
const Navigation = () => {
  // DATA DE AUTENTICACION
  const dataAuth = useAuthStore((state) => state.dataAuth)

  if (dataAuth.isLoading) {
    // SPLASH SCREEN
    return <SplashScreen />
  }

  return (
    <>
      <NavigationStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        {dataAuth.isSignout ? (
          <>
            <NavigationStack.Screen name="HomeScreen" component={HomeScreen} />
            <NavigationStack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
            />
            <NavigationStack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
            />
          </>
        ) : (
          <>
            <NavigationStack.Screen
              name="SignInScreen"
              component={SignInScreen}
            />
            <NavigationStack.Screen
              name="SigunUpScreen"
              component={SigunUpScreen}
            />
          </>
        )}
      </NavigationStack.Navigator>
    </>
  )
}

export default Navigation
