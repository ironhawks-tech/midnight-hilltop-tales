
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const RunningScene = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('running-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StoryScene id="running-scene" className="bg-gradient-to-r from-midnight-700 via-midnight-600 to-midnight-700 overflow-hidden">
      {/* Forest silhouettes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-midnight-900 opacity-60"
            style={{
              left: `${i * 15}%`,
              width: `${8 + Math.random() * 4}%`,
              height: `${40 + Math.random() * 30}%`,
              clipPath: 'polygon(20% 100%, 80% 100%, 60% 0%, 40% 0%)'
            }}
          />
        ))}
      </div>

      {/* Moving stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`star transition-transform duration-[3000ms] ${startAnimation ? '-translate-x-full' : 'translate-x-0'}`}
          style={{
            left: `${100 + Math.random() * 50}%`,
            top: `${Math.random() * 60}%`,
            animationDelay: `${Math.random() * 2}s`,
            transitionDelay: `${i * 100}ms`
          }}
        />
      ))}

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-cinzel text-4xl md:text-5xl text-moonlight-300 mb-12">
          The Mission Begins
        </h2>

        {/* Running dogs animation */}
        <div className="relative h-32 overflow-hidden">
          <div 
            className={`absolute flex space-x-8 transition-transform duration-[4000ms] ease-in-out ${
              startAnimation ? 'translate-x-full' : '-translate-x-64'
            }`}
          >
            {/* Roxy running */}
            <div className="relative animate-float">
              <div className="w-16 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="w-4 h-8 bg-amber-700 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
                <div className="absolute -right-3 top-2 w-6 h-2 bg-amber-700 rounded-full origin-left animate-wag" />
              </div>
              {/* Paw prints */}
              <div className="absolute -bottom-6 left-2 w-2 h-2 bg-amber-600 rounded-full opacity-60" />
              <div className="absolute -bottom-8 left-0 w-2 h-2 bg-amber-600 rounded-full opacity-40" />
            </div>

            {/* Rocky running */}
            <div className="relative animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-midnight-900 rounded-full" />
                <div className="w-4 h-8 bg-gray-700 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
                <div className="absolute -right-3 top-2 w-6 h-2 bg-gray-700 rounded-full origin-left animate-wag" style={{ animationDelay: '0.2s' }} />
              </div>
              {/* Paw prints */}
              <div className="absolute -bottom-6 left-2 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
              <div className="absolute -bottom-8 left-0 w-2 h-2 bg-gray-600 rounded-full opacity-40" />
            </div>
          </div>
        </div>

        <div className={`space-y-6 transition-all duration-1000 delay-1000 ${
          startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-dancing text-2xl text-moonlight-300">
            Through the enchanted forest they run...
          </p>
          <p className="font-dancing text-xl text-golden-400">
            Carrying hope in their hearts and magic in their paws
          </p>
        </div>

        {/* Trail of sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className={`absolute w-1 h-1 bg-golden-400 rounded-full transition-all duration-1000 ${
                startAnimation ? 'opacity-100 animate-twinkle' : 'opacity-0'
              }`}
              style={{
                left: `${20 + i * 4}%`,
                top: `${50 + Math.sin(i) * 10}%`,
                transitionDelay: `${i * 200}ms`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </StoryScene>
  );
};

export default RunningScene;
