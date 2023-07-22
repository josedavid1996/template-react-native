import { ButtonVariant, variants } from './variants'
import { classNames } from '../../../utils/classNames'
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

type Color = 'primary' | 'secondary' | 'white' | 'error'

interface Props extends TouchableOpacityProps {
  color?: Color
  isIcon?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
  opacity?: number
}

const btnIcon =
  'border-[1.5px] w-[35px] h-[35px] outline-none rounded-lg grid place-items-center '
const btn =
  'flex items-center justify-center  border-[1.5px] py-2 px-8 outline-none rounded-lg'

const Button = ({
  isIcon,
  isLoading,
  color = 'primary',
  variant = 'solid',
  opacity = 0.8,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.shadow}
      activeOpacity={opacity}
      {...props}
      disabled={props.disabled || isLoading}
      className={classNames([
        'duration-200 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed',
        variants[variant][color],
        props.className,
        isIcon ? btnIcon : btn
      ])}
    >
      <>
        {!isIcon && !isLoading && props.children}
        {isIcon && !isLoading && props.children}
        {isLoading && (
          <ActivityIndicator
            color={color === 'primary' ? 'white' : color}
            size={25}
          />
        )}
      </>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})
