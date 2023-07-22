import React, { ReactNode } from 'react'
import { Text, TextProps } from 'react-native'
import { useColorScheme } from 'nativewind'

type Color = 'primary' | 'black' | 'white'
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
type Font =
  | 'poppins'
  | 'poppins-thin'
  | 'poppins-medium'
  | 'poppins-semibold'
  | 'poppins-bold'

interface Props extends TextProps {
  color?: Color
  size?: Size
  font?: Font
  children: ReactNode
}

const TextCustom: React.FC<Props> = ({
  size = 'base',
  color = 'black',
  font = 'poppins',
  ...props
}) => {
  const sizes: Record<Size, number> = {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48
  }

  const colors: Record<Color, string> = {
    white: useColorScheme().colorScheme === 'dark' ? 'white' : 'black',
    black: useColorScheme().colorScheme !== 'dark' ? 'black' : 'white',
    primary: '#0ea5e9'
  }

  const fonts: Record<Font, string> = {
    'poppins-thin': 'poppinsThin',
    poppins: 'poppins',
    'poppins-medium': 'poppinsMedium',
    'poppins-semibold': 'poppinsSemiBold',
    'poppins-bold': 'poppinsBold'
  }
  return (
    <Text
      {...props}
      style={{
        fontSize: sizes[size],
        color: colors[color],
        fontFamily: fonts[font]
      }}
    ></Text>
  )
}

export default TextCustom
