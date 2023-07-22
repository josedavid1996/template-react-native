import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { useCompanyQuery } from '../generated/graphql'

import { useAuthStore } from '../store/auth'

import HeaderCustom from '../components/shared/HeaderCustom'
import LayoutCustom from '../components/layout/LayoutCustom'
import Button from '../components/shared/Button'
import TextCustom from '../components/shared/Text'

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
    <>
      <LayoutCustom>
        <View>
          <HeaderCustom title="Home" />
          <Text>HomeScreen</Text>
          <View style={{ alignItems: 'center' }}>
            <Button onPress={handleLogout}>
              <TextCustom color="textButton" font="poppins-bold">
                LOGOUT
              </TextCustom>
            </Button>
          </View>
        </View>
      </LayoutCustom>
    </>
  )
}

export default HomeScreen
