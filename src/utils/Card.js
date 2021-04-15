import React from 'react';
import styled from 'styled-components';

const CartStyles = styled.div`
  display: grid;
  border: 1px solid var(--black);
  padding: 2rem;
  test-align: center;
  p {
    font-weight: 800;
  }
  span {
    display: grid;
    align-items: end;
    justify-items: end;
    color: var(--yellow);
    font-style: italic;
    font-weight: 500;
  }
`;

export const Card = ({ category, name }) => (
  <CartStyles>
    <p>{name}</p>
    <span>{category}</span>
  </CartStyles>
);