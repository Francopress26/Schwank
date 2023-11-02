import React from 'react';
import Wsp from '../../assets/WhatsApp.svg'
import styles from './wsp.module.css'
const WhatsAppButton = () => {
  return (
    <div className={styles.whatsapp}>
      <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER">
        <img src={Wsp.src} width={70} height={70} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default WhatsAppButton;