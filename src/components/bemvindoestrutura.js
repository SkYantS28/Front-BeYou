import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url("/img/BackgroundImage.jpg"); 
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100vw;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Formulario = styled.div`
  background-color: rgba(255, 255, 255, 0.95); 
  padding: 50px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 15px; 
  display: flex;
  flex-direction: column; 
  margin-right: 50px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    margin-right: 0px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #FF69B4;
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const BotaoCadastrar = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 1rem;
  margin-top: 30px;
  border-radius: 30px; 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  align-self: center;

  &:hover {
    opacity: 1;
    background-color: hsl(300, 99%, 64%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.95rem;
  }
`;

const Texto = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  strong {
    color: #FF69B4;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
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

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

export {
  BackgroundImage,
  Formulario,
  Title,
  BotaoCadastrar, 
  Texto,
  GlobalStyle
};
