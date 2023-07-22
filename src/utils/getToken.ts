import * as SecureStore from 'expo-secure-store'

export const getToken = async <T>() => {
  let token = await SecureStore.getItemAsync('token')
  let userData = await SecureStore.getItemAsync('userData')

  if (token && userData) {
    return {
      token: JSON.parse(token) as string,
      userData: JSON.parse(userData) as T
    }
  } else {
    return {
      token: '',
      userData: null
    }
  }
}
