import React from 'react'

import { View, Text, Switch } from 'react-native'

import { useColorScheme } from 'nativewind'

const SwitchDarkMode = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <View>
      <Switch
        trackColor={{ false: '#7dd3fc', true: '#7dd3fc' }}
        thumbColor={colorScheme === 'dark' ? '#0c4a6e' : '#bae6fd'}
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
      />
    </View>
  )
}

export default SwitchDarkMode
