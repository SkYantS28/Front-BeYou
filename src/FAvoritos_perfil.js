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

    Title,
    FiltrosContainer,
    BotaoFiltro,
    CampoBusca,
    CardContainer,
    Card,
    ImgCard,
    CardContent,
    CardTitulo,
    CardCategoria,
    CardNota,
    CardPreco,
    CardBotoes,
    BotaoCard,
    IlustracaoVazio,
    BotaoLimparTudo,

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
} from "./components/favoritosestilos";

function FAvoritosPerfil() {
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
  const [busca, setBusca] = useState("");
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos");

  const [favoritos, setFavoritos] = useState([
    {
      id: "servico-01",
      tipo: "servico",
      nome: "Corte de Cabelo Masculino",
      categoria: "Serviço",
      imagem: "/img/servico_corte.jpeg",
      avaliacoes: 128,
      preco: 45.00
    },
    {
      id: "produto-01",
      tipo: "produto",
      nome: "Shampoo Hidratante",
      categoria: "Produto de Beleza",
      imagem: "/img/shampoo.jpeg",
      avaliacoes: 212,
      preco: 29.90
    },
    {
      id: "profissional-01",
      tipo: "profissional",
      nome: "Julia Fernandes",
      categoria: "Cabeleireira",
      imagem: "/img/julia_fernandes.jpeg",
      avaliacoes: 342
    },
    {
      id: "servico-02",
      tipo: "servico",
      nome: "Design de Sobrancelhas",
      categoria: "Serviço",
      imagem: "/img/sobrancelhas.jpeg",
      avaliacoes: 87,
      preco: 30.00
    },
    {
      id: "produto-02",
      tipo: "produto",
      nome: "Creme Pós-Barba Refrescante",
      categoria: "Produto Masculino",
      imagem: "/img/creme_barba.jpeg",
      avaliacoes: 90,
      preco: 19.90
    },
    {
      id: "profissional-02",
      tipo: "profissional",
      nome: "Beto Oliveira",
      categoria: "Barbeiro",
      imagem: "/img/carlos_oliveira.jpeg",
      avaliacoes: 120
    }
  ]);

  const removerFavorito = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  const limparFavoritos = () => {
    setFavoritos([]);
  };

  // Filtrar os favoritos com base no texto de busca e filtro selecionado
  const favoritosFiltrados = favoritos
    .filter(item =>
      item.nome.toLowerCase().includes(busca.toLowerCase()) &&
      (filtroSelecionado === "todos" || item.tipo === filtroSelecionado)
    );

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
          <Title>Meus Favoritos 💖</Title>

          <CampoBusca
            type="text"
            placeholder="Buscar entre seus favoritos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <BotaoLimparTudo onClick={limparFavoritos}>
            Limpar Tudo
          </BotaoLimparTudo>

          <FiltrosContainer>
            <BotaoFiltro onClick={() => setFiltroSelecionado("servico")}>
              Serviços
            </BotaoFiltro>
            <BotaoFiltro onClick={() => setFiltroSelecionado("profissional")}>
              Profissionais
            </BotaoFiltro>
            <BotaoFiltro onClick={() => setFiltroSelecionado("produto")}>
              Produtos
            </BotaoFiltro>
            <BotaoFiltro onClick={() => setFiltroSelecionado("todos")}>
              Todos
            </BotaoFiltro>
          </FiltrosContainer>

          {favoritosFiltrados.length === 0 ? (
            <IlustracaoVazio>
              <img src="/img/vazio.png" alt="Nenhum favorito" />
              <p>Você ainda não favoritou nada… Que tal explorar a loja?</p>
            </IlustracaoVazio>
          ) : (
            <CardContainer>
              {favoritosFiltrados.map((item) => (
                <Card key={item.id}>
                  <ImgCard src={item.imagem} alt={item.nome} />
                  <CardContent>
                    <CardTitulo>{item.nome}</CardTitulo>
                    <CardCategoria>{item.categoria}</CardCategoria>
                    <CardNota>⭐⭐⭐⭐⭐ ({item.avaliacoes})</CardNota>
                    {item.preco && (
                      <CardPreco>R$ {item.preco.toFixed(2)}</CardPreco>
                    )}
                    <CardBotoes>
                      <BotaoCard onClick={() => navigate(`/detalhes/${item.id}`)}>
                        Ver Detalhes
                      </BotaoCard>
                      {item.tipo === "servico" && (
                        <BotaoCard onClick={() => navigate(`/agendar/${item.id}`)}>
                          Agendar
                        </BotaoCard>
                      )}
                      <BotaoCard onClick={() => removerFavorito(item.id)}>
                        Remover ❤️
                      </BotaoCard>
                    </CardBotoes>
                  </CardContent>
                </Card>
              ))}
            </CardContainer>
          )}
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
              <br />
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

export default FAvoritosPerfil;
