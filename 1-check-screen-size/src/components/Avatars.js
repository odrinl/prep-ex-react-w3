import React from 'react';
import Avatar from './Avatar';
import useWindowSize from './useWindowSize';

const AvatarContainer = () => {
  const windowSize = useWindowSize(700, 1000);

  const avatars = {
    big: <Avatar name='Mithi' />,
    medium: <Avatar name='Diana' />,
    small: <Avatar name='Mikong' />,
  };

  return <div className='avatar-container'>{avatars[windowSize]}</div>;
};

export default AvatarContainer;
