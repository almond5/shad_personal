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
        padding: '0 5vw',
      }}
    >
      <div className={styles.heroContainer}>
        <span className={styles.name}>Hello, I'm Adrian</span>
        <div style={{ marginTop: '0.5vh' }}>
          I am a software developer with a growth mindset who is always eager to
          learn more. Please do not hesitate to contact me with any inquiries or
          if you would just like to chat.{' '}
        </div>
        <button
          className={styles.buttonContainer}
          onClick={() => {
            window.open('mailto:adrianhossen4@gmail.com');
          }}
        >
          Contact Me
        </button>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={'/me.png'}
          alt={'Adrian Hossen'}
          style={{ width: 'inherit' }}
          className={styles.img}
        />
      </div>
    </div>
  );
}
