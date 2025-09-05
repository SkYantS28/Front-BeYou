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
  NotificationContainer,
  NotificationItem,
  MarkAsReadButton,
  ClearAllButton,
  NotificationCategory,
  NotificationAvatar,
  NotificationContent,
  NotificationText,
  NotificationTime,
  DateSeparator,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Direitos,
  Logo,
  TitleFooter,
  Texto
} from './components/notificacoesestrutura';

function NotificacoesPerfil() {
  const navigate = useNavigate(); 
  const [filtro, setFiltro] = useState("todos");
  const [notifications, setNotifications] = useState({
    hoje: [
      { id: 1, tipo: "agendamento", icone: "📅", img: "/img/user1.jpeg", titulo: "Agendamento Confirmado", text: "Seu horário com a Marina (Cabeleireira) foi confirmado para amanhã às 14h.", time: "1h atrás", lida: false },
      { id: 2, tipo: "pedido", icone: "📦", img: "/img/user2.webp", titulo: "Pedido Enviado", text: "Seu pedido foi enviado! A previsão de entrega é 04/04.", time: "3h atrás", lida: false }
    ],
    semana: [
      { id: 3, tipo: "promocao", icone: "🎉", img: "/img/user3.jpg", titulo: "Semana do Cliente", text: "Serviços com até 50% de desconto!", time: "2 dias atrás", lida: false },
      { id: 4, tipo: "recomendacao", icone: "✨", img: "/img/user4.jpeg", titulo: "Novidades para você", text: "Óleo capilar e esfoliante facial, baseados nos seus gostos!", time: "5 dias atrás", lida: false },
      { id: 5, tipo: "social", icone: "❤️", img: "/img/user5.jpg", titulo: "Interação Social", text: "Mariana também favoritou o Shampoo Detox que você curtiu!", time: "5 dias atrás", lida: false }
    ]
  });

  const tipos = {
    todos: "Todos",
    promocao: "Promoções & Ofertas",
    agendamento: "Agendamentos",
    pedido: "Status de Pedido",
    recomendacao: "Recomendações",
    social: "Sociais"
  };

  const marcarTodasComoLidas = () => {
    const atualizadas = {};
    for (const categoria in notifications) {
      atualizadas[categoria] = notifications[categoria].map(n => ({ ...n, lida: true }));
    }
    setNotifications(atualizadas);
  };

  const marcarComoLida = (id) => {
    const atualizadas = {};
    for (const cat in notifications) {
      atualizadas[cat] = notifications[cat].map(n =>
        n.id === id ? { ...n, lida: true } : n
      );
    }
    setNotifications(atualizadas);
  };

  const filtrarNotificacoes = (notificacoes) => {
    if (filtro === "todos") return notificacoes;
    return notificacoes.filter(n => n.tipo === filtro);
  };

  const renderCategoria = (titulo, notificacoes) => {
    const filtradas = filtrarNotificacoes(notificacoes);
    if (filtradas.length === 0) return null;

    return (
      <>
        <DateSeparator>{titulo}</DateSeparator>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtradas.map(notif => (
            <NotificationItem key={notif.id} read={notif.lida} className="bg-white shadow-md rounded-lg p-4 flex items-start gap-4 h-full">
              <NotificationAvatar src={notif.img} className="w-14 h-14 object-cover rounded-full" />
              <NotificationContent className="flex-1">
                <NotificationText className="font-semibold">{notif.icone} {notif.titulo}</NotificationText>
                <NotificationText>{notif.text}</NotificationText>
                <NotificationTime className="text-sm text-gray-500">{notif.time}</NotificationTime>
              </NotificationContent>
              {!notif.lida && (
                <MarkAsReadButton onClick={() => marcarComoLida(notif.id)}>
                  Marcar como lida
                </MarkAsReadButton>
              )}
            </NotificationItem>
          ))}
        </div>
      </>
    );
  };

  const todasNotificacoesVazias = Object.values(notifications).every(arr => arr.length === 0);

  return (
    <Background>
      <Header>
        <LogoContainer>
          <ImgLogo onClick={() => navigate('/PaginaInicial')} src="/img/new_logo.jpg" alt="Logo" />
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
            <PerfilLink onClick={() => navigate("/MeuPerfil")}> <User className="icone" /> </PerfilLink>
          </Perfil>
          <Noticacao>
            <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}> <Bell className="icone" /> </NoticacaoLink>
          </Noticacao>
          <Sair>
            <BotaoSair onClick={() => navigate("/bemvindo")}><LogOut className="icone" /></BotaoSair>
          </Sair>
        </Icons>
      </Header>

      <main className="p-5">
        <Title>Notificações ✨</Title>
        <div className="filter-section">
          <MarkAsReadButton onClick={marcarTodasComoLidas}>
            Marcar todas como lidas
          </MarkAsReadButton>

          <div className="filter-container">
            <label htmlFor="filtro">Filtrar por tipo 🧼:</label>
            <select
              id="filtro"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            >
              {Object.entries(tipos).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        <NotificationContainer>
          {todasNotificacoesVazias ? (
            <div className="text-center mt-10 opacity-80">
              <img src="/img/vazio.png" alt="Sem notificações" className="w-24 mx-auto" />
              <p className="mt-2">✨ Você está por dentro de tudo! Assim que houver novidades, a gente te avisa por aqui 💖</p>
            </div>
          ) : (
            <>
              {renderCategoria("Hoje", notifications.hoje)}
              {renderCategoria("Essa Semana", notifications.semana)}
            </>
          )}
        </NotificationContainer>

        <div className="text-center mt-6">
          <ClearAllButton onClick={() => setNotifications({ hoje: [], semana: [] })}>Limpar tudo</ClearAllButton>
        </div>
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

export default NotificacoesPerfil;
