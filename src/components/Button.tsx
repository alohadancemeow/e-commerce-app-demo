import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import Spinner from './Spinner';

// # A Custom button

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: string
  width?: string
  loading?: boolean
  spinerColor?: string
  spinnerHeight?: number
  spinnerWidth?: number
};

const Button = forwardRef((
  {
    children,
    disabled,
    style,
    className,
    height = '2.7rem',
    width = '9rem',
    loading,
    spinerColor,
    spinnerHeight,
    spinnerWidth,
    ...props
  }: Props,
  ref: Ref<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      className={`btn ${className}`}
      disabled={disabled}
      style={{
        cursor: loading || disabled ? 'not-allowed' : undefined,
        height,
        width,
        ...style
      }}
      {...props}
    >

      {loading ? <Spinner color={spinerColor} height={spinnerHeight} width={spinnerWidth} /> : children}

    </button>
  )
})

export default Button;


