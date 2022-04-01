import React from 'react'
import style from './button.module.scss';

type ButtonType = {
  children: any,
  className: string | undefined,
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({children, className, type}: ButtonType) => {
  return (
    <button type={type ? type : 'button'} className={`${style.btn} ${className ? style[`${className}`] : ''}`}>{children}</button>
  )
}

export default Button