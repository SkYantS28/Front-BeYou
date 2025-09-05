import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut} from "lucide-react";
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

    Container,
    Titulo,
    FiltroSelect,
    Grid,
    Card,
    Imagem,
    Nome,

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
} from "./components/pesquisarestrutura";

const Pesquisar = () => {
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

    // Dados das categorias
    const categorias = [
        { nome: "Sobrancelha", imagem: "/img/categoria_sobrancelha.jpg" },
        { nome: "Unhas", imagem: "/img/categoria_unhas.avif" },
        { nome: "Coloração", imagem: "/img/categoria_coloracao.webp" },
        { nome: "Tranças", imagem: "/img/categoria_trancas.webp" },
        { nome: "Cilios", imagem: "/img/categoria_cilios.jpg" },
        { nome: "Depilação", imagem: "/img/categoria_depilacao.jpeg" },
        { nome: "Massagem", imagem: "/img/categoria_massagem.jpg" },
        { nome: "Luzes", imagem: "/img/categoria_luzes.jpeg" },
        { nome: "Escova", imagem: "/img/categoria_escova.jpg" },
        { nome: "Maquiagem", imagem: "/img/categoria_make.jpg" },
        { nome: "Micropigmentação", imagem: "/img/categoria_micropigmentacao.jpeg" },
        { nome: "Limpeza", imagem: "/img/categoria_limpeza.jpg" },
        { nome: "Corte", imagem: "/img/categoria_corte.jpeg" },
        { nome: "Hidratação", imagem: "/img/categoria_hidratacao.jpeg" },
        { nome: "Mega Hair", imagem: "/img/categoria_mega.jpeg" },
    ];

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

    const categoriasFiltradas = categoriaSelecionada
        ? categorias.filter((c) => c.nome === categoriaSelecionada)
        : categorias;

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
                    <Container>
                        <Titulo>Selecione uma categoria</Titulo>
                        <FiltroSelect
                            value={categoriaSelecionada}
                            onChange={(e) => setCategoriaSelecionada(e.target.value)}
                        >
                        <option value="">Todas as categorias</option>
                        {categorias.map((cat, i) => (
                            <option key={i} value={cat.nome}>
                            {cat.nome}
                            </option>
                        ))}
                        </FiltroSelect>

                        <Grid>
                            {categoriasFiltradas.map((cat, i) => (
                                <Card key={i}>
                                <Imagem src={cat.imagem} alt={cat.nome} />
                                <Nome>{cat.nome}</Nome>
                                </Card>
                            ))}
                        </Grid>
                    </Container>
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
                        <FooterLink><FaFacebookF /></FooterLink>
                        <FooterLink><FaTwitter /></FooterLink>
                        <FooterLink><FaYoutube /></FooterLink>
                        <FooterLink><FaInstagram /></FooterLink>
                        </SocialIcons>
                    </Coluna>

                    <Direitos>
                        <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />
                        <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
                        <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
                    </Direitos>

                    <Links>
                        <FooterLink>Termos e Condições de Uso</FooterLink>
                        <FooterLink>Código de Conduta</FooterLink>
                        <FooterLink>Privacidade</FooterLink>
                        <FooterLink>Dicas de Segurança</FooterLink>
                    </Links>
                    </ConteudoFooter>
                </Footer>
        </Background>
    );
    };

    export default Pesquisar;