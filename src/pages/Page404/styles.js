import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(55, 66, 250, 0.6);

  height: 100vh;
  width: 100%;

  padding-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 300px;

  h1 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 4em;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 1.6em;
    color: white;
    font-family: 'Ubuntu', sans-serif;

    width: 70%;
    margin: 0 auto;
    text-align: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 20px 0;
    padding: 15px 50px;
    transition: 0.3s;
  }

  button:hover {
    background-color: #6f6ef8;
  }

  img {
    position: absolute;
    bottom: 0;
  }
`;
