import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div
      style={{
        display: 'flex', // Use Flexbox
        marginTop: '35vh',
        height: '50vh',
        textAlign: 'center',
        width: '100%', // Ensure the parent container takes full width
        justifyContent: 'center', // Center the child elements
      }}
    >
      <div
        style={{
          textAlign: 'left',
          maxWidth: '40vh',
          marginRight: '3vw',
          width: '50%',
        }}
      >
        <a className={styles.name}>Hello, I'm Adrian</a>
        <div style={{ marginTop: '0.5vh' }}>
          I am a software developer with a growth mindset who is always eager to
          learn more. Please do not hesitate to contact me with any inquiries or
          if you would just like to chat.{' '}
        </div>
        <button className={styles.buttonContainer}>Contact Me</button>
      </div>
      <div style={{ minWidth: '1vh' }}>
        <img src={'/me.png'} alt={'Adrian Hossen'} />
      </div>
    </div>
  );
}
