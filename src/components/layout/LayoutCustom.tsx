import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutCustom = ({ children }: Props) => {
  return <View className="bg-white dark:bg-black flex-1">{children}</View>
}

export default LayoutCustom
