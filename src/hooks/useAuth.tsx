import React, { useState, useEffect } from 'react'

import * as SecureStore from 'expo-secure-store'

import { StateProps } from '../interface/auth'
import { useAuthStore } from '../store/auth'

const useAuth = () => {
  // FUNCION PARA ACTUALIZAR EL ESTADO DE AUTENTICACION
  const updateDataAuth = useAuthStore((state) => state.updateDataAuth)

  useEffect(() => {
    const autentication = async () => {
      const token = await SecureStore.getItemAsync('token')
      const dataUser = await SecureStore.getItemAsync('userData')
      if (token && dataUser) {
        updateDataAuth({
          isLoading: false,
          isSignout: true,
          infoUser: {
            token: token,
            user: dataUser
          }
        })
      } else {
        updateDataAuth({
          isLoading: false,
          isSignout: false,
          infoUser: {
            token: '',
            user: null
          }
        })
      }
    }
    autentication()
  }, [])
}

export default useAuth
