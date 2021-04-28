import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  background-color: rgba(30, 144, 255, 0.6);

  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BlockForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 4em;
    margin-bottom: 20px;
  }

  button {
    background-color: #5352ed;
    border-radius: 5px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    width: 100%;
    margin: 20px 0 0;
    padding: 15px 0;
    transition: 0.3s;
  }

  button:hover {
    background-color: #6f6ef8;
  }

  a {
    color: rgba(255, 255, 255, 0.5);
    margin-top: 30px;
  }

  a:hover {
    color: rgba(255, 255, 255);
  }
`;

export const BlockImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
`;
