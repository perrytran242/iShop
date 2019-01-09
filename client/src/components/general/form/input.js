import React from 'react';

export default ({ autoComplete = 'off', size='s12', label, type='text', input, meta: { touched, error} }) => {
    return (
        <div className={`input-field col ${size}`}>
            <input {...input} 
                id={input.name} 
                type={type} 
                autoComplete={autoComplete}
            />
            <label className={input.value ? 'active' : ''} htmlFor={input.name}>{label}</label>
            <div className="input-error red-text text-darken-2">{ touched && error}</div>
        </div>
    );
}