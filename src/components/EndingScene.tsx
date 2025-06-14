
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const EndingScene = () => {
  const [showButton, setShowButton] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowButton(true), 1000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('ending-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleForgivenessClick = () => {
    setButtonClicked(true);
  };

  return (
    <StoryScene id="ending-scene" className="bg-gradient-to-b from-midnight-600 to-midnight-900 min-h-screen">
      {/* Celebratory stars */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className={`star ${buttonClicked ? 'animate-twinkle' : ''}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 2}s`,
            width: buttonClicked ? `${2 + Math.random() * 4}px` : '2px',
            height: buttonClicked ? `${2 + Math.random() * 4}px` : '2px'
          }}
        />
      ))}

      {/* Radiant moon */}
      <div className={`absolute w-48 h-48 bg-gradient-radial from-moonlight-300 to-moonlight-500 rounded-full top-12 left-1/2 transform -translate-x-1/2 transition-all duration-2000 ${
        buttonClicked ? 'shadow-[0_0_200px_rgba(232,244,248,1)]' : 'shadow-2xl'
      }`} />

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-16 relative">
        <div className="space-y-8 pt-24">
          <h2 className="font-cinzel text-5xl md:text-7xl text-moonlight-300 animate-heartbeat">
            The Choice
          </h2>
          
          <p className="font-dancing text-2xl md:text-3xl text-golden-400">
            Under the watchful eyes of two faithful friends...
          </p>
        </div>

        {/* Roxy and Rocky watching expectantly */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="text-center">
            <div className="w-20 h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative">
              <div className="absolute top-2 left-2 w-3 h-3 bg-midnight-900 rounded-full" />
              <div className="absolute top-2 right-2 w-3 h-3 bg-midnight-900 rounded-full animate-blink" />
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-midnight-900 rounded-full" />
              <div className="w-5 h-10 bg-amber-700 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
              <div className={`absolute -right-3 top-3 w-6 h-2 bg-amber-700 rounded-full origin-left ${
                buttonClicked ? 'animate-wag' : ''
              }`} />
            </div>
            <p className="font-dancing text-golden-400 text-lg mt-4">Roxy</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-16 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full relative">
              <div className="absolute top-2 left-2 w-3 h-3 bg-midnight-900 rounded-full" />
              <div className="absolute top-2 right-2 w-3 h-3 bg-midnight-900 rounded-full animate-blink" />
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-midnight-900 rounded-full" />
              <div className="w-5 h-10 bg-gray-700 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
              <div className={`absolute -right-3 top-3 w-6 h-2 bg-gray-700 rounded-full origin-left ${
                buttonClicked ? 'animate-wag' : ''
              }`} style={{ animationDelay: '0.2s' }} />
            </div>
            <p className="font-dancing text-golden-400 text-lg mt-4">Rocky</p>
          </div>
        </div>

        {/* The big question */}
        <div className={`space-y-12 transition-all duration-1500 ${
          showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-b from-midnight-600/80 to-midnight-700/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-golden-400/30 magical-glow">
            <p className="font-dancing text-3xl md:text-4xl text-moonlight-300 mb-8 leading-relaxed">
              Meghana, under this magical starlit sky, with Roxy and Rocky as our witnesses...
            </p>
            <p className="font-cinzel text-4xl md:text-5xl text-golden-300 font-semibold">
              Do you forgive me?
            </p>
          </div>

          {/* Forgiveness button */}
          {!buttonClicked ? (
            <button
              onClick={handleForgivenessClick}
              className="group relative bg-gradient-to-r from-golden-400 to-golden-600 hover:from-golden-300 hover:to-golden-500 text-midnight-900 font-cinzel text-2xl font-semibold px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl magical-glow"
            >
              <span className="relative z-10">Yes, I forgive you ❤️</span>
              <div className="absolute inset-0 bg-gradient-to-r from-moonlight-300 to-golden-300 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              {/* Button sparkles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-moonlight-300 rounded-full animate-twinkle opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </button>
          ) : (
            /* Celebration */
            <div className="space-y-8 animate-scale-in">
              <div className="text-6xl animate-heartbeat">❤️</div>
              <p className="font-dancing text-3xl text-golden-300">
                Love wins! ✨
              </p>
              <p className="font-dancing text-xl text-moonlight-300">
                Roxy and Rocky's mission is complete...
              </p>
              <p className="font-dancing text-lg text-moonlight-400">
                Two hearts are home again. 🌙
              </p>
              
              {/* Celebration sparkles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={`celebration-${i}`}
                  className="absolute w-2 h-2 bg-golden-400 rounded-full animate-twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer message */}
        <div className={`pt-16 pb-8 transition-all duration-1000 ${
          buttonClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-dancing text-lg text-moonlight-400 italic">
            "Sometimes the most magical stories are the ones that bring us back to each other." 
          </p>
          <p className="font-dancing text-sm text-moonlight-500 mt-4">
            — Roxy & Rocky, Cupid Dogs Extraordinaire 🐕✨
          </p>
        </div>
      </div>
    </StoryScene>
  );
};

export default EndingScene;
