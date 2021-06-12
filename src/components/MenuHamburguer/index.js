import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/ducks/auth';
import { Container } from './styles';
import { showToast } from '../Alert';

function MenuHamburguer() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    dispatch(userActions.login(null));
    history.push('/');
    showToast({
      type: 'success',
      message: 'Você saiu da sua conta com sucesso!',
    });
  }

  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer" />
        </div>
      </label>

      {token && (
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>

          <li>
            <a href="/contact">Contato</a>
          </li>

          <li>
            <button type="button" onClick={() => logout()}>
              <p>Sair</p>
            </button>
          </li>
        </ul>
      )}

      {!token && (
        <ul>
          <li>
            <a href="/login">Entrar</a>
          </li>

          <li>
            <a href="/register">Cadastrar</a>
          </li>
        </ul>
      )}
    </Container>
  );
}

export default MenuHamburguer;
