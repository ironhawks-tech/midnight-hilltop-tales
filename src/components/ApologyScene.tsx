
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
      {/* Gentle stars */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="star opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="font-cinzel text-4xl md:text-5xl text-moonlight-300 mb-16">
          Words from the Heart
        </h2>

        {/* Letter scroll */}
        <div className={`relative transition-all duration-2000 transform ${
          showLetter ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-3'
        }`}>
          <div className="bg-gradient-to-b from-moonlight-100 to-moonlight-200 rounded-lg p-8 md:p-12 shadow-2xl max-w-2xl mx-auto relative">
            {/* Scroll decoration */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-golden-500 rounded-full shadow-lg" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-golden-500 rounded-full shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-golden-500 rounded-full shadow-lg" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-golden-500 rounded-full shadow-lg" />

            <div className={`space-y-6 text-midnight-800 transition-all duration-1000 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="text-right mb-8">
                <p className="font-dancing text-lg text-midnight-600">Under the stars, with love</p>
              </div>

              <div className="space-y-4 text-left">
                <p className="font-dancing text-xl leading-relaxed">
                  Dearest Meghana,
                </p>
                
                <p className="font-dancing text-lg leading-relaxed">
                  Tonight, under this magical moonlight, I want to open my heart to you completely. 
                  I know I've made mistakes, and I know there are wounds that need healing.
                </p>

                <p className="font-dancing text-lg leading-relaxed">
                  Every star above us reminds me of a moment we've shared, every gentle breeze 
                  carries my hopes for what we could be again. I miss your laughter, your wisdom, 
                  and the way you see beauty in everything around us.
                </p>

                <p className="font-dancing text-lg leading-relaxed">
                  I'm sorry for the pain I've caused, for the words left unspoken, and for 
                  not being the person you deserved. But I believe in us, in the love that 
                  brought us together, and in the magic that still exists between us.
                </p>

                <p className="font-dancing text-lg leading-relaxed">
                  Just like Roxy and Rocky guided us to this moment, I hope love can guide 
                  us back to each other. Will you give us another chance to write a 
                  beautiful story together?
                </p>
              </div>

              <div className="text-right mt-8">
                <p className="font-dancing text-xl text-midnight-700">
                  With all my love and hope,
                </p>
                <p className="font-dancing text-2xl text-golden-600 font-semibold mt-2">
                  Forever yours ❤️
                </p>
              </div>
            </div>
          </div>

          {/* Magical sparkles around the letter */}
          {showText && [...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-golden-400 rounded-full animate-twinkle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Gentle prompt */}
        <div className={`transition-all duration-1000 delay-2000 ${
          showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-dancing text-lg text-moonlight-400">
            The letter glows softly in the moonlight, waiting for a response...
          </p>
        </div>
      </div>
    </StoryScene>
  );
};

export default ApologyScene;
