import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`


    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 400px;
    background: #191920;

    div {
        padding: 30px;

        p{
            color: #FFF;
            margin: 8px;
        }
    }
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;

    li {
        margin: 8px;
    }
 
`;
export const MenuItem = styled(Link)`
   color: #FFF;
   text-decoration: none;
   margin: 8px;
   
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