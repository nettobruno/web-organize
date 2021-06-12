// Dependencies
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/ducks/auth';
import api from '../../services/api';

// Components
import MenuHamburguer from '../../components/MenuHamburguer';
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';

// Images
import loginImage from '../../assets/login.svg';

// styles
import { Container, BlockForm, BlockImage, FormContent } from './styles';

function Login() {
  const formRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  async function handleSubmit(data) {
    setLoader(true);
    try {
      api
        .post('sessions/store', {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (response.data.error) {
            showToast({
              type: 'error',
              message: response.data.error,
            });
          }

          if (response.data.message) {
            showToast({
              type: 'success',
              message: response.data.message,
            });

            const { id, token } = response.data;

            dispatch(userActions.login(token, id));

            history.push('/home');
          }
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          showToast({
            type: 'error',
            message: 'Algum erro interno aconteceu. Tente novamente mais tarde',
          });
          setLoader(false);
        });
    } catch (err) {
      console.log(err);
      showToast({
        type: 'error',
        message: 'Algum erro interno aconteceu. Tente novamente mais tarde',
      });
      setLoader(false);
    }
  }

  return (
    <div>
      <MenuHamburguer />
      <Container>
        <Loader loader={loader} />
        <BlockForm>
          <h2>Entrar</h2>
          <FormContent ref={formRef} onSubmit={handleSubmit}>
            <SimpleInput name="email" placeholder="E-mail" type="email" />
            <SimpleInput name="password" placeholder="Senha" type="password" />
            <button type="submit">Entrar</button>
            <a href="/register">Não tem uma conta? Cadastrar</a>
          </FormContent>
        </BlockForm>

        <BlockImage>
          <img src={loginImage} alt="" />
        </BlockImage>
      </Container>
    </div>
  );
}

export default Login;
