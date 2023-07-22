import React from 'react'

import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import SwitchDarkMode from '../SwitchDarkMode/index'

import TextCustom from '../Text'

interface Props {
  title: string
}

const HeaderCustom = ({ title }: Props) => {
  return (
    <View className="flex flex-row justify-between px-2 items-center bg-white dark:bg-black">
      {/* ICON */}
      <Ionicons name="chevron-back-outline" size={27} color="#677483" />

      {/* TITLE */}
      <TextCustom font="poppins-semibold" size="xl" color="primary">
        {title}
      </TextCustom>

      {/* SWITCH */}
      <SwitchDarkMode />
    </View>
  )
}

export default HeaderCustom
