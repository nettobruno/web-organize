import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  background-color: rgba(55, 66, 250, 0.6);

  height: 100vh;
  width: 100%;

  padding-top: 100px;
`;

export const FormContent = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  margin: 0 auto;

  button {
    background-color: rgba(255, 71, 87, 0.9);
    border-radius: 5px;
    font-size: 18px;
    padding: 6px 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    background-color: rgba(255, 71, 87, 0.8);
  }
`;

export const BlockItems = styled.div``;

export const Item = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 10px;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div.block-text {
    width: 70%;
  }

  button.search {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Check = styled.div`
  background: ${(props) =>
    props.checked ? 'transparent' : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageCheck = styled.img`
  width: 25px;
  height: 25px;
  display: ${(props) => (props.checked ? 'flex' : 'none')};
`;

export const Title = styled.p`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
  padding: 0 10px;
  cursor: pointer;
`;
