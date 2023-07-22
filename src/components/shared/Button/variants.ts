export type ButtonVariant = 'solid' | 'outline' | 'ghost'

interface ButtonColors {
  white: string
  primary: string
  secondary: string
  error: string
}

export const variants: Record<ButtonVariant, ButtonColors> = {
  solid: {
    primary: 'border-transparent bg-primary',
    error: 'text-white border-transparent bg-red-500 ',
    secondary: 'text-white border-transparent bg-secondary ',
    white: 'text-secondary border-transparent bg-white '
  },
  outline: {
    primary: 'bg-transparent text-primary border-primary ',
    error: 'bg-transparent text-primary border-red-500  ',
    white: 'bg-transparent  text-white border-white ',
    secondary:
      'bg-transparent text-secondary border-secondary   dark:text-secondary-500 dark:border-secondary-500 '
  },
  ghost: {
    primary: 'bg-transparent border-transparent text-primary hover:text-white ',
    error: 'bg-transparent border-transparent text-white hover:text-white ',
    secondary: 'bg-transparent border-transparent text-secondary ',
    white: 'bg-transparent border-transparent text-white '
  }
}
