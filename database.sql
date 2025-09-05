-- Create database tables for BeYou application

-- Usuario table
CREATE TABLE Usuario (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(200) NOT NULL, 
    nome_social VARCHAR(200) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    genero VARCHAR(10) NOT NULL,
    rg VARCHAR(20) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- PerfilUsuario table
CREATE TABLE PerfilUsuario (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- UsuarioLoja table
CREATE TABLE UsuarioLoja (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(200) NOT NULL, 
    cnpj VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

-- PerfilLoja table
CREATE TABLE PerfilLoja (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuarioloja_id INT,
    FOREIGN KEY (usuarioloja_id) REFERENCES UsuarioLoja(id)
);

-- Servico table
CREATE TABLE Servico (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    loja_id INT,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id)
);

-- Item table
CREATE TABLE Item (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    loja_id INT,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id)
);

-- Carrinho table
CREATE TABLE Carrinho (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    servico_id INT,
    item_id INT,
    usuario_id INT,
    loja_id INT,
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (item_id) REFERENCES Item(id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id)
);

-- Agendamento table
CREATE TABLE Agendamento (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    loja_id INT,
    servico_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);

-- Notificacao table
CREATE TABLE Notificacao (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    loja_id INT,
    servico_id INT,
    item_id INT,
    data_leitura DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

-- Categoria table
CREATE TABLE Categoria (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    loja_id INT,
    servico_id INT,
    item_id INT,
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

-- UsuarioFavoritoLoja table
CREATE TABLE UsuarioFavoritoLoja (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    loja_id INT,
    data_adicao DATETIME,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id)
);

-- UsuarioServicoFavorito table
CREATE TABLE UsuarioServicoFavorito (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    servico_id INT,
    data_adicao DATE,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);

-- LojaCategoria table
CREATE TABLE LojaCategoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    loja_id INT,
    categoria_id INT,
    FOREIGN KEY (loja_id) REFERENCES UsuarioLoja(id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

-- ServicoCategoria table
CREATE TABLE ServicoCategoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    servico_id INT,
    categoria_id INT,
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id)
);

-- UsuarioNotificacao table
CREATE TABLE UsuarioNotificacao (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    usuario_id INT,
    servico_id INT,
    item_id INT,
    data_leitura DATE NOT NULL,
    notificacao_id INT,
    lida BOOLEAN,
    FOREIGN KEY (notificacao_id) REFERENCES Notificacao(id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);

-- LojaNotificacao table
CREATE TABLE LojaNotificacao (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    loja_id INT,
    servico_id INT,
    item_id INT,
    data_leitura DATE NOT NULL,
    notificacao_id INT,
    lida BOOLEAN,
    FOREIGN KEY (notificacao_id) REFERENCES Notificacao(id),
    FOREIGN KEY (loja_id) REFERENCES PerfilLoja(id),
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
); 