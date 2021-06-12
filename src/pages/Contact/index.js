// Dependencies
import React, { useRef } from 'react';

// Components
import SimpleInput from '../../components/SimpleInput';

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

  async function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
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
                Feito com ❤️ por{' '}
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
