import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
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
  MainWrapper,
  DivSelectWrapper,
  NotifAgenda,
  Notifbut,
  Icons,
  Title,
  CustomCalendar,
  TitleHistorico,
  Historico,
  AgendamentoCard,
  AgendamentoInfo,
  Dot,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Logo,
  Direitos,
  TitleFooter,
  Texto
} from "./components/agendamentosestrutura";




function Agendamento() {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/bemvindo");
  const reloadPage = (event) => {
    event.preventDefault();
    navigate('/PaginaInicial');
  };


  const [agendamentos, setAgendamentos] = useState([
    {
      loja: 'Barbearia Alpha',
      metodo: 'Corte de cabelo',
      data: 'Segunda, 5 de setembro de 2025',
      rua: 'Rua Amaral Peixoto',
      horario: '13:00',
      valor: 'R$50,00',
      avaliar: 70,
    },
    {
      loja: 'Unhas de ouro',
      metodo: 'Manicure',
      data: 'Sexta, 9 de outubro de 2025',
      rua: 'Rua Roberto Silveira',
      horario: '16:00',
      valor: 'R$70,00',
      avaliar: 70,
    }
  ]);




  const [date, setDate] = useState(new Date());
  const [horaAgendamento, setHoraAgendamento] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [lojaSelecionada, setLojaSelecionada] = useState("");
  const [notifications, setNotifications] = useState({ hoje: [] });
  const [editandoId, setEditandoId] = useState(null);


  const lojasPorServico = {
    "Corte de Cabelo": ["Barbearia Alpha", "Studio Look", "HairMaster"],
    "Manicure": ["Unhas de Ouro", "Beauty Nails", "Nail Center", "Top Unhas"],
    "Massagem Relaxante": ["Spa Vida", "Bem-Estar Massagens"],
  };




  const gerarHoras = () => {
    const horas = [];
    for (let h = 8; h < 20; h++) {
      for (let m = 0; m < 60; m += 30) {
        horas.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      }
    }
    return horas;
  };




  const disablePastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };




  const formatarData = (data) => data.toISOString().split("T")[0];




  const handleAgendar = () => {
    if (!horaAgendamento || !servicoSelecionado || !lojaSelecionada) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
 
    const dataString = formatarData(date);
 
    // Verifica duplicidade de agendamento no mesmo horário em qualquer loja
    const existe = notifications.hoje.some((n) =>
      n.data === dataString && n.hora === horaAgendamento // Verifica se já existe um agendamento no mesmo horário, independentemente da loja
    );
 
    if (existe) {
      alert("Você já tem um agendamento para este horário! Por favor, escolha outro horário.");
      return;
    }
 
    const novoAgendamento = {
      id: editandoId || new Date().getTime(),
      tipo: "agendamento",
      icone: "🗓️",
      img: "/img/user1.jpeg",
      titulo: "Agendamento Confirmado",
      text: `Seu horário para ${servicoSelecionado} foi agendado na ${lojaSelecionada} para ${date.toLocaleDateString()} às ${horaAgendamento}.`,
      lida: false,
      data: dataString,
      hora: horaAgendamento,
      servico: servicoSelecionado,
      loja: lojaSelecionada,
    };
 
    setNotifications((prev) => {
      let atualizados = prev.hoje.filter((n) => n.id !== editandoId);
      return { ...prev, hoje: [novoAgendamento, ...atualizados] };
    });
 
    setHoraAgendamento("");
    setServicoSelecionado("");
    setLojaSelecionada("");
    setEditandoId(null);
 
    alert("Agendamento confirmado!");
  };
 




  const handleEditar = (id) => {
    const agendamento = notifications.hoje.find((n) => n.id === id);
    if (agendamento) {
      setDate(new Date(agendamento.data));
      setHoraAgendamento(agendamento.hora);
      setServicoSelecionado(agendamento.servico);
      setLojaSelecionada(agendamento.loja);
      setEditandoId(id);
    }
  };




  const handleCancelar = (id) => {
    if (window.confirm("Deseja cancelar este agendamento?")) {
      setNotifications((prev) => ({
        ...prev,
        hoje: prev.hoje.filter((n) => n.id !== id)
      }));
    }
  };




  const tileContent = ({ date }) => {
    const dateString = formatarData(date);
    return notifications.hoje.some((n) => n.data === dateString) ? <Dot /> : null;
  };




  return (
    <Background>
      {/* Header */}
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
          <Perfil><PerfilLink onClick={() => navigate("/MeuPerfil")}><User className="icone" /></PerfilLink></Perfil>
          <Noticacao><NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}><Bell className="icone" /></NoticacaoLink></Noticacao>
          <Sair><BotaoSair onClick={handleLogout}><LogOut className="icone" /></BotaoSair></Sair>
        </Icons>
      </Header>




      {/* Conteúdo Principal */}
      <MainWrapper>
        <div style={{ textAlign: "center" }}>
          <Title>Agendar Serviço para {date.toLocaleDateString()}</Title>




          <CustomCalendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            tileDisabled={({ date }) => disablePastDates(date)}
          />




          <DivSelectWrapper>
            <div>
              <h3>Selecione o horário desejado</h3>
              <select value={horaAgendamento} onChange={(e) => setHoraAgendamento(e.target.value)}>
                <option value="">Selecione</option>
                {gerarHoras().map((hora) => (
                  <option key={hora} value={hora}>{hora}</option>
                ))}
              </select>
            </div>




            <div>
              <h3>Selecione o serviço que precisa</h3>
              <select value={servicoSelecionado} onChange={(e) => {
                setServicoSelecionado(e.target.value);
                setLojaSelecionada("");
              }}>
                <option value="">Selecione</option>
                {Object.keys(lojasPorServico).map((serv) => (
                  <option key={serv} value={serv}>{serv}</option>
                ))}
              </select>
            </div>




            <div>
              <h3>Escolha sua unidade de atendimento</h3>
              <select value={lojaSelecionada} onChange={(e) => setLojaSelecionada(e.target.value)}>
                <option value="">Selecione</option>
                {servicoSelecionado && lojasPorServico[servicoSelecionado]?.map((loja) => (
                  <option key={loja} value={loja}>{loja}</option>
                ))}
              </select>
            </div>




            <h3>{editandoId ? "Atualizar Agendamento" : "Confirme seu agendamento"}</h3>
            <button onClick={handleAgendar}>
              {editandoId ? "Salvar Alterações" : "Confirmar Agendamento"}
            </button>
          </DivSelectWrapper>
        </div>




        {/* Notificações */}
        <div>
          {notifications.hoje.map((notif) => (
            <NotifAgenda key={notif.id}>
              <p>{notif.icone} {notif.titulo}</p>
              <p>{notif.text}</p>
              <p>{notif.time}</p>
              <div>
                <Notifbut onClick={() => handleEditar(notif.id)}>Editar</Notifbut>
                <Notifbut onClick={() => handleCancelar(notif.id)}>Cancelar</Notifbut>
              </div>
            </NotifAgenda>
          ))}
        </div>


        <TitleHistorico>Histórico de agendamentos</TitleHistorico>
        <Historico>
          {agendamentos.map((item, index) => (
            <AgendamentoCard key={index}>
              <AgendamentoInfo><strong>Loja:</strong> {item.loja}</AgendamentoInfo>
              <AgendamentoInfo><strong>Serviço:</strong> {item.metodo}</AgendamentoInfo>
              <AgendamentoInfo><strong>Data:</strong> {item.data}</AgendamentoInfo>
              <AgendamentoInfo><strong>Horário:</strong> {item.horario}</AgendamentoInfo>
              <AgendamentoInfo><strong>Endereço:</strong> {item.rua}</AgendamentoInfo>
              <AgendamentoInfo><strong>Valor:</strong> {item.valor}</AgendamentoInfo>
              <AgendamentoInfo>
                <strong>Avaliação:</strong>{" "}
                {"⭐".repeat(Math.round(item.avaliar / 20)) + "☆".repeat(5 - Math.round(item.avaliar / 20))}
              </AgendamentoInfo>
            </AgendamentoCard>
          ))}
        </Historico>


      </MainWrapper>




      {/* Rodapé */}
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
            <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default Agendamento;
