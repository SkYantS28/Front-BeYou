import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Background = styled.div`
  background-color: rgb(255, 228, 230);
`;

const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #6c4539;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #6c4539;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

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

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Menu = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MenuLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
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
  overflow: hidden;
  justify-content: flex-end;
  gap: 16px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Noticacao = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Sair = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
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

const NoticacaoLink = styled.a`
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

const BotaoSair = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  background-color: transparent;
  color: #6c4539;
  border: none;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const Title = styled.h1`
  font-size: 40px;
  color: #6c4539;
  cursor: pointer;
  margin: 30px 50px 10px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 20px;
  }
`;

const FiltrosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 50px;
  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const BotaoFiltro = styled.button`
  cursor: pointer;
  border-radius: 15px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  padding: 10px 15px;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const CampoBusca = styled.input`
  margin: 20px 50px;
  width: calc(100% - 100px);

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

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 50px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 20px;
  }
`;

const Card = styled.div`
  width: 300px;
  background-color: white;
  border: 2px solid #6c4539;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ImgCard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  color: #6c4539;
`;

const CardTitulo = styled.h2`
  font-size: 20px;
  margin: 5px 0;
`;

const CardCategoria = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #9b4d8c;
`;

const CardNota = styled.p`
  font-size: 16px;
  color: #d68aff;
`;

const CardPreco = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const CardBotoes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const BotaoCard = styled.button`
  flex: 1;
  padding: 8px;
  font-size: 10px;

  cursor: pointer;
  border-radius: 15px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const IlustracaoVazio = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #6c4539;
  img {
    width: 200px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const BotaoLimparTudo = styled.button`
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 50px;
  margin-bottom: 30px;

  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  padding: 10px 15px;
  background-color: #f45bf4;
  color: white;
  border: solid 2px #6c4539;
  opacity: 0.8;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  text-align: center;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;


const TitleFooter = styled.h3`
    text-align: center;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    margin-bottom: 10px;
    font-size: 40px;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    max-height: 400px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;


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

  Title,
  FiltrosContainer,
  BotaoFiltro,
  CampoBusca,
  CardContainer,
  Card,
  ImgCard,
  CardContent,
  CardTitulo,
  CardCategoria,
  CardNota,
  CardPreco,
  CardBotoes,
  BotaoCard,
  IlustracaoVazio,
  BotaoLimparTudo,
  
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Logo,
  Direitos,
  TitleFooter,
  Texto,
  GlobalStyle
}; 


