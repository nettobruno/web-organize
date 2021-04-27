// Dependencies
import React from 'react';

// Images
import firstImage from '../../assets/first.svg';
import secondImage from '../../assets/second.svg';

// Styles
import { Container, Section, Content, BlockTexts, BlockImage } from './styles';

function Welcome() {
  return (
    <Container>
      <Section className="bg-yellow">
        <div className="container">
          <Content>
            <BlockTexts>
              <h1>Organize-se</h1>
              <div>
                <h2>Anda meio perdido?</h2>
                <p>Talvez falte um pouco de organização nessa rotina em.</p>
                <p>Vamos dar um jeito nisso!</p>
              </div>
            </BlockTexts>

            <BlockImage>
              <img src={firstImage} alt="" />
            </BlockImage>
          </Content>
        </div>
      </Section>

      <Section className="bg-blue">
        <div className="container">
          <Content>
            <BlockImage>
              <img src={secondImage} alt="" />
            </BlockImage>

            <BlockTexts>
              <h2>Se mantenha atualizado</h2>
              <p>
                O Mundo atual é muito corrido, cheio de coisas novas, e a cada
                dia sai alguma novidade.
              </p>
              <p>Precisamos ficar sempre atentos para não perder nada.</p>
            </BlockTexts>
          </Content>
        </div>
      </Section>
    </Container>
  );
}

export default Welcome;
