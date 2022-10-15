import React from 'react'
import './Button.scss'

type Props = {
  children?: React.ReactNode
};
const Button: React.FC<Props> = ({ children, ...props}) => {
  return (
    <div className="button-containers">
        <button {...props}>{children}</button>
    </div>
  )
}

export default Button