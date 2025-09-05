import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Background = styled.div`
    background-color:rgb(255, 228, 230);
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
    padding: 10px;
    border: 2px solid hsl(300, 99%, 64%);
    border-radius: 20px;
    font-size: 16px;
    color: #6c4539;
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &::placeholder {
        color: #6c4539;
    }
`;

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
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
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
    border: none;
    background-color: transparent;
    color: #6c4539;
    overflow: hidden;
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
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: none;
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
    overflow: hidden;
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

const Title = styled.div`
    text-align: left;
    color: #6c4539;
    font-style: bold;
    list-style: none;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`;

/* Adicionado */
const PerfilContainer = styled.div`
    text-align: center;
    background-color: #FFC9E9;
    padding: 50px;
    margin: 50px auto;
    width: 50%;
    border-radius: 20px;
    margin-top: 75px;
`;

const ImgPerfilGrande = styled.img`
    margin-top: 0px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #6c4539;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
`;

const NomePerfil = styled.h1`
    color:rgb(78, 50, 41);
    font-size: 50px;
    font-weight: bold;
    margin-top: 20px;
`;

const IconeConteiner = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    flex-wrap: wrap;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    text-align: center;
`;

const Icones = styled.div`
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    white-space: nowrap;
    scrollbar-width: none;
    text-align: center;
`;

const IconeImg = styled.img`
    width: 170px;
    height: 170px;
    transition: transform 0.3s ease, opacity 0.3s ease;
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
`;

const VistoContainer = styled.div`
    margin-top: 120px;
    white-space: nowrap;
    scrollbar-width: none;
    flex-wrap: wrap;
    display: flex;  
`;

const ImgVisto = styled.img`
    margin-bottom: 50px;
    width: 300px;
    height: 300px;
    margin-left: 75px;
    border-radius: 20%;
    border: solid 2px #6c4539;

    &:hover {
        filter: brightness(0.8);;
        cursor: pointer;
`;

const VistoTexto = styled.div`
    position: absolute;
    top: 800px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    padding: 5px 10px;
    font-size: 30px; /* Reduzi um pouco para melhor encaixe */
    font-weight: bold;
    white-space: nowrap;
    color:rgb(78, 50, 41);
    margin-top: 100px;
`;

const LinhaSeparadora = styled.div`
    width: 100%;
    height: 2px;
    background-color: #6c4539;
    margin: 50px auto;
`;


const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 80px;
  display: flex; /*conteiner manipulavel*/
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  text-decoration: none;
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
  flex: 1;
  min-width: 200px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  width: 20px;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
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
  margin-bottom: 20px;
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
    PerfilContainer,
    ImgPerfilGrande,
    NomePerfil,
    IconeConteiner,
    IconeImg,
    Icones,
    LinhaSeparadora,
    VistoContainer,
    ImgVisto,
    VistoTexto,

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