import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  background-color: rgba(55, 66, 250, 0.6);

  height: 100vh;
  width: 100%;

  padding-top: 100px;
`;

export const Content = styled.div`
  h1 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 4em;
    margin-bottom: 100px;
    text-align: center;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  width: 100%;

  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 2em;
  }

  div.inline {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.inline .line {
    width: 70px;
    height: 4px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  h3 {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6em;
    margin: 0 15px;
  }

  p,
  a {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    font-weight: 400;
    margin-top: 20px;
  }

  a {
    font-size: 1em;
  }

  a:hover {
    color: #6f6ef8;
  }

  .link,
  .form {
    margin: 80px auto 0;
  }
`;

export const CircleGithub = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  background: rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  width: 200px;
  height: 200px;
  transition: 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

export const FormContent = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  width: 400px;

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
    margin: 10px 0 0;
    padding: 10px 0;
    transition: 0.3s;
  }

  button:hover {
    background-color: #6f6ef8;
  }
`;
