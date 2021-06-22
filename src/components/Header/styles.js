import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`;

export const Menu = styled.ul`
    display: flex;

    
    
`;
export const MenuItem = styled(Link)`
   text-decoration: none;
   color: #FFF;
   margin-right: 8px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  
  transition: opacity 0.2s;

  &:hover {
      opacity: 0.7;
  }

  div {
      text-align: right;
      margin-right: 10px;

      strong {
          display: block;
          color: #FFF;
      }

      span{
          font-size: 12px;
          color: #999;
      }
  }

  
`;