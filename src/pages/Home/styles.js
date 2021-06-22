import styled from 'styled-components';
import { darken } from 'polished'

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
      display: flex;
      flex-direction: column;
      background: #FFF;
      border-radius: 4px;
      padding: 20px;
      box-shadow: 1px 0 8px;
  }
  img {
      align-self: center;
      max-width: 250px;
  }

  > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin: 5px 0 20px;
  }

  button {
      background: #da552f;
      color: #FFF;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
        &:hover{
            background: ${darken(0.03, '#da552f')};
        }

      display: flex;
      align-items: center;
      transition: background .2s;

      div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);
      }

      svg {
          margin-right: 5px;
      }
    }

    span {
        flex: 1;
        text-align: center;
        font-weight: bold;
    }
`;


