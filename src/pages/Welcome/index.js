// Dependencies
import React from 'react';

// Images
import firstImage from '../../assets/first.svg';
import secondImage from '../../assets/second.svg';
import thirdImage from '../../assets/third.svg';
import fourthImage from '../../assets/fourth.svg';
import fifthImage from '../../assets/fifth.svg';
import sixthImage from '../../assets/sixth.svg';

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

      <Section className="bg-rose">
        <div className="container">
          <Content>
            <BlockTexts>
              <h2>Foco e progresso</h2>
              <p>
                Para que a gente consiga alcançar nos nossos objetivos é preciso
                ter muito foco, e principalmente organização para não deixar
                nada passar em branco.
              </p>
            </BlockTexts>

            <BlockImage>
              <img src={thirdImage} alt="" />
            </BlockImage>
          </Content>
        </div>
      </Section>

      <Section className="bg-yellow">
        <div className="container">
          <Content>
            <BlockImage>
              <img src={fourthImage} alt="" />
            </BlockImage>

            <BlockTexts>
              <h2>Não esqueça de nada</h2>
              <p>
                Com tantas coisas para fazer a falta de organização bate na
                porta, e a gente pode esquecer de fazer coisa simples mas
                extremamente importantes, como praticar atividades físicas
              </p>
            </BlockTexts>
          </Content>
        </div>
      </Section>

      <Section className="bg-blue">
        <div className="container">
          <Content>
            <BlockTexts>
              <h2>Ganhe produtividade</h2>
              <p>
                O trabalho já não vai render tanto como antes, as tarefas irão
                acumular, o estresse aumenta, e a saúde mental vai pra longe
              </p>

              <p>Não queremos que isso aconteça</p>
            </BlockTexts>

            <BlockImage>
              <img src={fifthImage} alt="" />
            </BlockImage>
          </Content>
        </div>
      </Section>

      <Section className="bg-rose">
        <div className="container">
          <Content>
            <BlockImage>
              <img src={sixthImage} alt="" />
            </BlockImage>

            <BlockTexts>
              <h3>Bora Anotar</h3>
              <p>
                Nós vamo te ajudar a manter a produtividade e organização em
                alta. Faça seu login, e começe a mudança no seu dia a dia
              </p>

              <a href="/login">Acessar</a>
            </BlockTexts>
          </Content>
        </div>
      </Section>
    </Container>
  );
}

export default Welcome;
