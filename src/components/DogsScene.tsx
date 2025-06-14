
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const DogsScene = () => {
  const [showDogs, setShowDogs] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDogs(true);
          setTimeout(() => setShowSpeech(true), 1000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('dogs-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StoryScene id="dogs-scene" className="bg-gradient-to-b from-midnight-800 to-midnight-700">
      {/* Scattered stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Moon (smaller, positioned differently) */}
      <div className="absolute w-24 h-24 bg-gradient-radial from-moonlight-300 to-moonlight-500 rounded-full top-16 left-20 shadow-2xl opacity-80" />

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-cinzel text-4xl md:text-5xl text-moonlight-300 mb-12">
          On a magical hilltop, two companions meet...
        </h2>

        {/* Dogs */}
        <div className={`flex justify-center items-end space-x-16 transition-all duration-1000 ${
          showDogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Roxy */}
          <div className="text-center">
            <div className="relative">
              <div className="w-24 h-20 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-midnight-900 rounded-full" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-midnight-900 rounded-full animate-blink" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-midnight-900 rounded-full" />
                <div className="w-6 h-12 bg-amber-700 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2" />
                {/* Tail */}
                <div className="absolute -right-4 top-4 w-8 h-3 bg-amber-700 rounded-full origin-left animate-wag" />
              </div>
            </div>
            <p className="font-dancing text-golden-400 text-xl mt-4">Roxy</p>
          </div>

          {/* Rocky */}
          <div className="text-center">
            <div className="relative">
              <div className="w-24 h-20 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-midnight-900 rounded-full" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-midnight-900 rounded-full animate-blink" />
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-midnight-900 rounded-full" />
                <div className="w-6 h-12 bg-gray-700 rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2" />
                {/* Tail */}
                <div className="absolute -right-4 top-4 w-8 h-3 bg-gray-700 rounded-full origin-left animate-wag" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
            <p className="font-dancing text-golden-400 text-xl mt-4">Rocky</p>
          </div>
        </div>

        {/* Speech bubbles */}
        <div className={`space-y-8 transition-all duration-1000 delay-500 ${
          showSpeech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="dog-speech max-w-md mx-auto">
            <p className="font-dancing text-lg text-moonlight-300">
              "Rocky, I sense two hearts that need to find each other again..."
            </p>
            <div className="text-right mt-2">
              <span className="text-golden-400 font-dancing text-sm">- Roxy</span>
            </div>
          </div>

          <div className="dog-speech max-w-md mx-auto ml-auto">
            <p className="font-dancing text-lg text-moonlight-300">
              "I feel it too, Roxy. Tonight, under this moonlight, we must help them reconnect."
            </p>
            <div className="text-right mt-2">
              <span className="text-golden-400 font-dancing text-sm">- Rocky</span>
            </div>
          </div>

          <div className="dog-speech max-w-lg mx-auto magical-glow">
            <p className="font-dancing text-xl text-golden-300 font-semibold">
              "Let's bring them to this magical place where love can bloom again."
            </p>
          </div>
        </div>
      </div>
    </StoryScene>
  );
};

export default DogsScene;
