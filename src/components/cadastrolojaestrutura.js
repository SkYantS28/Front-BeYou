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
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Formulario = styled.div`
  position: absolute;
  right: 0;
  margin: 5px;
  margin-right: 150px;
  max-width: 500px;
  padding: 15px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;
  border-radius: 12px;

  @media (max-width: 1024px) {
    margin-right: 50px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    position: static;
    margin: 0 auto;
    width: 100%;
    max-width: 90%;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: hsl(321, 100%, 58%);
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;
  font-size: 1rem;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }
`;

const Checkbox = styled.div`
  color: #f45bf4;
  font-style: none;
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: 10px;
`;

const CheckboxInput = styled.input`
  margin-top: 10px;
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CheckboxLink = styled.a`
  color: #f45bf4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoCadastrar = styled.button`
  background-color: #f45bf4;
  color: white;
  padding: 12px 24px;
  border: solid 2px #6c4539;
  cursor: pointer;
  width: 60%;
  opacity: 0.8;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 90px;
  border-radius: 30px;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;

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
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-size: 16px;
  }
`;

export {
  BackgroundImage,
  Formulario,
  Title,
  Input,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  CheckboxLink,
  BotaoCadastrar
};
