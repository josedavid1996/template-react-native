import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useCompanyQuery } from '../generated/graphql'
import { useAuthStore } from '../store/auth'
import HeaderCustom from '../components/shared/HeaderCustom'

const HomeScreen = () => {
  const updateDataAuth = useAuthStore((state) => state.updateDataAuth)
  const { data } = useCompanyQuery({
    fetchPolicy: 'network-only'
  })

  // FUNCICON PARA DESLOGUEARSE
  const handleLogout = () => {
    updateDataAuth({
      isLoading: false,
      isSignout: false,
      infoUser: {
        token: '',
        user: null
      }
    })
  }

  return (
    <View>
      <HeaderCustom title="Home" />
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
