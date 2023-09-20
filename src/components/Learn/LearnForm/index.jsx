import React, { useState } from 'react'
import styles from '../Learn.module.sass'
import Input from '../../Input'
import Agreement from '../../Agreement'
import SendButton from '../../SendButton'


const LearnForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkobxValue, setCheckboxValue] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleFrom = (e) => {
    e.preventDefault();

    const valid = [];

    const values = [
      { 
        value: inputValue,
        setError: setInputError,
      },
      {
        value: checkobxValue,
        setError: setCheckboxError,
      },
      {
        value: emailInput,
        setError: setEmailError,
      }
    ]

    values.forEach(({ value, setError }) => {
      if (typeof value === 'string') {
        if (value.length < 2) {
          setError(true)
          valid.push(false);
        } else {
          setError(false)
          valid.push(true);
        }
      }

      if (typeof value === 'boolean') {
        if (!value) {
          setError(true)
          valid.push(false);
        } else {
          setError(false)
          valid.push(true);
        }
      }
    })
    
    const isValid = valid.every(bool => bool); 

    if (isValid) console.log('send!');
  }

  return (
    <form className={ styles.form } onSubmit={ handleFrom }>
      <Input 
        placeholder='Your name'
        value={ inputValue }
        setInputValue={ setInputValue }
        inputError={ inputError }
        setInputError={ setInputError }
      />
      <Input
        placeholder='Your email'
        value={ emailInput }
        setInputValue={ setEmailInput }
        inputError={ emailError }
        setInputError={ setEmailError }
      />
      <Input placeholder='Your phone'/>
      <div className={ styles.form_bottom }>
        <Agreement
          id='checkobx1'
          checkobxValue={ checkobxValue }
          setCheckboxValue={ setCheckboxValue }
          checkboxError={ checkboxError }
          setCheckboxError={ setCheckboxError }
        />
        <SendButton/>
      </div>
    </form>
  )
}

export default LearnForm
