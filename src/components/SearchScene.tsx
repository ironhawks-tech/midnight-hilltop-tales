
import React, { useEffect, useState } from 'react';
import StoryScene from './StoryScene';

const SearchScene = () => {
  const [showCharacters, setShowCharacters] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowCharacters(true), 500);
        }
      },
      { threshold: 0.4 }
    );

    const element = document.getElementById('search-scene');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StoryScene id="search-scene" className="bg-gradient-to-t from-midnight-800 to-midnight-600">
      {/* Background elements */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      <div className="z-10 max-w-6xl mx-auto px-6">
        <h2 className="font-cinzel text-4xl md:text-5xl text-moonlight-300 text-center mb-16">
          Two Hearts, Two Paths
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[60vh]">
          {/* You - Left side */}
          <div className={`text-center space-y-8 transition-all duration-1500 ${
            showCharacters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            {/* Character silhouette */}
            <div className="relative mx-auto w-32 h-48 bg-gradient-to-b from-midnight-500 to-midnight-700 rounded-full relative shadow-2xl">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-midnight-400 to-midnight-600 rounded-full" />
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-28 bg-gradient-to-b from-midnight-500 to-midnight-700 rounded-t-full" />
              {/* Spotlight effect */}
              <div className="absolute -inset-8 bg-gradient-radial from-moonlight-300/20 to-transparent rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl text-golden-400">You</h3>
              <div className="space-y-3">
                <p className="font-dancing text-lg text-moonlight-300 italic">
                  Walking through the quiet night...
                </p>
                <p className="font-dancing text-base text-moonlight-400">
                  Heart heavy with unspoken words
                </p>
                <p className="font-dancing text-base text-moonlight-400">
                  Searching for courage to make things right
                </p>
              </div>
            </div>
          </div>

          {/* Meghana - Right side */}
          <div className={`text-center space-y-8 transition-all duration-1500 delay-300 ${
            showCharacters ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Character silhouette */}
            <div className="relative mx-auto w-32 h-48 bg-gradient-to-b from-purple-400/60 to-purple-600/60 rounded-full shadow-2xl">
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-purple-300/60 to-purple-500/60 rounded-full" />
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-28 bg-gradient-to-b from-purple-400/60 to-purple-600/60 rounded-t-full" />
              {/* Spotlight effect */}
              <div className="absolute -inset-8 bg-gradient-radial from-moonlight-300/20 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl text-golden-400">Meghana</h3>
              <div className="space-y-3">
                <p className="font-dancing text-lg text-moonlight-300 italic">
                  Wandering under the same stars...
                </p>
                <p className="font-dancing text-base text-moonlight-400">
                  Hoping for a chance to heal
                </p>
                <p className="font-dancing text-base text-moonlight-400">
                  Wondering if love can find its way back
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting element */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          showCharacters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-golden-400 to-transparent mx-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-golden-400 rounded-full animate-twinkle" />
          </div>
          <p className="font-dancing text-xl text-golden-300 mt-4">
            Destiny draws them closer...
          </p>
        </div>
      </div>
    </StoryScene>
  );
};

export default SearchScene;
