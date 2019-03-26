import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Menu = styled.div`
  margin: 20px 0;
`;

export const ALink = styled(Link)`
  margin: 20px;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BlockImg = styled.div`
  flex: 0 0 20%;
  min-width: 250px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;
