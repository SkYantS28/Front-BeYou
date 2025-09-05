import styled from "styled-components";

// -----------------------------------------------
// COMPONENTES DE ESTRUTURA PRINCIPAL
// -----------------------------------------------

const Background = styled.div`
  background-color: rgb(255, 228, 230);
`;

const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 40px;
  border-bottom: 4px solid #e6b2d4;
  border-radius: 0 0 30px 30px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6c4539;
`;

// -----------------------------------------------
// LOGO E BUSCA
// -----------------------------------------------

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.input`
  width: 30%;
  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

// -----------------------------------------------
// MENU E ÍCONES
// -----------------------------------------------

const Menu = styled.div`
  overflow: hidden;
`;

const MenuLink = styled.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  margin: 0 15px;

  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
`;

const Noticacao = styled.div`
  display: flex;
  align-items: center;
`;

const Sair = styled.div`
  display: flex;
  align-items: center;
`;

const PerfilLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const NoticacaoLink = styled(PerfilLink)``;

const BotaoSair = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: #6c4539;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

// -----------------------------------------------
// SEÇÕES, TÍTULOS E FORMULÁRIOS
// -----------------------------------------------

const Secao = styled.section`
  padding: 20px;
  margin: 10px 0;
`;

const Title = styled.div`
  text-align: left;
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  color: #6c4539;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
`;

const BotaoEnviar = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #fd99d5;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fd99d5;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BotaoExcluir = styled(BotaoEnviar)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #ff6666;
  }

  &:active {
    background-color: #cc0000;
  }
`;

// -----------------------------------------------
// DADOS E OPÇÕES DO PERFIL
// -----------------------------------------------

const MeusDados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  white-space: pre-line;
`;

const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const Opcoes = styled.div`
  color: #6c4539;
  width: 1000px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.38);
  opacity: 90%;
  border-radius: 12px;
  border: 1px solid #6c4539;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;

const Descricao = styled.div`
  font-size: 20px;
  margin-top: 10px;
  display: ${(props) => (props.visivel ? "block" : "none")};
  text-align: justify;
  line-height: 1.5;
`;

const Titulo = styled.div`
  color: #6c4539;
  font-size: 40px;
  margin: 20px 50px;
`;

// -----------------------------------------------
// RODAPÉ
// -----------------------------------------------

const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px 80px;
  border: 3px solid #6c4539;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;

  &:hover {
    color: hsl(300, 99%, 64%);
    transform: scale(1.1);
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  color: #6c4539;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const Logo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

const TitleFooter = styled.h3`
  text-align: center;
  color: #6c4539;
  font-size: 40px;
  margin-bottom: 10px;
`;

// -----------------------------------------------
// EXPORTS
// -----------------------------------------------

export {
  Background,
  Header,
  LogoContainer,
  ImgLogo,
  SearchBar,
  Menu,
  MenuLink,
  BotaoSair,
  PerfilLink,
  NoticacaoLink,
  Perfil,
  Noticacao,
  Sair,
  Icons,
  Secao,
  Label,
  Input,
  TextArea,
  BotaoEnviar,
  BotaoExcluir,
  Title,
  TitleFooter,
  Texto,
  Titulo,
  Descricao,
  MeusDados,
  DadosContainer,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  Opcoes
};
