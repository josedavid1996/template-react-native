import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import client from './src/apollo'
import { ApolloProvider } from '@apollo/client'
import HomeScreen from './src/screen/HomeScreen'
import Navigation from './src/navigation/navigation'
import { NavigationContainer } from '@react-navigation/native'
import useAuth from './src/hooks/useAuth'

export default function App() {
  // HOOK QUE VERIFICA SE O USUÁRIO ESTÁ LOGADO
  useAuth()

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigation />
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
