// Dependencies
import React from 'react';
import { useHistory } from 'react-router-dom';

// Imagens
import image404 from '../../assets/404.svg';

// styles
import { Container, Content } from './styles';

function Page404() {
  const history = useHistory();

  function back() {
    history.goBack();
  }

  return (
    <Container>
      <div className="container">
        <Content>
          <div className="texts">
            <h1>Página não encontrada</h1>
            <p>
              Opa, não esperava ver você por aqui. Infelizmente essa página não
              existe, clique no botão abaixo e volte para o início.
            </p>
            <div className="btn">
              <button type="button" onClick={() => back()}>
                Voltar
              </button>
            </div>
          </div>

          <img src={image404} alt="" />
        </Content>
      </div>
    </Container>
  );
}

export default Page404;
