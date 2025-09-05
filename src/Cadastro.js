import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Formulario,
  Title,
  Input,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  CheckboxLink,
  BotaoCadastrar
} from "./components/cadastroestrutura";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    concordo: false,
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }
    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <BackgroundImage>
      <Formulario>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nome"><b>Nome</b></label>
        <Input type="text" placeholder="Digite seu nome" name="nome" required value={formData.nome} onChange={handleChange} />

        <label htmlFor="email"><b>E-mail</b></label>
        <Input type="text" placeholder="Digite seu e-mail" name="email" required value={formData.email} onChange={handleChange} />
        
        <label htmlFor="senha"><b>Senha</b></label>
        <Input type="password" placeholder="Digite sua senha" name="senha" required value={formData.senha} onChange={handleChange} />

        <label htmlFor="confirmarSenha"><b>Confirmar senha</b></label>
        <Input type="password" placeholder="Confirme sua senha" name="confirmarSenha" required value={formData.confirmarSenha} onChange={handleChange} />


        <Checkbox>
          <CheckboxInput type="checkbox" id="concordo" name="concordo" required checked={formData.concordo} onChange={handleChange} />
          <CheckboxLabel htmlFor="concordo">Li e concordo com os <CheckboxLink onClick={() => navigate("/TermosdeUso")} target="_blank">termos de uso</CheckboxLink></CheckboxLabel>
        </Checkbox>

        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Cadastro;