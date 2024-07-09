import { styled } from "styled-components";

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const IconeContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
    img {
        width: 24px;
        height: 24px;
        color: white;
    }
  }
`;

const RodapeTexto = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

function Rodape() {
  return (
    <RodapeEstilizado>
      <IconeContainer>
        <li>
          <a href="https://github.com/amndalsr">
            <img src="/imagens/sociais/github.png" alt="GitHub da desenvolvedora" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/amanda-laís-757ba9209/">
            <img src="/imagens/sociais/linkedin.png" alt="Linkedin da desenvolvedora" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/amnda.lsr/">
            <img src="/imagens/sociais/instagram.png" alt="Instagram da desenvolvedora" />
          </a>
        </li>
      </IconeContainer>
      <RodapeTexto>Desenvolvido por Amanda Laís.</RodapeTexto>
    </RodapeEstilizado>
  );
}

export default Rodape;
