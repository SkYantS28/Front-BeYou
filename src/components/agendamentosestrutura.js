
import styled, { createGlobalStyle } from "styled-components";
import Calendar from 'react-calendar';


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
    margin-left: 15px;
    margin-right: 15px;
    &:hover {
        background-color: transparent;
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
`;


const Noticacao = styled.div`
    display: flex;
    align-items: center;
`;


const Sair = styled.div`
    display: flex;
    align-items: center;
`;


const MainWrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;


const DivSelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 50%;
    margin-top: 20px;


    select {
        width: 100%; /* Garantindo que todos os selects ocupem 100% da largura do container */
        padding: 10px;
        border: 2px solid hsl(300, 99%, 64%);  /* Cor semelhante à SearchBar */
        border-radius: 20px;
        font-size: 16px;
        color: #6c4539; /* Cor do texto */
        outline: none;
        background-color: rgba(255, 255, 255, 0.5); /* Fundo transparente */
        backdrop-filter: blur(5px); /* Efeito de desfocagem */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombrinha suave */
        margin-top: 10px;
        cursor:pointer;
        transition: all 0.3s ease-in-out; /* Adicionando transição suave para hover e clique */


        &::placeholder {
            color: #6c4539; /* Cor do texto do placeholder */
        }


        &:hover {
            border-color: hsl(300, 99%, 50%); /* Cor de borda mais escura no hover */
            background-color: rgb(255, 255, 255); /* Fundo um pouco mais opaco no hover */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombrinha mais destacada */
            color: #f45bf4;
            transform: translateY(-5px);
        }


        &:focus {
            border-color:rgb(247, 6, 247); /* Cor de borda ao focar no select */
            background-color: rgba(255, 255, 255, 0.9); /* Fundo mais claro no foco */
            box-shadow: 0 0 10px rgba(244, 91, 244, 0.3); /* Sombrinha com cor de destaque */
        }
    }


    h3 {
        font-size: 18px;
        color: #6c4539; /* Cor marrom para os textos */
    }


    button {
        width: 70%;
        padding: 20px;
        background-color: #f45bf4;
        color: white;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        border: solid 2px #6c4539;
        border-radius: 15px;
        cursor: pointer;
        opacity: 0.8;
        margin-top: 7px;
        margin-bottom: 10px;
        align-self: center;
        transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s; /* Transições para hover e clique */


        &:hover {
            background-color: #e044e0; /* Cor de fundo mais escura ao passar o mouse */
            transform: translateY(-2px); /* Eleva o botão um pouco */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Sombrinha mais destacada */
        }


        &:active {
            transform: translateY(5px); /* Efeito de clique, movendo o botão para baixo */
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Sombrinha mais suave ao clicar */
        }
    }
`;


const NotifAgenda = styled.div`
  text-align: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 25px;
  width: 400px;
  transition: transform 0.2s ease-in-out;


  &:hover {
    transform: translateY(-4px);
  }
`;


const Notifbut = styled.button`
  margin: 5px;
  margin-top: 10px;
  background-color: #f45bf4;
  border: solid 1px #6c4539;
  border-radius: 20px;
  padding: 5px;
  color: white;
  cursor: pointer;


  &:hover {
    background-color: #e044e0;
  }
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
   
    &:hover {
        transform: scale(1.1);
        text-decoration: underline;
        color: hsl(300, 99%, 64%);
    }
`;


const Title = styled.h1`
    text-align: left;
    color: #6c4539;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
`;


const CustomCalendar = styled(Calendar)`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;


  .react-calendar__navigation button {
    color: #00796b;
    font-weight: bold;
    min-width: 44px;
    background: none;
    font-size: 1.2rem;
    margin-top: 8px;
  }


  .react-calendar__tile {
    height: 80px;
    border-radius: 50%;
    text-align: center;
    padding: 0.5rem;
    transition: 0.3s all;
  }


  .react-calendar__tile--now {
    background: #e0f7fa;
    color: #00796b;
  }


  .react-calendar__tile--active {
    background: #00796b;
    color: white;
  }


  .highlight {
    background: #ffeb3b;
    color: black;
    font-weight: bold;
  }
`;


const TitleHistorico = styled.h2`
  margin-top: 100px;
`;


const Historico = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 60px;
`;


const AgendamentoCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 25px auto;
  width: 400px;
  transition: transform 0.2s ease-in-out;


  &:hover {
    transform: translateY(-4px);
  }
`;


// Informações dentro do cartão
const AgendamentoInfo = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin: 8px 0;
  padding: 5px;


  strong {
    color: #555;
    font-weight: 600;
  }
`;




const Dot = styled.div`
  height: 8px;
  width: 8px;
  background-color: #FF5733;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 2px;
`;


const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 80px;
  border: 3px solid #6c4539;
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
  text-align: center;
  margin: 10px 0;
  &:hover {
    background-color: transparent;
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
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 40px;
`;


const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
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
  MainWrapper,
  DivSelectWrapper,
  NotifAgenda,
  Notifbut,
  Icons,
  Title,
  CustomCalendar,
  TitleHistorico,
  Historico,
  AgendamentoCard,
  AgendamentoInfo,
  Dot,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  TitleFooter,
  Texto,
  GlobalStyle
};
