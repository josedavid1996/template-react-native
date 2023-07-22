import React from 'react'
import { Text, View } from 'react-native'
import { useCompanyQuery } from '../generated/graphql'

const HomeScreen = () => {
  const { data } = useCompanyQuery({
    fetchPolicy: 'network-only'
  })
  console.log(data)
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen
