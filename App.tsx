import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import client from './src/apollo'
import { ApolloProvider } from '@apollo/client'
import HomeScreen from './src/screen/HomeScreen'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
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
