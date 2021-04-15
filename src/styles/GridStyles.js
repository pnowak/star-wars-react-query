import styled from 'styled-components';

export const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  grid-auto-rows: 200px 200px 200px;
`;