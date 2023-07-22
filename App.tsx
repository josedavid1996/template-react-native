import { StyleSheet } from 'react-native'

import client from './src/apollo'
import { ApolloProvider } from '@apollo/client'

import Navigation from './src/navigation/navigation'
import { NavigationContainer } from '@react-navigation/native'

import useAuth from './src/hooks/useAuth'

import { SafeAreaView } from 'react-native-safe-area-context'

import { useFonts } from 'expo-font'

export default function App() {
  // HOOK QUE VERIFICA SE O USUÁRIO ESTÁ LOGADO
  useAuth()

  const [loaded] = useFonts({
    poppinsThin: require('./assets/fonts/Poppins-Thin.ttf'),
    poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    poppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView className="flex-1">
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
