import React, { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '1vh',
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
          <img
            src={isDarkMode ? '/Linkedin_white.svg' : '/Linkedin.svg'}
            style={{ width: '1.75rem' }}
            alt="LinkedIn"
          />
        </Link>
        <Link href={'https://github.com/almond5'}>
          <img
            src={isDarkMode ? '/Github_white.svg' : '/Github.svg'}
            style={{ width: '1.75rem' }}
            alt="GitHub"
          />
        </Link>
        <Link href={'/resume.pdf'}>
          <img
            src={isDarkMode ? '/Resume_white.svg' : '/Resume.svg'}
            style={{ width: '1.25rem' }}
            alt="Resume"
          />
        </Link>
        <Link href={'mailto:adrianhossen4@gmail.com'}>
          <img
            src={isDarkMode ? '/Gmail_white.svg' : '/Gmail.svg'}
            style={{ width: '1.75rem', marginTop: '0.25rem', marginLeft: '0.2vh' }}
            alt="Gmail"
          />
        </Link>
      </div>
      <Button
        className={styles.buttonContainer}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Back to Top
      </Button>
    </div>
  );
}