import React, { useState } from 'react'
import styles from './Popup.module.sass'
import Input from '../Input'
import Textarea from '../Textarea'
import Agreement from '../Agreement'
import SendButton from '../SendButton'
import closeIcon from '../../images/close.svg'

const Popup = ({ setPopup }) => {
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
    <div className={ styles.root }>
      <div className={styles.bg} onClick={ () => setPopup(false) }></div>
      <div className={styles.content}>
        <img className={ styles.close } onClick={ () => setPopup(false) } src={ closeIcon } alt="" />
        <h2 className={styles.title}>
          Need support?
        </h2>
        <p className={styles.text}>
          For any question, feedback or request, don't hesitate to contact us. We will answer as soon as possible.
        </p>
        <form action="#" onSubmit={handleFrom} className={styles.form}>
          <Input 
            placeholder='Your name'
            width='825px'
            setInputValue={ setInputValue }
            inputError={ inputError }
            setInputError={ setInputError }
          />
          <Input
            width='825px'
            placeholder='Your email'
            value={ emailInput }
            setInputValue={ setEmailInput }
            inputError={ emailError }
            setInputError={ setEmailError }
          />
          <Textarea
            placeholder='Your message'
          />
          <div className={styles.form_bottom}>
            <Agreement 
              setCheckboxValue={ setCheckboxValue }
              checkobxValue={ checkobxValue }
              checkboxError={ checkboxError }
              setCheckboxError={ setCheckboxError }
            />
            <SendButton/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Popup
