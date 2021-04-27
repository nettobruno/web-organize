// Dependencies
import React, { useRef, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';

// Components
import SimpleInput from '../../components/SimpleInput';
// import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';

// styles
import { Container, FormContent } from './styles';

function Login() {
  const formRef = useRef();
  // const history = useHistory();
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
          console.log(response);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
          setLoader(false);
        });
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  }

  return (
    <Container>
      <Loader loader={loader} />
      <h2>Login</h2>
      <FormContent ref={formRef} onSubmit={handleSubmit}>
        <SimpleInput name="email" placeholder="E-mail" type="email" />
        <SimpleInput name="password" placeholder="Senha" type="password" />
        <button type="submit">Acessar</button>
      </FormContent>
    </Container>
  );
}

export default Login;
