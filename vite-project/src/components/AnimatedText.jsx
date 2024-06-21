import React, { useState, useEffect } from 'react';
import './styles/AnimatedText.css';

const AnimatedText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <h1 className="animated-text">{displayedText}</h1>;
};

export default AnimatedText;
