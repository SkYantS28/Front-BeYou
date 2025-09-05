import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    BackgroundImage,
    Formulario,
    Title,
    Input,
    BotaoCadastro,
    BotaoLogin,
    EsqueciSenha,
    InputLink
} from "./components/loginlojaestrutura";

const Login = () => {
  const [formData, setFormData] = useState({
    cnpj: "",
    senha: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cnpj || !formData.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Login realizado com sucesso!");
    navigate("/PaginaInicial");
  };

  return (
    <BackgroundImage>
      <Formulario>
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>

        <label htmlFor="cnpj"><b>CNPJ</b></label>
        <Input type="text" placeholder="Digite seu CNPJ" name="cnpj" required value={formData.cnpj} onChange={handleChange} />
        
        <label htmlFor="senha"><b>Senha</b></label>
        <Input type="password" placeholder="Digite sua senha" name="senha" required value={formData.senha} onChange={handleChange} />

        <EsqueciSenha>
        <InputLink href="#">Esqueci minha senha</InputLink>
        </EsqueciSenha>

        <BotaoLogin type="submit">Entrar</BotaoLogin>
        <BotaoCadastro type="button" onClick={() => navigate("/Cadastroloja")}>Cadastrar</BotaoCadastro>

      </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Login;