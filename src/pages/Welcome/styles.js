import styled from 'styled-components';

export const Container = styled.div`
  .bg-yellow {
    background: rgba(255, 165, 2, 0.6);
  }

  .bg-blue {
    background: rgba(83, 82, 237, 0.6);
  }

  .bg-rose {
    background: rgba(255, 131, 123, 0.6);
  }
`;

export const Section = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BlockTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 7em;
  }

  h2 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 3em;
    margin-bottom: 20px;
  }

  h3 {
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 6em;
    margin-bottom: 20px;
  }

  div {
    margin-top: 35px;
  }

  p {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    margin-bottom: 5px;
    line-height: 30px;
  }

  a {
    background-color: rgba(83, 82, 237, 0.8);
    border-radius: 10px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    width: 30%;
    margin: 20px 0 0;
    padding: 15px 0;
    transition: 0.3s;
  }

  a:hover {
    background-color: rgba(83, 82, 237, 0.6);
  }
`;

export const BlockImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;
