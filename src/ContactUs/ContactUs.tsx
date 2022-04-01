import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import Button from '../common/Button/Button';
import style from './contactus.module.scss';

const ContactUs = () => {
  const [firstName, setFirstName]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');
  const [lastName, setLastName]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');
  const [email, setEmail]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');
  const [message, setMessage]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');

  return (
    <div className={style['contact-container']}>
      <h3>Contact The Cornwell Center</h3>
      <form>
        <div className={style['contact-names']}>
          <label>First Name:</label>
          <input type={'text'} value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.currentTarget.value)} />
          <label>Last Name:</label>
          <input type={'text'} value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.currentTarget.value)} />
        </div>
        <div className={style['contact-email']}>
          <label htmlFor="email">Email:</label>
          <input type={'email'} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} />
        </div>
        <div className={style['contact-message']}>
          <label htmlFor='message'>Message:</label>
          <textarea value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)} />
        </div>
        <div className={style['btn-container']}>
          <Button type={'submit'} className='submit'>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs;