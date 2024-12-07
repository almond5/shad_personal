import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '18px',
          marginRight: '0.25rem',
          margin: '0 auto',
          justifyContent: 'center',
        }}
      >
        <Link href={'https://www.linkedin.com/in/adrian5/'}>
          <img src="/Linkedin.svg" style={{ width: '1.75rem' }}></img>
        </Link>
        <Link href={'https://github.com/almond5'}>
          <img src="/Github.svg" style={{ width: '1.75rem' }}></img>
        </Link>
        <Link href={'/resume.pdf'}>
          <img src="/Resume.svg" style={{ width: '1.25rem' }}></img>
        </Link>
        <Link href={'mailto:adrianhossen4@gmail.com'}>
          <img src="/Gmail.svg" style={{ width: '1.75rem', marginTop: '0.25rem' }}></img>
        </Link>
      </div>
      <button
        style={{ position: 'absolute', right: 20, marginBottom: 10 }}
        className={styles.buttonContainer}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Back to Top
      </button>
    </div>
  );
}
