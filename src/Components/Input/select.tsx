import React from 'react'
import './TextInput.scss'


const Select = ({ label, options, placeholder,  ...rest }:any) => {
  return (
    <div className="text-input">
        <label>{label}</label>
        <div className="select">
            <select {...rest}>
                <option disabled selected>{placeholder}</option>
                {options.map((x:any) => (
                    <option key={x.value} value={x.value}>{x.label}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default Select