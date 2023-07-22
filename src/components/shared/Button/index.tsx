import { ButtonVariant, variants } from './variants'
import { classNames } from '../../../utils/classNames'
import {
  ActivityIndicator,
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
        {isLoading && <ActivityIndicator color="black" size={20} />}
      </>
    </TouchableOpacity>
  )
}

export default Button
