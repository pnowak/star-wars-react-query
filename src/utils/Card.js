import React from 'react';

export const Card = ({ category, name }) => (
  <div>
    <p>{name}</p>
    <span>{category}</span>
  </div>
);