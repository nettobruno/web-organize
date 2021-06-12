import styled from 'styled-components';

export const Container = styled.div`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #81ecec;
  }

  .menu {
    background: transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: fixed;
    top: 25px;
    right: 25px;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: #fff;
    width: 30px;
    height: 3px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: #fff;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }

  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }

  .menu {
    cursor: pointer;
    box-shadow: 0 0 0 0 rgb(255, 71, 87), 0 0 0 0 rgb(255, 71, 87);
    transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  // animação do menu
  input:checked ~ label .menu {
    box-shadow: 0 0 0 130vw rgb(255, 71, 87), 0 0 0 130vh rgb(255, 71, 87);
  }

  // só aparecer o menu ao clicar
  input:checked ~ ul {
    opacity: 1;
  }

  // animação e estilo do menu
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    font-size: 45px;
    opacity: 0;
    transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
    z-index: 2;
  }

  a,
  p {
    color: #fff;
    display: block;
    margin-bottom: 1em;
    text-decoration: none;
    text-align: center;
  }

  button {
    background: transparent;
    width: 100%;
  }

  button p {
    font-size: 3em;
    cursor: pointer;
  }
`;
