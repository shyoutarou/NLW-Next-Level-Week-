import React, {SelectHTMLAttributes} from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>  {
    label: string;
    name: string;
    options: Array<{
        id: string, value: string
    }>;
  }

const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => 
{
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select  {...rest} id={name}>
                <option value="" hidden >Selecione um opção</option>
                {options.map(option => {
                    return <option key={option.id} value={option.id}>{option.value}</option>
                })}
            </select>
        </div>
    )
}

export default Select;