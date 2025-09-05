import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import {
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
  Titulo as TituloOpcoes,
  Footer as FooterComponent,
  Descricao,
  MeusDados,
  DadosContainer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  Opcoes
} from "./components/dadosperfilestrutura";
import { User, Bell, LogOut } from "lucide-react";

// Seção: Dados Pessoais
function DadosPessoais() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes>
      <TituloOpcoes onClick={() => setVisivel(!visivel)}>Dados Pessoais</TituloOpcoes>
      <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
        <b>📝 Nome completo:</b> Sky Oliveira da Silva<br />
        <b>🌈 Nome social:</b> Sky<br />
        <b>🎂 Data de nascimento:</b> 12/03/2005<br />
        <b>🚺 Gênero:</b> Feminino<br /><br />
        <b>🆔 CPF / CNPJ:</b> 123.456.789-00<br />
        <b>🪪 RG:</b> 12.345.678-9<br />
        <b>📸 Foto de perfil:</b> sky_foto_perfil.jpg
      </Descricao>
    </Opcoes>
  );
}

// Seção: Contato
function Contato() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes>
      <TituloOpcoes onClick={() => setVisivel(!visivel)}>Contato</TituloOpcoes>
      <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
        <b>📧 E-mail principal:</b> usuaria@email.com<br />
        <b>📨 E-mail alternativo:</b> usuaria.alternativo@email.com<br /><br />
        <b>📱 Telefone celular:</b> (11) 91234-5678<br />
        <b>☎ Telefone fixo:</b> (11) 3456-7890<br />
        <b>💬 WhatsApp:</b> (11) 91234-5678
      </Descricao>
    </Opcoes>
  );
}

// Seção: Endereço
function Endereco() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes>
      <TituloOpcoes onClick={() => setVisivel(!visivel)}>Endereço</TituloOpcoes>
      <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
        <b>🏠 Endereço principal:</b> Rua das Flores, 123<br />
        <b>📍 Múltiplos endereços:</b> Av. Central, 456 – Sala 7, Rua Secundária, 789<br />
        <b>⭐ Endereço padrão:</b> Sim<br /><br />
        <b>🔢 CEP:</b> 01234-567<br />
        <b>🏙 Bairro:</b> Jardim das Rosas<br />
        <b>🌆 Cidade:</b> São Paulo<br />
        <b>🗺 Estado:</b> SP<br />
        <b>🌍 País:</b> Brasil
      </Descricao>
    </Opcoes>
  );
}

// Seção: Segurança da Conta
function SegurancaDaConta() {
  const [visivel, setVisivel] = useState(false);
  const [mostrarFormSenha, setMostrarFormSenha] = useState(false);

  return (
    <Opcoes>
      <TituloOpcoes onClick={() => setVisivel(!visivel)}>Segurança da Conta</TituloOpcoes>
      <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
        <BotaoEnviar type="button" onClick={() => setMostrarFormSenha(!mostrarFormSenha)}>
          🔒 Alterar senha
        </BotaoEnviar>

        {mostrarFormSenha && (
          <>
            <Label htmlFor="senhaAtual">Senha atual</Label>
            <Input type="password" id="senhaAtual" name="senhaAtual" />

            <Label htmlFor="novaSenha">Nova senha</Label>
            <Input type="password" id="novaSenha" name="novaSenha" />

            <Label htmlFor="confirmarSenha">Confirmar nova senha</Label>
            <Input type="password" id="confirmarSenha" name="confirmarSenha" />

            <BotaoEnviar type="submit">Salvar nova senha</BotaoEnviar>
          </>
        )}

        <br />
        <BotaoEnviar type="button">📧 Confirmar e-mail</BotaoEnviar><br />
        <BotaoEnviar type="button">🔐 Ativar autenticação em dois fatores</BotaoEnviar><br /><br />

        <b>📅 Histórico de login:</b> <em>último acesso em 10/04/2025</em><br />
        <b>💻 Dispositivos conectados:</b> <em>2 dispositivos ativos</em>
      </Descricao>
    </Opcoes>
  );
}

// Seção: Exclusão de Conta
function ExcluirConta() {
  const [visivel, setVisivel] = useState(false);
  return (
    <Opcoes>
      <TituloOpcoes onClick={() => setVisivel(!visivel)}>Excluir Conta</TituloOpcoes>
      <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
        <p>🗑 Solicitação de exclusão de dados pessoais conforme a <b>LGPD</b>.</p><br />
        <Label htmlFor="senhaConfirmacao">🔒 Confirme sua senha para continuar:</Label>
        <Input type="password" id="senhaConfirmacao" name="senhaConfirmacao" /><br />
        <Label htmlFor="motivoSaida">💬 Por que você está saindo?</Label>
        <TextArea
          id="motivoSaida"
          name="motivoSaida"
          placeholder="Deixe seu feedback (opcional)"
        /><br />
        <BotaoExcluir type="submit">🚨 Excluir minha conta</BotaoExcluir>
      </Descricao>
    </Opcoes>
  );
}

// Tela principal com todas as seções
function TelaMeusDados() {
  return (
    <DadosContainer>
      <DadosPessoais />
      <Contato />
      <Endereco />
      <SegurancaDaConta />
      <ExcluirConta />
    </DadosContainer>
  );
}

// Componente principal
function MeuPerfil() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const reloadPage = (event) => {
    event.preventDefault();
    window.location.reload();
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Background>
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>

        <Menu>
          <MenuLink onClick={() => navigate("/PaginaInicial")}>Início</MenuLink>
          <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>
          <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>
          <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>
          <MenuLink onClick={() => navigate("/Favoritos_perfil")}>Favoritos</MenuLink>
        </Menu>

        <SearchBar type="text" placeholder="Busque por item ou loja" />

        <Icons>
          <Perfil>
            <PerfilLink onClick={() => navigate("/MeuPerfil")}>
              <User className="icone" />
            </PerfilLink>
          </Perfil>

          <Noticacao>
            <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}>
              <Bell className="icone" />
            </NoticacaoLink>
          </Noticacao>

          <Sair>
            <BotaoSair onClick={handleLogout}>
              <LogOut className="icone" />
            </BotaoSair>
          </Sair>
        </Icons>
      </Header>

      <main>
        <TelaMeusDados />
      </main>

      <FooterComponent>
        <ConteudoFooter>
          <Coluna>
            <TitleFooter>BeYou</TitleFooter>
            <FooterLink>Site Institucional</FooterLink>
            <FooterLink>Fale Conosco</FooterLink>
            <FooterLink>Conta e Segurança</FooterLink>
            <FooterLink>Carreiras</FooterLink>
            <FooterLink>Entregadores</FooterLink>
          </Coluna>
          <Coluna>
            <TitleFooter>Descubra</TitleFooter>
            <FooterLink>Cadastre sua loja</FooterLink>
            <FooterLink>Beyou Shop</FooterLink>
            <FooterLink>BeYou Empresas</FooterLink>
            <FooterLink>Blog BeYou Empresas</FooterLink>
          </Coluna>
          <Coluna>
            <TitleFooter>Social</TitleFooter>
            <SocialIcons>
              <FooterLink><FaFacebookF/></FooterLink>
              <FooterLink><FaTwitter/></FooterLink>
              <FooterLink><FaYoutube/></FooterLink>
              <FooterLink><FaInstagram/></FooterLink>
            </SocialIcons>
          </Coluna>

          <Direitos>
            <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />           
            <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
            <br></br>
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </FooterComponent>
    </Background>
  );
}

export default MeuPerfil;
