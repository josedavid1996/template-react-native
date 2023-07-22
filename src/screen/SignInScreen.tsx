import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthStore } from '../store/auth'

const SignInScreen = () => {
  const updateDataAuth = useAuthStore((state) => state.updateDataAuth)

  const handleLogin = () => {
    // ACA SE PONE LA LLAMADA DE LA API PARA LOGUEARSE Y ACTUALIZA EL ESTADO DE AUTENTICACION
    updateDataAuth({
      isLoading: false,
      isSignout: true,
      infoUser: {
        token: 'toeksdsdfdfhsdh',
        user: {
          name: 'Jhon Doe'
        }
      }
    })
  }
  return (
    <View>
      <Text>SignInScreen</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen
