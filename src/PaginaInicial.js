import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
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

    PromocaoLugares,
    LugaresImg,
    PromocaoImg,
    PromocaoProdutos,
    Title,
    ProdutosImg,
    LogosEmpresas,
    EmpresasImg,
    VoceSabia,
    VoceSabiaImg,

    Topo,
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
} from "./components/inicialestrutura";

function Inicial() {
  const handleLogout = () => {
          navigate("/bemvindo"); 
        };
    
      // linkar paginas
      const navigate = useNavigate(); 
    
      // levar ate a pagina inicial
      const reloadPage = (event) => {
          event.preventDefault();
          navigate('/PaginaInicial');
      };

  return (
    <Background>
      <GlobalStyle />
          <Header>
              <LogoContainer>
                  <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
              </LogoContainer>

              <Menu>
                  <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>

                  <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>

                  <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>

                  <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>

                  <MenuLink onClick={() => navigate("/FAvoritos_perfil")}>Favoritos</MenuLink>

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
          <PromocaoLugares>
            <Title>Promoções de Serviços</Title>

            <LugaresImg src="/img/promocao1.jpg" alt="promção de alongamento de unha" />

            <LugaresImg src="/img/promocao2.jpg" alt="promoção de progressiva" />

            <LugaresImg src="/img/promocao3.jpeg" alt="promoção de corte" />

            <LugaresImg src="/img/promoçao4.jpg" alt="promoção de tranças" />

            <LugaresImg src="/img/promocao5.jpeg" alt="promoção de  massagem" />

            <LugaresImg src="/img/promocao6.jpeg" alt="" />

            <LugaresImg src="/img/promocao7.jpeg" alt="" />

            <LugaresImg src="/img/promocao8.jpeg" alt="" />

            <LugaresImg src="/img/promocao9.jpeg" alt="" />

            <LugaresImg src="/img/promocao10.jpeg" alt="" />

            <LugaresImg src="/img/promocao11.jpeg" alt="" />

            <LugaresImg src="/img/promocao12.jpeg" alt="" />

            <LugaresImg src="/img/promocao13.jpeg" alt="" />

          </PromocaoLugares>

          <PromocaoProdutos>
            <Title>Promoções de Produtos</Title>

            <ProdutosImg src="/img/promocao_produto1.jpg" alt="" />

            <ProdutosImg src="/img/promocao_produto2.jpg" alt="progressiva" />

            <ProdutosImg src="/img/promocao_produto3.jpg" alt="" />

            <ProdutosImg src="/img/imgnv1.jpg" alt="" />

            <ProdutosImg src="/img/imgnova.jpg" alt="" />

            <ProdutosImg src="/img/produto6.jpeg" alt="" />

            <ProdutosImg src="/img/produto7.jpeg" alt="" />

            <ProdutosImg src="/img/produto8.jpeg" alt="" />

            <ProdutosImg src="/img/produto9.jpeg" alt="" />

            <ProdutosImg src="/img/produto10.jpeg" alt="" />

            <ProdutosImg src="/img/produto11.jpeg" alt="" />

            <ProdutosImg src="/img/produto12.jpeg" alt="" />

            <ProdutosImg src="/img/produto13.jpeg" alt="" />

            <ProdutosImg src="/img/produto14.jpeg" alt="" />

            <ProdutosImg src="/img/produto15.jpeg" alt="" />

          </PromocaoProdutos>

          <LogosEmpresas>
            <Title>Lojas em destaque</Title>
            <EmpresasImg src="/img/loja1.jpg" alt="" />

            <EmpresasImg src="/img/loja2.jpg" alt="" />

            <EmpresasImg src="/img/loja3.jpg" alt="" />

            <EmpresasImg src="/img/loja5.jpg" alt="" />

            <EmpresasImg src="/img/loja6.jpg" alt="" />

            <EmpresasImg src="/img/loja7.jpg" alt="" />

            <EmpresasImg src="/img/loja7.png" alt="" />

            <EmpresasImg src="/img/loja8.jpeg" alt="" />

            <EmpresasImg src="/img/loja9.jpeg" alt="" />

            <EmpresasImg src="/img/loja10.png" alt="" />

            <EmpresasImg src="/img/loja11.jpeg" alt="" />

            <EmpresasImg src="/img/loja12.jpeg" alt="" />

            <EmpresasImg src="/img/loja13.jpeg" alt="" />

            <EmpresasImg src="/img/loja14.png" alt="" />
            
            <EmpresasImg src="/img/loja15.png" alt="" />

            <EmpresasImg src="/img/loja16.png" alt="" />

            <EmpresasImg src="/img/loja17.png" alt="" />

            <EmpresasImg src="/img/loja18.jpeg" alt="" />

          </LogosEmpresas>

          <VoceSabia>
            <Title>Você sabia...?</Title>

            <VoceSabiaImg src="/img/voce_sabia1.jpg" alt="" />

            <VoceSabiaImg src="/img/voce_sabia2.jpg" alt="" />

            <VoceSabiaImg src="/img/voce_sabia3.jpg" alt="" />

            <VoceSabiaImg src="/img/voce_sabia4.jpg" alt="" />

            <VoceSabiaImg src="/img/voce_sabia5.jpg" alt="" />

            <VoceSabiaImg src="/img/sabia6.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia7.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia8.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia9.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia10.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia11.png" alt="" />

            <VoceSabiaImg src="/img/sabia12.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia13.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia14.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia15.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia17.jpeg" alt="" />

            <VoceSabiaImg src="/img/sabia18.jpeg" alt="" />

          </VoceSabia>
        </main>

        <Footer>
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
        </Footer>
    </Background>
  );
}

export default Inicial;
