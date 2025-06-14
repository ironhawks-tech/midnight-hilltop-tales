
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const IntroScene = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoryScene className="relative">
      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 4}s`
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute w-1 h-1 bg-golden-400 rounded-full animate-shooting-star"
          style={{
            left: `${Math.random() * 50}%`,
            top: `${20 + Math.random() * 40}%`,
            animationDelay: `${2 + i * 4}s`,
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Moon */}
      <div className="moon top-20 right-20" />

      {/* Hilltop silhouette */}
      <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-midnight-800 to-transparent" />
      
      {/* Rolling hills */}
      <svg 
        className="absolute bottom-0 w-full h-48" 
        viewBox="0 0 1200 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,300 C200,200 400,250 600,180 C800,110 1000,160 1200,140 L1200,300 Z"
          fill="url(#hillGradient)"
        />
        <path
          d="M0,300 C150,220 350,270 600,200 C850,130 1050,180 1200,160 L1200,300 Z"
          fill="url(#hillGradient2)"
        />
        <defs>
          <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2f4a" />
            <stop offset="100%" stopColor="#1a1f3a" />
          </linearGradient>
          <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a405a" />
            <stop offset="100%" stopColor="#2a2f4a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Title */}
      <div className="z-10 text-center space-y-6">
        <h1 
          className={`font-cinzel text-6xl md:text-8xl font-bold text-moonlight-300 text-shadow transition-all duration-2000 ${
            showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          A Midnight Story
        </h1>
        <p 
          className={`font-dancing text-2xl md:text-3xl text-golden-400 transition-all duration-2000 delay-500 ${
            showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Where two hearts find their way back to each other
        </p>
        <div 
          className={`text-moonlight-400 animate-float transition-all duration-2000 delay-1000 ${
            showTitle ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-dancing text-lg">Scroll to begin the journey</p>
          <div className="w-0.5 h-12 bg-moonlight-400 mx-auto mt-4 animate-pulse" />
        </div>
      </div>
    </StoryScene>
  );
};

export default IntroScene;
