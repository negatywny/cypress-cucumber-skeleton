import React from 'react';
import { Hero } from '../models';

interface AvatarProps {
  className?: string;
  hero: Hero;
  dataCy?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, hero, dataCy }) => {
  return (
    <div className={`${className}  `}>
      <img
        className={`w-24 h-24 rounded-full`}
        src={hero.avatarUrl || '/images/empty-avatar.webp'}
        alt={hero.name}
        data-cy={dataCy}
      />
    </div>
  );
};
