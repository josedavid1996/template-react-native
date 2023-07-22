import React from 'react'

import { View, Text, Switch } from 'react-native'

import { useColorScheme } from 'nativewind'

const SwitchDarkMode = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <View>
      <Switch />
    </View>
  )
}

export default SwitchDarkMode
