import React from 'react'

import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import SwitchDarkMode from '../SwitchDarkMode/index'

import { useFonts } from 'expo-font'

interface Props {
  title: string
}

const HeaderCustom = ({ title }: Props) => {
  return (
    <View className="flex flex-row justify-between px-2 py-1 items-center ">
      {/* ICON */}
      <View>
        <Ionicons name="chevron-back-outline" size={30} color="#677483" />
      </View>

      {/* TITLE */}
      <Text
        // style={{ fontFamily: 'Lumanosimo-Regular' }}
        className="font-poppins   text-lg text-gray-700"
      >
        {title}
      </Text>
      {/* SWITCH */}
      <SwitchDarkMode />
    </View>
  )
}

export default HeaderCustom
