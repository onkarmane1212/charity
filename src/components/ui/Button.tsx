import { forwardRef } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion, MotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  /** Button style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether the button should take full width */
  fullWidth?: boolean;
  /** Show loading spinner */
  isLoading?: boolean;
  /** Additional class names */
  className?: string;
  /** Button content */
  children: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

// Type for button element
interface ButtonElementProps extends BaseButtonProps {
  /** Render as a button */
  as?: 'button';
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Type for link element
interface LinkElementProps extends BaseButtonProps {
  /** Render as a link */
  as: 'a';
  /** Link URL */
  href: string;
  /** Link target */
  target?: string;
  /** Link rel attribute */
  rel?: string;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

// Union type for all possible button props
// Extend button props with motion props
type ButtonProps = (ButtonElementProps | LinkElementProps) & MotionProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600',
  secondary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:outline-gray-300',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:outline-gray-300',
  link: 'bg-transparent text-emerald-600 hover:text-emerald-700 hover:underline focus-visible:outline-emerald-600',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded',
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-6 py-3 text-base rounded-lg',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({
    as = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    className = '',
    disabled = false,
    children,
    // Animation props with defaults
    initial = { opacity: 1 },
    animate = { opacity: 1 },
    whileHover = { scale: 1.03 },
    whileTap = { scale: 0.98 },
    transition = { type: 'spring', stiffness: 400, damping: 17 },
    ...props
  }, ref) => {
    // Button classes with variants and sizes
    const buttonClasses = twMerge(
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500',
      'disabled:opacity-70 disabled:cursor-not-allowed',
      variantStyles[variant] || variantStyles.primary,
      sizeStyles[size] || sizeStyles.md,
      fullWidth ? 'w-full' : '',
      className,
      isLoading ? 'relative' : ''
    );

    // Animation props
    const motionProps = {
      initial,
      animate,
      whileHover: disabled ? {} : whileHover,
      whileTap: disabled ? {} : whileTap,
      transition,
      ...(props as MotionProps)
    };

    // Render as link
    if (as === 'a') {
      const { href, target, rel, ...linkProps } = props as LinkElementProps;
      return (
        <motion.span {...motionProps}>
          <Link
            href={href}
            target={target}
            rel={rel}
            className={buttonClasses}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...linkProps}
          >
            {isLoading && <LoadingSpinner />}
            {children}
          </Link>
        </motion.span>
      );
    }

    // Render as button
    const { type = 'button', ...rest } = props as ButtonElementProps;
    return (
      <motion.button
        type={type}
        className={buttonClasses}
        disabled={disabled || isLoading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...motionProps}
        {...rest}
      >
        {isLoading && <LoadingSpinner />}
        {children}
      </motion.button>
    );
  }
);

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

Button.displayName = 'Button';

export default Button;
