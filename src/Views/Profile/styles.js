import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(0, 0, 0, 0.6);
      margin: 0 0 10px;
    }

    span {
      color: #d87a6e;
      margin-bottom: 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: #ccc;
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #d87a6e;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.4s;

      &:hover {
        background: ${darken(0.05, '#d87a6e')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #d21d1d;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.4s;

    &:hover {
      background: ${darken(0.05, '#d21d1d')};
    }
  }
`;
