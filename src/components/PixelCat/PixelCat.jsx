// src/components/PixelCat/PixelCat.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './pixelCat.css';

const MEOWS = ["meow!", "purrr...", "prrrt?", "nya~", "*stretch*", "*yawn*", "hello!"];

const PixelCat = () => {
  const [catState, setCatState] = useState('sleeping'); // sleeping, sitting, meowing
  const [bubbleText, setBubbleText] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  // Random tail wiggles for the sitting state
  useEffect(() => {
    if (catState !== 'sitting') return;

    const interval = setInterval(() => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 1500);
    }, 4000);

    return () => clearInterval(interval);
  }, [catState]);

  const handleMouseEnter = () => {
    if (catState === 'sleeping') {
      setCatState('sitting');
      // Show yawn bubble sometimes when waking up
      if (Math.random() > 0.5) {
        triggerBubble('*yawn*');
      }
    }
  };

  const handleMouseLeave = () => {
    // Settle down back to sleep after 3 seconds of inactive hovering
    const timer = setTimeout(() => {
      setCatState('sleeping');
      setShowBubble(false);
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleClick = () => {
    setCatState('meowing');
    const randomMeow = MEOWS[Math.floor(Math.random() * MEOWS.length)];
    triggerBubble(randomMeow);

    // Revert to sitting after 1.2s meow animation completes
    setTimeout(() => {
      setCatState('sitting');
    }, 1200);
  };

  const triggerBubble = (text) => {
    setBubbleText(text);
    setShowBubble(true);
    // Hide bubble after 2 seconds
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  // --- SVG FRAME: SLEEPING ---
  const renderSleeping = () => (
    <motion.svg 
      className="pixel-cat-svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scaleY: [1, 1.04, 1], y: [0, -0.5, 0] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      style={{ originY: "21px" }}
    >
      {/* Shadow under cat */}
      <ellipse cx="12" cy="20" rx="9" ry="2" fill="#000000" opacity="0.3" />
      
      {/* Sleeping Curled Tail */}
      <rect x="2" y="15" width="4" height="4" fill="#e67e22" />
      <rect x="3" y="16" width="2" height="2" fill="#ffae19" />
      
      {/* Curled Body */}
      <rect x="4" y="12" width="15" height="8" fill="#ffae19" rx="1" />
      {/* Shading/Shadows on body bottom */}
      <rect x="5" y="18" width="13" height="2" fill="#e67e22" />
      {/* Tabby Stripes */}
      <rect x="7" y="12" width="2" height="6" fill="#e67e22" />
      <rect x="11" y="12" width="2" height="6" fill="#e67e22" />
      <rect x="15" y="13" width="2" height="5" fill="#e67e22" />

      {/* Cat Head */}
      <rect x="12" y="8" width="9" height="9" fill="#ffae19" rx="1" />
      <rect x="13" y="15" width="7" height="2" fill="#e67e22" /> {/* Head shading */}
      
      {/* Cute White Muzzle */}
      <rect x="15" y="13" width="5" height="3" fill="#ffffff" rx="0.5" />
      <rect x="17" y="13" width="1" height="1" fill="#ff8080" /> {/* Pink nose */}
      
      {/* Cute Pink Cheeks/Blush */}
      <rect x="14" y="12" width="1" height="1" fill="#ff9999" opacity="0.8" />
      <rect x="19" y="12" width="1" height="1" fill="#ff9999" opacity="0.8" />
      
      {/* Ears with Pink Inners */}
      <polygon points="12,8 12,4 15,8" fill="#ffae19" />
      <polygon points="13,7 13,5 14,7" fill="#ff9999" />
      <polygon points="18,8 21,4 21,8" fill="#ffae19" />
      <polygon points="19,7 20,5 20,7" fill="#ff9999" />
      
      {/* Sleeping Eyes (Closed curve) */}
      <path d="M 14 11 Q 15 12 16 11" stroke="#2c3e50" strokeWidth="1" strokeLinecap="round" />
      <path d="M 18 11 Q 19 12 20 11" stroke="#2c3e50" strokeWidth="1" strokeLinecap="round" />
    </motion.svg>
  );

  // --- SVG FRAME: SITTING ---
  const renderSitting = () => (
    <svg className="pixel-cat-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="12" cy="20" rx="8" ry="1.5" fill="#000000" opacity="0.3" />
      
      {/* Tail (vertical) with animate wiggle */}
      <motion.g
        animate={isWiggling ? { rotate: [0, -10, 10, -7, 7, 0] } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ originX: "4px", originY: "19px" }}
      >
        <path d="M 3 10 C 3 10 3 19 4 19 C 5 19 5 10 5 10" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 3.2 10 C 3.2 10 3.2 18 4 18 C 4.8 18 4.8 10 4.8 10" stroke="#ffae19" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="7" width="2" height="3" fill="#ffffff" rx="0.5" /> {/* White tail tip */}
      </motion.g>
      
      {/* Back legs */}
      <rect x="5" y="16" width="3" height="4" fill="#e67e22" rx="1" />
      <rect x="16" y="16" width="3" height="4" fill="#e67e22" rx="1" />
      
      {/* Front legs & paws */}
      <rect x="8" y="14" width="3" height="6" fill="#e67e22" />
      <rect x="13" y="14" width="3" height="6" fill="#e67e22" />
      <rect x="9" y="15" width="1.5" height="5" fill="#ffae19" />
      <rect x="13.5" y="15" width="1.5" height="5" fill="#ffae19" />
      {/* White paws */}
      <rect x="8" y="19" width="3" height="1.5" fill="#ffffff" rx="0.5" />
      <rect x="13" y="19" width="3" height="1.5" fill="#ffffff" rx="0.5" />
      
      {/* Body */}
      <rect x="6" y="11" width="12" height="7" fill="#ffae19" rx="2" />
      <rect x="9" y="11" width="6" height="7" fill="#ffffff" rx="1" /> {/* White Chest */}
      {/* Shading/Stripes */}
      <rect x="6" y="13" width="1" height="3" fill="#e67e22" />
      <rect x="17" y="13" width="1" height="3" fill="#e67e22" />
      
      {/* Head */}
      <rect x="6" y="4" width="12" height="9" fill="#ffae19" rx="2" />
      <rect x="7" y="11" width="10" height="2" fill="#e67e22" /> {/* Shading */}
      
      {/* Muzzle */}
      <rect x="9" y="9" width="6" height="3" fill="#ffffff" rx="1" />
      <rect x="11.5" y="9" width="1" height="1" fill="#ff8080" /> {/* Pink nose */}
      
      {/* Cute Blush Cheeks */}
      <rect x="7.5" y="9.5" width="1.5" height="1.5" fill="#ff9999" rx="0.5" opacity="0.8" />
      <rect x="15" y="9.5" width="1.5" height="1.5" fill="#ff9999" rx="0.5" opacity="0.8" />
      
      {/* Ears */}
      <polygon points="6,4 6,0 10,4" fill="#ffae19" />
      <polygon points="7,3 7,1 9,3" fill="#ff9999" />
      <polygon points="14,4 18,0 18,4" fill="#ffae19" />
      <polygon points="15,3 17,1 17,3" fill="#ff9999" />
      
      {/* Anime Sparkly Eyes */}
      <rect x="7.5" y="6.5" width="3" height="3" fill="#2c3e50" rx="0.5" />
      <rect x="13.5" y="6.5" width="3" height="3" fill="#2c3e50" rx="0.5" />
      <rect x="7.5" y="6.5" width="1.5" height="1.5" fill="#ffffff" />
      <rect x="13.5" y="6.5" width="1.5" height="1.5" fill="#ffffff" />
      
      {/* Whiskers */}
      <line x1="4" y1="9.5" x2="6" y2="9.5" stroke="#2c3e50" strokeWidth="0.8" />
      <line x1="18" y1="9.5" x2="20" y2="9.5" stroke="#2c3e50" strokeWidth="0.8" />
    </svg>
  );

  // --- SVG FRAME: MEOWING / HAPPY ---
  const renderMeowing = () => (
    <svg className="pixel-cat-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="12" cy="20" rx="8" ry="1.5" fill="#000000" opacity="0.3" />
      
      {/* Tail (excited vertical wiggle) */}
      <motion.g
        animate={{ rotate: [-15, 15, -15, 15, 0] }}
        transition={{ duration: 0.6, repeat: 2 }}
        style={{ originX: "4px", originY: "19px" }}
      >
        <path d="M 3 10 C 3 10 3 19 4 19 C 5 19 5 10 5 10" stroke="#e67e22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 3.2 10 C 3.2 10 3.2 18 4 18 C 4.8 18 4.8 10 4.8 10" stroke="#ffae19" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="7" width="2" height="3" fill="#ffffff" rx="0.5" />
      </motion.g>
      
      {/* Back legs */}
      <rect x="5" y="16" width="3" height="4" fill="#e67e22" rx="1" />
      <rect x="16" y="16" width="3" height="4" fill="#e67e22" rx="1" />
      
      {/* Front legs */}
      <rect x="8" y="14" width="3" height="6" fill="#e67e22" />
      <rect x="13" y="14" width="3" height="6" fill="#e67e22" />
      <rect x="9" y="15" width="1.5" height="5" fill="#ffae19" />
      <rect x="13.5" y="15" width="1.5" height="5" fill="#ffae19" />
      <rect x="8" y="19" width="3" height="1.5" fill="#ffffff" rx="0.5" />
      <rect x="13" y="19" width="3" height="1.5" fill="#ffffff" rx="0.5" />
      
      {/* Body */}
      <rect x="6" y="11" width="12" height="7" fill="#ffae19" rx="2" />
      <rect x="9" y="11" width="6" height="7" fill="#ffffff" rx="1" />
      
      {/* Head */}
      <rect x="6" y="4" width="12" height="9" fill="#ffae19" rx="2" />
      
      {/* Muzzle */}
      <rect x="9" y="9" width="6" height="3" fill="#ffffff" rx="1" />
      {/* Nose */}
      <rect x="11.5" y="8.5" width="1" height="1" fill="#ff8080" />
      {/* Happy Open Mouth */}
      <rect x="11" y="10" width="2" height="1.5" fill="#922b21" rx="0.5" />
      <rect x="11.5" y="11" width="1" height="0.5" fill="#ff9999" /> {/* Tongue */}
      
      {/* Cute Blush Cheeks */}
      <rect x="7.5" y="9.5" width="1.5" height="1.5" fill="#ff9999" rx="0.5" opacity="0.8" />
      <rect x="15" y="9.5" width="1.5" height="1.5" fill="#ff9999" rx="0.5" opacity="0.8" />
      
      {/* Ears */}
      <polygon points="6,4 6,0 10,4" fill="#ffae19" />
      <polygon points="7,3 7,1 9,3" fill="#ff9999" />
      <polygon points="14,4 18,0 18,4" fill="#ffae19" />
      <polygon points="15,3 17,1 17,3" fill="#ff9999" />
      
      {/* Happy Eyes (^^) */}
      <path d="M 7 7.5 L 8.5 6 M 8.5 6 L 10 7.5" stroke="#2c3e50" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 14 7.5 L 15.5 6 M 15.5 6 L 17 7.5" stroke="#2c3e50" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <div 
      className="pixel-cat-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Speech Bubble */}
      <div className={`cat-speech-bubble ${showBubble ? 'show' : ''}`}>
        {bubbleText}
      </div>

      {/* Render SVG according to current State */}
      {catState === 'sleeping' && renderSleeping()}
      {catState === 'sitting' && renderSitting()}
      {catState === 'meowing' && renderMeowing()}
      
      {/* The Cozy Shadow Cushion */}
      <div className="cat-cushion" />
    </div>
  );
};

export default PixelCat;
