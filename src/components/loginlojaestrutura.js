import styled from "styled-components";

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
`;

const Formulario = styled.div`
  position: absolute;
  right: 0;
  margin: 40px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;

  @media (max-width: 1024px) {
    margin-right: 60px;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 20px auto;
    width: 90%;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin: 10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: hsl(321, 100%, 58%);
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0 25px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;
  font-size: 1rem;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`;

const InputLink = styled.a`
  color: hsl(300, 99%, 64%);
  text-decoration: none;
  margin-left: 10px;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
    color: hsl(321, 100%, 58%);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

const EsqueciSenha = styled.div`
  font-size: 20px;
  color: hsl(300, 99%, 64%);
  display: flex;
  justify-content: center;
  margin-top: 10px;

  &:focus {
    text-decoration: underline;
    color: hsl(321, 100%, 58%);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Botao = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 50%;
  opacity: 0.8;
  font-size: 20px;
  margin: 30px auto 0 auto;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  display: block;

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

  @media (max-width: 480px) {
    width: 80%;
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const BotaoLogin = styled(Botao)``;
const BotaoCadastro = styled(Botao)``;

export {
  BackgroundImage,
  Formulario,
  Title,
  Input,
  BotaoCadastro,
  BotaoLogin,
  EsqueciSenha,
  InputLink
};
