import React from 'react';
import { BigHead } from '@bigheads/core';

const Avatar = ({ name }) => {
  const avatarProps = {
    Mithi: { name: 'Mithi' },
    Diana: { name: 'Diana' },
    Mikong: { name: 'Mikong' },
  };

  return (
    <div>
      <BigHead {...avatarProps[name]} />
      <h2>{name}</h2>
    </div>
  );
};

export default Avatar;
