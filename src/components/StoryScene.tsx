
import React from 'react';

interface StorySceneProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
}

const StoryScene: React.FC<StorySceneProps> = ({ 
  children, 
  className = '', 
  background = '' 
}) => {
  return (
    <section className={`scene ${className} ${background}`}>
      {children}
    </section>
  );
};

export default StoryScene;
