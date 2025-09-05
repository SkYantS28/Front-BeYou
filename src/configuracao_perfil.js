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

    ConfiguracaoContainer,
    Opcoes,
    Titulo,
    TituloOpcoes,
    Descricao,
    OpcaoIdioma,
    TextoProblema,
    BotaoEnviar,
  
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
} from "./components/configuracaoestrutura";

function MeuPerfil() {
    const handleLogout = () => {
        navigate("/login"); 
      };
  
    // linkar paginas
    const navigate = useNavigate(); 
  
    // levar ate a pagina inicial
    const reloadPage = (event) => {
        event.preventDefault();
        navigate('/PaginaInicial');
    };

    const [itemAtivo, setItemAtivo] = useState(null);

    return (
        <Background>
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
                <ConfiguracaoContainer>
                    <Titulo>Configurações</Titulo>
                    <TermosCondicoes ativo={itemAtivo === "termos"} setItemAtivo={() => setItemAtivo(itemAtivo === "termos" ? null : "termos")} />
                    <PoliticaPrivacidade ativo={itemAtivo === "privacidade"} setItemAtivo={() => setItemAtivo(itemAtivo === "privacidade" ? null : "privacidade")} />
                    <Sobre ativo={itemAtivo === "sobre"} setItemAtivo={() => setItemAtivo(itemAtivo === "sobre" ? null : "sobre")} />
                    <PerguntasFrequentes ativo={itemAtivo === "faq"} setItemAtivo={() => setItemAtivo(itemAtivo === "faq" ? null : "faq")} />
                    <Idiomas ativo={itemAtivo === "idiomas"} setItemAtivo={() => setItemAtivo(itemAtivo === "idiomas" ? null : "idiomas")} />
                    <ConfiguracaoNotificacao ativo={itemAtivo === "notificacoes"} setItemAtivo={() => setItemAtivo(itemAtivo === "notificacoes" ? null : "notificacoes")} />
                    <RelatarProblema ativo={itemAtivo === "problema"} setItemAtivo={() => setItemAtivo(itemAtivo === "problema" ? null : "problema")} />
                </ConfiguracaoContainer>
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

function TermosCondicoes({ ativo, setItemAtivo }) {
    return (
        <Opcoes onClick={setItemAtivo}>
            <TituloOpcoes>Termos e Condições</TituloOpcoes>

            <Descricao visivel={ativo}>

            <b>Bem-vindo ao BeYou!</b> 

            Antes de utilizar nossos serviços, é essencial que você leia e compreenda nossos <b>Termos e Condições</b>. Este documento estabelece as diretrizes para o uso da plataforma, garantindo uma experiência segura e transparente para todos os usuários.<br /><br />

            Nosso aplicativo tem como objetivo conectar clientes a salões de beleza de maneira simples e eficiente, permitindo que você encontre e agende serviços próximos de sua localização. Ao acessar e utilizar nossa plataforma, você concorda com as regras estabelecidas, incluindo:<br /><br />

            <b>📌 Cadastro e Responsabilidade do Usuário</b> – Para utilizar alguns dos recursos do aplicativo, pode ser necessário criar uma conta e fornecer informações pessoais. Você é responsável pela veracidade dos dados informados e pela segurança de suas credenciais de acesso.<br /><br />

            <b>🔗 Funcionamento do Aplicativo</b> – A plataforma atua como intermediadora entre clientes e salões de beleza, mas não se responsabiliza diretamente pelos serviços prestados pelos estabelecimentos cadastrados.<br /><br />

            <b>💳 Pagamentos e Cancelamentos</b> – Dependendo das funcionalidades disponíveis, o aplicativo pode permitir o pagamento antecipado de serviços. Informações sobre reembolsos, cancelamentos e taxas serão descritas nesta seção.<br /><br />

            <b>⚖️ Conduta do Usuário</b> – O uso da plataforma deve ser feito de maneira ética e respeitosa. Qualquer comportamento abusivo, fraudulento ou que viole nossas diretrizes pode resultar na suspensão da conta.<br /><br />

            <b>📢 Alterações nos Termos</b> – Podemos atualizar os Termos e Condições periodicamente para aprimorar nossa plataforma e atender a requisitos legais. Sempre notificaremos os usuários sobre mudanças relevantes.<br /><br />

            Caso tenha dúvidas ou precise de mais informações, consulte o documento completo de <b>Termos e Condições</b> diretamente no aplicativo ou entre em contato com nossa equipe de suporte.
            </Descricao>
        </Opcoes>
    );
}

function PoliticaPrivacidade({ ativo, setItemAtivo }) {
    return (
        <Opcoes onClick={setItemAtivo}>
            <TituloOpcoes>Politica de Privacidade</TituloOpcoes>

            <Descricao visivel={ativo}>
            A sua privacidade é uma de nossas prioridades. No <b>BeYou</b>, garantimos que seus dados pessoais sejam tratados com responsabilidade e transparência. Nossa <b>Política de Privacidade</b> detalha como coletamos, utilizamos, armazenamos e protegemos suas informações.<br /><br />

            <b>1. Coleta de Informações</b><br />
            Coletamos dados essenciais para o funcionamento da plataforma, incluindo:<br /><br />

            <b>Informações de Cadastro:</b> Nome, e-mail, telefone e outras informações fornecidas durante a criação da conta.<br />
            <b>Localização:</b> Para facilitar a busca por salões próximos, podemos solicitar permissão para acessar sua localização.<br />
            <b>Histórico de Uso:</b> Registramos suas interações com o aplicativo, como serviços agendados, avaliações feitas e preferências selecionadas.<br /><br />

            <b>2. Uso dos Dados</b><br />
            Seus dados são utilizados para:<br /><br />

            ✔️ Personalizar sua experiência, recomendando salões e serviços que possam te interessar.<br />
            ✔️ Melhorar o funcionamento do aplicativo com base no comportamento dos usuários.<br />
            ✔️ Garantir a segurança da plataforma e evitar fraudes.<br />
            ✔️ Enviar notificações sobre promoções, novidades e atualizações (caso você autorize).<br /><br />

            <b>3. Compartilhamento de Informações</b><br />
            O <b>BeYou</b> não vende ou compartilha seus dados pessoais com terceiros sem sua permissão. No entanto, algumas informações podem ser compartilhadas com os salões de beleza cadastrados quando você agenda um serviço, garantindo que sua reserva seja processada corretamente.<br /><br />

            <b>4. Segurança e Armazenamento</b><br />
            Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados, vazamentos ou uso indevido. Seus dados são armazenados em servidores seguros e respeitamos todas as regulamentações de proteção de dados vigentes.<br /><br />

            Caso tenha dúvidas ou queira saber mais detalhes, consulte nossa <b>Política de Privacidade</b> completa no aplicativo.


            </Descricao>
        </Opcoes>
    );
}

function Sobre({ ativo, setItemAtivo }) {
    return (
        <Opcoes onClick={setItemAtivo}>
            <TituloOpcoes>Sobre</TituloOpcoes>
            <Descricao visivel={ativo}>
            O BeYou foi criado com um propósito claro: facilitar a busca e o agendamento de serviços de beleza,<br />
            tornando a experiência dos usuários mais rápida, intuitiva e agradável.<br /><br />
            
            Sabemos que encontrar um salão de beleza de confiança pode ser um desafio, especialmente em cidades grandes onde há diversas opções disponíveis.<br />
            Nosso objetivo é simplificar essa jornada, permitindo que você descubra salões próximos, compare serviços e faça agendamentos com poucos toques na tela.<br /><br />
            
            🔍 <b>Busca Inteligente</b> – Encontre salões de beleza perto de você de forma rápida e prática.<br />
            ⭐ <b>Avaliações e Feedbacks</b> – Consulte opiniões de outros usuários para escolher o melhor serviço.<br />
            📅 <b>Agendamento Online</b> – Marque horários diretamente pelo aplicativo, sem precisar ligar para o salão.<br />
            💰 <b>Promoções e Ofertas</b> – Descubra descontos e pacotes especiais oferecidos pelos estabelecimentos parceiros.<br /><br />
            
            Nosso compromisso é oferecer uma plataforma confiável e acessível para clientes e profissionais da beleza, ajudando a criar conexões e facilitar o acesso a serviços de qualidade.<br /><br />
            
            Seja bem-vindo ao <b>BeYou</b>, a sua nova forma de encontrar salões de beleza com facilidade e praticidade!

            </Descricao>
        </Opcoes>
    );
}

function PerguntasFrequentes({ ativo, setItemAtivo }) {
    return (
        <Opcoes onClick={setItemAtivo}>
            <TituloOpcoes>Perguntas Frequentes (FAQ)</TituloOpcoes>
            <Descricao visivel={ativo}>
            <b>Perguntas Frequentes (FAQ)</b><br /><br />

            <b>1. Como faço para agendar um serviço pelo BeYou?</b><br />
            Basta fazer login, escolher um salão de beleza, selecionar o serviço desejado e o horário disponível. Em poucos cliques, seu agendamento estará confirmado!<br /><br />

            <b>2. Preciso pagar pelo serviço direto no aplicativo?</b><br />
            Alguns salões permitem o pagamento online, enquanto outros preferem o pagamento no local. As opções disponíveis aparecerão no momento do agendamento.<br /><br />

            <b>3. Posso remarcar ou cancelar um agendamento?</b><br />
            Sim! Acesse a área “Meus Agendamentos”, escolha o serviço desejado e selecione “Remarcar” ou “Cancelar”. Lembre-se de verificar a política do salão sobre cancelamentos.<br /><br />

            <b>4. O aplicativo é gratuito?</b><br />
            Sim, o uso do BeYou é totalmente gratuito para os clientes. Você só paga pelos serviços que contratar nos salões.<br /><br />

            <b>5. Como os salões são avaliados?</b><br />
            Após realizar um serviço, você pode deixar sua avaliação e comentário. Isso ajuda outros usuários e também os salões a melhorarem cada vez mais.<br /><br />

            <b>6. Preciso permitir o acesso à minha localização?</b><br />
            Você pode usar o BeYou sem ativar a localização, mas ao permitir o acesso, conseguimos mostrar salões mais próximos e sugestões personalizadas.<br /><br />

            <b>7. Meus dados estão seguros no BeYou?</b><br />
            Sim! Levamos a privacidade muito a sério. Seus dados são protegidos e utilizados apenas conforme descrito em nossa <b>Política de Privacidade</b>.<br /><br />

            <b>8. Posso indicar o BeYou para salões que conheço?</b><br />
            Claro! Incentivamos que você indique o BeYou para salões e profissionais da sua confiança. Assim, a comunidade cresce com qualidade.<br /><br />

            <b>Ficou com mais dúvidas?</b><br />
            Entre em contato com nosso suporte através do aplicativo ou envie um e-mail para <i>suporte@beyou.app</i>. Estamos aqui para te ajudar! 💜

            </Descricao>
        </Opcoes>
    );
}

function Idiomas({ ativo, setItemAtivo }) {
    const [idiomaSelecionado, setIdiomaSelecionado] = useState('pt');

    const trocarIdioma = (idioma) => {
        setIdiomaSelecionado(idioma);
      };
  
    return (
        <Opcoes onClick={setItemAtivo}>
        <TituloOpcoes>Idiomas</TituloOpcoes>
  
        {ativo && (
          <Descricao visivel={ativo}>
            <p><b>Selecione o idioma:</b></p>
  
            <OpcaoIdioma>
                <input
                    type="radio"
                    id="portugues"
                    name="idioma"
                    value="pt"
                    checked={idiomaSelecionado === 'pt'}
                    onChange={() => setIdiomaSelecionado('pt')}
                />
              <label htmlFor="portugues">Português</label>
            </OpcaoIdioma>
  
            <OpcaoIdioma>
                <input
                    type="radio"
                    id="ingles"
                    name="idioma"
                    value="en"
                    checked={idiomaSelecionado === 'en'}
                    onChange={() => setIdiomaSelecionado('en')}
                />
                <label htmlFor="ingles">Inglês</label>
            </OpcaoIdioma>

  
            <br />
            <b>Idioma selecionado:</b> {idiomaSelecionado === 'pt' ? 'Português' : 'Inglês'}
          </Descricao>
        )}
      </Opcoes>
    );
}

function ConfiguracaoNotificacao({ ativo, setItemAtivo }) {
    const [notificacoesAtivas, setNotificacoesAtivas] = useState(true);
    const [tipoNotificacao, setTipoNotificacao] = useState({ email: false, push: true, sistema: true });
    const [frequencia, setFrequencia] = useState('imediato');
    const [notificacoesEspecificas, setNotificacoesEspecificas] = useState({
        mensagens: false,
        atualizacoes: false,
        promocoes: false,
        lembretes: false
    });
    const [horario, setHorario] = useState("08:00 - 22:00");
    const [modoNaoPerturbe, setModoNaoPerturbe] = useState(false);
    const [somVibracao, setSomVibracao] = useState("som");

    const opcoesFrequencia = ['imediato', 'diario', 'semanal'];
    const opcoesSom = ['som', 'vibracao', 'silencioso'];

    return (
            <Opcoes onClick={setItemAtivo}>
                <TituloOpcoes>Configurações de Notificações</TituloOpcoes>
                {ativo && (
                    <Descricao visivel={ativo} onClick={(e) => e.stopPropagation()}>
                        <form className="config-form">
                            <fieldset>
                                <legend>🔔 Notificações Gerais</legend>
                                <label>
                                    <input
                                        type="checkbox" 
                                        checked={notificacoesAtivas} 
                                        onChange={() => setNotificacoesAtivas(!notificacoesAtivas)}
                                    />
                                    Ativar/Desativar
                                </label>
                            </fieldset>

                            <fieldset>
                                <legend>📬 Tipo de Notificação</legend>
                                {Object.entries(tipoNotificacao).map(([tipo, valor]) => (
                                    <label key={tipo}>
                                        <input
                                            type="checkbox"
                                            checked={valor}
                                            onChange={() => setTipoNotificacao({ ...tipoNotificacao, [tipo]: !valor })}
                                        />
                                        {tipo === "email" ? "📩 E-mail" : tipo === "push" ? "📱 Push" : "🔔 Sistema"}
                                    </label>
                                ))}
                            </fieldset>

                            <fieldset>
                                <legend>⏱ Frequência</legend>
                                {opcoesFrequencia.map((opcao) => (
                                    <label key={opcao}>
                                        <input
                                            type="radio"
                                            name="frequencia"
                                            value={opcao}
                                            checked={frequencia === opcao}
                                            onChange={() => setFrequencia(opcao)}
                                        />
                                        {opcao.charAt(0).toUpperCase() + opcao.slice(1)}
                                    </label>
                                ))}
                            </fieldset>

                            <fieldset>
                                <legend>🎯 Notificações Específicas</legend>
                                {Object.keys(notificacoesEspecificas).map((key) => (
                                    <label key={key}>
                                        <input
                                            type="checkbox"
                                            checked={notificacoesEspecificas[key]}
                                            onChange={() =>
                                                setNotificacoesEspecificas({
                                                    ...notificacoesEspecificas,
                                                    [key]: !notificacoesEspecificas[key]
                                                })
                                            }
                                        />
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </label>
                                ))}
                            </fieldset>

                            <fieldset>
                                <legend>🕗 Horário de Notificação</legend>
                                <input
                                    type="text"
                                    value={horario}
                                    onChange={(e) => setHorario(e.target.value)}
                                    className="horario-input"
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={modoNaoPerturbe}
                                        onChange={() => setModoNaoPerturbe(!modoNaoPerturbe)}
                                    />
                                    Ativar Modo Não Perturbe
                                </label>
                            </fieldset>

                            <fieldset>
                                <legend>🎵 Som ou Vibração</legend>
                                {opcoesSom.map((opcao) => (
                                    <label key={opcao}>
                                        <input
                                            type="radio"
                                            name="somVibracao"
                                            value={opcao}
                                            checked={somVibracao === opcao}
                                            onChange={() => setSomVibracao(opcao)}
                                        />
                                        {opcao.charAt(0).toUpperCase() + opcao.slice(1)}
                                    </label>
                                ))}
                            </fieldset>
                        </form>
                    </Descricao>
                )}
            </Opcoes>
    );
}


function RelatarProblema({ ativo, setItemAtivo }) {
    const [texto, setTexto] = useState("");

    return (
        <Opcoes onClick={setItemAtivo}>
            <TituloOpcoes>Relatar Problema</TituloOpcoes>
            <Descricao visivel={ativo} onClick={(e) => e.stopPropagation()}>
                <TextoProblema 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Descreva o problema aqui..."
                />
                <BotaoEnviar onClick={(e) => {
                    e.stopPropagation();
                    alert("Problema enviado!");
                }}>
                    Enviar
                </BotaoEnviar>
            </Descricao>
        </Opcoes>
    );
}

export default MeuPerfil;
