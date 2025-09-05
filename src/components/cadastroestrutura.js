import styled from "styled-components";

const BackgroundImage = styled.div`
  background-image: url("/img/BackgroundImage.jpg");
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
`;

const Formulario = styled.div`
  position: absolute;
  right: 0;
  margin: 20px;
  margin-right: 150px;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  color: black;
  border: solid 2px #6c4539;

  @media (max-width: 1024px) {
    margin-right: 50px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    position: relative;
    margin: 20px auto;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 15px;
    max-width: 95%;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: hsl(321, 100.00%, 58.00%);
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 15px 0 10px 0;
  border: solid 1px #6c4539;
  background-color: #ffecfc;
  border-radius: 50px;

  &:focus {
    background-color: #ffecfc;
    outline: none;
  }
`;

const Checkbox = styled.div`
  color: #f45bf4;
  font-style: none;
  display: block;
  text-align: center;
  text-decoration: none;
`;

const CheckboxInput = styled.input`
  margin-top: 10px;
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
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
  margin-top: 20px;
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
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 20px;
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
