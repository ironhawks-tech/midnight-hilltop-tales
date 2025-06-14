
import React from 'react';

interface StorySceneProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  id?: string;
}

const StoryScene: React.FC<StorySceneProps> = ({ 
  children, 
  className = '', 
  background = '',
  id
}) => {
  return (
    <section id={id} className={`scene ${className} ${background}`}>
      {children}
    </section>
  );
};

export default StoryScene;
