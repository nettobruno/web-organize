// Dependencies
import React, { useState, useRef } from 'react';
import api from '../../services/api';

// Components
import MenuHamburguer from '../../components/MenuHamburguer';
import SimpleInput from '../../components/SimpleInput';
import { showToast } from '../../components/Alert';
import Loader from '../../components/Loader';

// Imagens
import imageGithub from '../../assets/github.svg';

// styles
import {
  Container,
  Content,
  ThreeColumns,
  CircleGithub,
  FormContent,
} from './styles';

function Contact() {
  const formRef = useRef();
  const [loader, setLoader] = useState(false);

  async function handleSubmit(data, { reset }) {
    setLoader(true);
    try {
      api
        .post('send-email/store', {
          name: data.name,
          email: data.email,
          message: data.message,
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
          }
          setLoader(false);
          reset();
        })
        .catch((err) => {
          showToast({
            type: 'error',
            message: err.response.data.message,
          });
          setLoader(false);
          reset();
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
      <MenuHamburguer />

      <Loader loader={loader} />
      <div className="container">
        <Content>
          <h1>Gostou do Projeto?</h1>
          <ThreeColumns>
            <h2>É open source</h2>
            <div className="inline">
              <div className="line" />
              <h3> ou </h3>
              <div className="line" />
            </div>
            <h2>Entre em contato</h2>
          </ThreeColumns>

          <ThreeColumns>
            <div className="link">
              <CircleGithub
                href="https://github.com/nettobruno/web-organize"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imageGithub} alt="" />
              </CircleGithub>
              <p>
                Feito com ❤️ por
                <a
                  href="https://brunonetto.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bruno Netto
                </a>
              </p>
            </div>

            <div />

            <div className="form">
              <FormContent ref={formRef} onSubmit={handleSubmit}>
                <SimpleInput name="name" placeholder="Nome" type="text" />
                <SimpleInput name="email" placeholder="E-mail" type="email" />
                <SimpleInput
                  multiline
                  name="message"
                  placeholder="Mensagem"
                  type="text"
                />
                <button type="submit">Enviar</button>
              </FormContent>
            </div>
          </ThreeColumns>
        </Content>
      </div>
    </Container>
  );
}

export default Contact;
