
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const ReunionScene = () => {
  const [showReunion, setShowReunion] = useState(false);
  const [showMagic, setShowMagic] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowReunion(true), 500);
          setTimeout(() => setShowMagic(true), 2000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('reunion-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StoryScene id="reunion-scene" className="bg-gradient-to-b from-midnight-600 to-midnight-800 relative">
      {/* Enhanced starfield */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`star ${showMagic ? 'animate-twinkle' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`
          }}
        />
      ))}

      {/* Brilliant moon */}
      <div className={`absolute w-40 h-40 bg-gradient-radial from-moonlight-300 to-moonlight-500 rounded-full top-16 right-24 transition-all duration-2000 ${
        showMagic ? 'shadow-[0_0_150px_rgba(232,244,248,0.8)]' : 'shadow-2xl'
      }`} />

      {/* Hilltop */}
      <svg 
        className="absolute bottom-0 w-full h-64" 
        viewBox="0 0 1200 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,400 C300,300 500,280 600,250 C700,220 900,260 1200,240 L1200,400 Z"
          fill="url(#reunionHill)"
        />
        <defs>
          <linearGradient id="reunionHill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a506a" />
            <stop offset="100%" stopColor="#2a2f4a" />
          </linearGradient>
        </defs>
      </svg>

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-12 relative">
        <h2 className="font-cinzel text-5xl md:text-6xl text-moonlight-300 mb-16 animate-heartbeat">
          The Meeting
        </h2>

        {/* Reunion moment */}
        <div className={`relative transition-all duration-2000 ${
          showReunion ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex justify-center items-center space-x-12 mb-12">
            {/* You */}
            <div className={`relative transition-all duration-1500 ${
              showReunion ? 'translate-x-0' : '-translate-x-24'
            }`}>
              <div className="w-24 h-36 bg-gradient-to-b from-midnight-400 to-midnight-600 rounded-full relative shadow-lg">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-midnight-300 to-midnight-500 rounded-full" />
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-16 h-22 bg-gradient-to-b from-midnight-400 to-midnight-600 rounded-t-full" />
              </div>
            </div>

            {/* Heart connection */}
            <div className={`relative transition-all duration-1000 delay-1000 ${
              showMagic ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}>
              <div className="w-8 h-8 bg-gradient-to-b from-golden-400 to-golden-500 transform rotate-45 animate-heartbeat" />
              <div className="absolute inset-0 w-8 h-8 bg-gradient-to-b from-golden-400 to-golden-500 transform rotate-45 animate-heartbeat" style={{ animationDelay: '0.5s' }} />
              {/* Magical sparkles around heart */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-golden-300 rounded-full animate-twinkle ${showMagic ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    left: `${-10 + Math.cos(i * Math.PI / 4) * 20}px`,
                    top: `${-10 + Math.sin(i * Math.PI / 4) * 20}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>

            {/* Meghana */}
            <div className={`relative transition-all duration-1500 ${
              showReunion ? 'translate-x-0' : 'translate-x-24'
            }`}>
              <div className="w-24 h-36 bg-gradient-to-b from-purple-400/70 to-purple-600/70 rounded-full relative shadow-lg">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-b from-purple-300/70 to-purple-500/70 rounded-full" />
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-16 h-22 bg-gradient-to-b from-purple-400/70 to-purple-600/70 rounded-t-full" />
              </div>
            </div>
          </div>

          {/* Magical moment text */}
          <div className={`space-y-6 transition-all duration-1000 delay-1500 ${
            showMagic ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="font-dancing text-3xl text-golden-300 magical-glow">
              Under the brilliant moonlight, two souls find each other again
            </p>
            <p className="font-dancing text-xl text-moonlight-300">
              The magic of love, guided by faithful companions
            </p>
          </div>

          {/* Roxy and Rocky watching */}
          <div className={`flex justify-center space-x-8 mt-12 transition-all duration-1000 delay-2000 ${
            showMagic ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="w-12 h-10 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative mx-auto">
                <div className="absolute top-1 left-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute -right-2 top-2 w-4 h-2 bg-amber-700 rounded-full animate-wag" />
              </div>
              <p className="font-dancing text-sm text-golden-400 mt-2">Roxy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-10 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full relative mx-auto">
                <div className="absolute top-1 left-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute -right-2 top-2 w-4 h-2 bg-gray-700 rounded-full animate-wag" style={{ animationDelay: '0.3s' }} />
              </div>
              <p className="font-dancing text-sm text-golden-400 mt-2">Rocky</p>
            </div>
          </div>
        </div>
      </div>
    </StoryScene>
  );
};

export default ReunionScene;
