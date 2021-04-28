// Dependencies
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';

// Images
import registerImage from '../../assets/register.svg';

// styles
import { Container, BlockForm, BlockImage, FormContent } from './styles';

function Register() {
  const formRef = useRef();
  const history = useHistory();
  const [loader, setLoader] = useState(false);

  async function handleSubmit(data) {
    setLoader(true);
    try {
      api
        .post('users/store', {
          name: data.name,
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

          if (response.data) {
            showToast({
              type: 'success',
              message: response.data.message,
            });

            history.push('/login');
          }
          setLoader(false);
        })
        .catch((error) => {
          showToast({
            type: 'error',
            message: error.response.data.error,
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
    <Container>
      <Loader loader={loader} />
      <BlockForm>
        <h2>Cadastrar</h2>
        <FormContent ref={formRef} onSubmit={handleSubmit}>
          <SimpleInput name="name" placeholder="Nome" type="text" />
          <SimpleInput name="email" placeholder="E-mail" type="email" />
          <SimpleInput name="password" placeholder="Senha" type="password" />
          <button type="submit">Cadastrar</button>
          <a href="/login">Já tem uma conta? Entrar</a>
        </FormContent>
      </BlockForm>

      <BlockImage>
        <img src={registerImage} alt="" />
      </BlockImage>
    </Container>
  );
}

export default Register;
