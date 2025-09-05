import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut, Trash2, Heart, Plus, Minus } from "lucide-react";
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
  
    Produtos,
    SelecionarItens,
    LabelContainer,
    Span,
    Preco,
    FinalizarCompra,
    Mensagem,
    Loja,
    CarrinhoImg,
    Title,
    SelecionarLoja,
    Item,
    ItemCheckbox,
    QuantidadeContainer,
    BotaoQuantidade,
    IconeLixeira,
    IconeFavorito,
    ItemInfo,
    ItemControles,
  
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
} from "./components/carrinhoestrutura";

function Carrinho() {
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

    // controla o checkbox "Selecionar todos"
    const [selecionarTodos, setSelecionarTodos] = useState(false);
    
    // armazenar as lojas e seus respectivos itens
    const [lojas, setLojas] = useState([
        {
            nome: "Bellus Esmaltaria",
            selecionada: false,
            itens: [
                { nome: "Esmalte em Gel - Preto", preco: 10, selecionado: false, quantidade: 1, favorito: false, imagem: "/img/esmalte_preto.webp" },
                { nome: "Esmalte em Gel - Azul", preco: 10, selecionado: false, quantidade: 1, favorito: false, imagem: "/img/esmalte_azul.webp" },
            ],
        },
        {
            nome: "Marcia Travessoni",
            selecionada: false,
            itens: [{ nome: "Creme de Pentear - Elseve", preco: 30, selecionado: false, quantidade: 1, favorito: false, imagem: "/img/creme_pentear.jpeg" }],
        },
        {
            nome: "Monisatti",
            selecionada: false,
            itens: [{ nome: "Máscara Capilar - Eudora", preco: 75, selecionado: false, quantidade: 1, favorito: false, imagem: "/img/mascara_capilar.jpeg" }],
        },
    ]);

    // selecionar ou desmarcar todos os itens
    const handleSelecionarTodos = () => {
        const novoEstado = !selecionarTodos;
        setSelecionarTodos(novoEstado);
        setLojas(lojas.map(loja => ({
            ...loja,
            selecionada: novoEstado,
            itens: loja.itens.map(item => ({ ...item, selecionado: novoEstado }))
        })));
    };

    // exibe a mensagem de favorito
    const [mensagemFavorito, setMensagemFavorito] = useState("");

    // marca um item como favorito e exibe a mensagem por 2 segundos
    const handleFavoritar = (lojaIndex, itemIndex) => {
        const novasLojas = [...lojas];
        const item = novasLojas[lojaIndex].itens[itemIndex];
    
        item.favorito = !item.favorito;
        setLojas(novasLojas);
    
        if (item.favorito) {
            setMensagemFavorito("Adicionado aos favoritos");
        } else {
            setMensagemFavorito("Removido dos favoritos");
        }
    
        setTimeout(() => setMensagemFavorito(""), 2000);
    };  

    // selecionar ou desmarcar uma loja inteira
    const handleSelecionarLoja = (index) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[index].selecionada = !novasLojas[index].selecionada;
            novasLojas[index].itens = novasLojas[index].itens.map(item => ({
                ...item,
                selecionado: novasLojas[index].selecionada,
            }));
            return novasLojas;
        });
    };

    const handleSelecionarItem = (lojaIndex, itemIndex) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[lojaIndex].itens[itemIndex].selecionado = !novasLojas[lojaIndex].itens[itemIndex].selecionado;
            novasLojas[lojaIndex].selecionada = novasLojas[lojaIndex].itens.every(item => item.selecionado);
            setSelecionarTodos(novasLojas.every(loja => loja.selecionada));
            return novasLojas;
        });
    };

    // selecionar ou desmarcar um item específico de uma loja
    const handleQuantidade = (lojaIndex, itemIndex, operacao) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            const item = novasLojas[lojaIndex].itens[itemIndex];
            if (operacao === "+" && item.quantidade < 10) item.quantidade++;
            if (operacao === "-" && item.quantidade > 1) item.quantidade--;
            return novasLojas;
        });
    };

    // deletar um item da lista
    const handleDeletarItem = (lojaIndex, itemIndex) => {
        setLojas(prev => {
            const novasLojas = [...prev];
            novasLojas[lojaIndex].itens.splice(itemIndex, 1);
            return novasLojas;
        });
    };

    // calcular o preço total dos itens selecionados
    const calcularPrecoTotal = () => {
        return lojas.reduce((total, loja) => {
            return total + loja.itens.reduce((subTotal, item) => subTotal + (item.selecionado ? item.preco * item.quantidade : 0), 0);
        }, 0);
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
                    <Produtos>
                    <SelecionarItens>
                        <input type="checkbox" id="concordo" checked={selecionarTodos} onChange={handleSelecionarTodos} />
                        <LabelContainer>
                            <Span>{selecionarTodos ? 'Desmarcar tudo' : 'Selecionar tudo'}</Span>
                            <Preco>R${calcularPrecoTotal()},00</Preco>
                            <FinalizarCompra>Continuar</FinalizarCompra>
                        </LabelContainer>
                    </SelecionarItens>
                    {mensagemFavorito && <Mensagem>{mensagemFavorito}</Mensagem>}
                    {lojas.map((loja, lojaIndex) => (
                        <Loja key={lojaIndex}>
                            <CarrinhoImg src="/img/casinha.jpg" / >
                            <Title>{loja.nome}</Title>
                            <SelecionarLoja type="checkbox" checked={loja.selecionada} onChange={() => handleSelecionarLoja(lojaIndex)} />
                            <Span>{loja.selecionada ? 'Desmarcar Tudo' : 'Selecionar Tudo'}</Span>
                            {loja.itens.map((item, itemIndex) => (

                                <Item key={itemIndex}>
                                    
                                    <ItemInfo>
                                        <img src={item.imagem} alt={item.nome} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                        
                                        <ItemCheckbox type="checkbox" checked={item.selecionado} onChange={() => handleSelecionarItem(lojaIndex, itemIndex)} />
                                        {item.nome} (R${item.preco},00)
                                    </ItemInfo>
                                    
                                    <ItemControles>
                                        <QuantidadeContainer>

                                                <BotaoQuantidade onClick={() => handleQuantidade(lojaIndex, itemIndex, "-")}>
                                                    <Minus size={16} strokeWidth={3} />
                                                </BotaoQuantidade>
                                                {item.quantidade}
                                                
                                                <BotaoQuantidade onClick={() => handleQuantidade(lojaIndex, itemIndex, "+")}>
                                                <Plus size={16} strokeWidth={3} />
                                                </BotaoQuantidade>

                                            </QuantidadeContainer>

                                            <IconeLixeira onClick={() => handleDeletarItem(lojaIndex, itemIndex)}><Trash2 / ></IconeLixeira>
                                            
                                            <IconeFavorito
                                                onClick={() => handleFavoritar(lojaIndex, itemIndex)}
                                                style={{ color: item.favorito ? 'hotpink' : '#6c4539' }}
                                            >
                                                <Heart fill={item.favorito ? 'hotpink' : 'none'} />
                                                </IconeFavorito>
                                        </ItemControles>
                                </Item>
                            ))}
                        </Loja>
                    ))}
                    </Produtos>
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


export default Carrinho;
