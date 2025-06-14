
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const ApologyScene = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowLetter(true), 500);
          setTimeout(() => setShowText(true), 1500);
        }
      },
      { threshold: 0.6 }
    );

    const element = document.getElementById('apology-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StoryScene id="apology-scene" className="bg-gradient-to-t from-midnight-700 to-midnight-600">
      {/* Enhanced stars with different sizes */}
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className={`star opacity-${Math.random() > 0.5 ? '80' : '60'} ${
            Math.random() > 0.7 ? 'w-3 h-3' : 'w-2 h-2'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Floating magical particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-golden-400 rounded-full animate-float opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-cinzel text-5xl md:text-6xl text-moonlight-300 mb-16 drop-shadow-lg">
          Words from the Heart
        </h2>

        {/* Enhanced letter scroll with magical glow */}
        <div className={`relative transition-all duration-2000 transform ${
          showLetter ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
        }`}>
          <div className="bg-gradient-to-b from-midnight-600/90 to-midnight-700/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto relative border border-golden-400/30">
            {/* Enhanced scroll decorations with glow */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-golden-300 to-golden-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-golden-300 to-golden-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-golden-300 to-golden-500 rounded-full shadow-lg animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-golden-300 to-golden-500 rounded-full shadow-lg animate-pulse" />

            {/* Decorative corner flourishes */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-golden-400/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-golden-400/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-golden-400/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-golden-400/50" />

            <div className={`space-y-6 text-white transition-all duration-1000 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="text-right mb-8">
                <p className="font-dancing text-xl text-moonlight-300">Under the stars, with love</p>
              </div>

              <div className="space-y-6 text-left">
                <p className="font-dancing text-2xl leading-relaxed text-white">
                  Dearest Meghana,
                </p>
                
                <p className="font-dancing text-xl leading-relaxed text-white/90">
                  Tonight, under this magical moonlight, I want to open my heart to you completely. 
                  I know I've made mistakes, and I know there are wounds that need healing.
                </p>

                <p className="font-dancing text-xl leading-relaxed text-white/90">
                  Every star above us reminds me of a moment we've shared, every gentle breeze 
                  carries my hopes for what we could be again. I miss your laughter, your wisdom, 
                  and the way you see beauty in everything around us.
                </p>

                <p className="font-dancing text-xl leading-relaxed text-white/90">
                  I'm sorry for the pain I've caused, for the words left unspoken, and for 
                  not being the person you deserved. But I believe in us, in the love that 
                  brought us together, and in the magic that still exists between us.
                </p>

                <p className="font-dancing text-xl leading-relaxed text-white/90">
                  Just like Roxy and Rocky guided us to this moment, I hope love can guide 
                  us back to each other. Will you give us another chance to write a 
                  beautiful story together?
                </p>
              </div>

              <div className="text-right mt-8">
                <p className="font-dancing text-xl text-moonlight-300">
                  With all my love and hope,
                </p>
                <p className="font-dancing text-3xl text-golden-400 font-semibold mt-2 animate-heartbeat">
                  Forever yours ❤️
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced magical sparkles around the letter */}
          {showText && [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-golden-400 rounded-full animate-twinkle"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: '0 0 10px rgba(255, 215, 0, 0.6)'
              }}
            />
          ))}

          {/* Gentle light rays */}
          <div className="absolute inset-0 bg-gradient-radial from-golden-400/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
        </div>

        {/* Enhanced gentle prompt */}
        <div className={`transition-all duration-1000 delay-2000 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-dancing text-xl text-moonlight-300 animate-pulse">
            The letter glows softly in the moonlight, waiting for a response...
          </p>
        </div>
      </div>
    </StoryScene>
  );
};

export default ApologyScene;
