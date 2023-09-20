import React, { useState } from 'react'
import styles from '../Pricing.module.sass'
import Input from '../../Input';
import Textarea from '../../Textarea';
import Agreement from '../../Agreement'
import SendButton from '../../SendButton'

const PricingItem = ({ isForm, icon, title, price, border }) => {
  const [inputValue, setInputValue] = useState('');
  const [checkobxValue, setCheckboxValue] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

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

  const renderSoonContent = () => (
    <div className={styles.item_content}>
      <p className={styles.soon}>Coming soon</p>
      <p className={styles.price}>
        { price }
      </p>
    </div>
  );

  const renderContent = () => {
    if (!isForm) return renderSoonContent();

    return (
      <form onSubmit={ handleFrom } action="#" className={styles.form}>
        <Input
          placeholder='Your email'
          value={ inputValue }
          setInputValue={ setInputValue }
          inputError={ inputError }
          setInputError={ setInputError }
        />
        <Textarea
          placeholder='Describe your idea'
          width='260px'
          height='135px'
        />
        <div className={ styles.form_bottom }>
          <Agreement
            id='checkbox2'
            checkobxValue={ checkobxValue }
            setCheckboxValue={ setCheckboxValue }
            checkboxError={ checkboxError }
            setCheckboxError={ setCheckboxError }
          />
          <SendButton />
         </div>
      </form>
    );
  }

  return (
    <div className={ styles.item } style={{border: border ? '1px solid #03E7D9' : ''}}>
      <div className={styles.item_top}>
        <div className={styles.icon}>
          <img src={ icon } alt="" />
        </div>
        <div className={styles.title}>
          { title }
        </div>
      </div>
      { renderContent() }
    </div>
  )
}

export default PricingItem
