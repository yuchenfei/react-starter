import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variantClasses =
      variant === 'primary'
        ? 'bg-blue-500 text-white hover:bg-blue-600'
        : 'bg-gray-500 text-white hover:bg-gray-600'
    const sizeClasses = {
      sm: 'px-2.5 py-1.5 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
    }[size]

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
