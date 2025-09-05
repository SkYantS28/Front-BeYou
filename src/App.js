import React from 'react';
import { Routes, Route } from "react-router-dom";
import BemVindo from './bemvindo'; 
import Cadastro from "./Cadastro";
import Cadastroloja from './Cadastroloja';
import Carrinho from "./Carrinho";
import ConfiguracaoPerfil from './configuracao_perfil';
import FAvoritosPerfil from './FAvoritos_perfil';
import Login from "./login";
import Loginloja from './loginloja';
import MeuPerfil from './MeuPerfil'
import NotificacoesPerfil from './notificacoes_perfil'; 
import Inicial from "./PaginaInicial"; 
import SearchPage from './Pesquisar';
import DadosPerfil from './DadosPerfil';
import Agendamentos from './Agendamentos';

function App() {
  return (
    <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaInicial" element={<Inicial />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      <Route path="/MeuPerfil" element={<MeuPerfil />} />
      <Route path="/Cadastroloja" element={<Cadastroloja />} />
      <Route path="/loginloja" element={<Loginloja />} />
      <Route path="/notificacoes_perfil" element={<NotificacoesPerfil />} />
      <Route path="/configuracao_perfil" element={<ConfiguracaoPerfil />} />
      <Route path="/FAvoritos_perfil" element={<FAvoritosPerfil />} />
      <Route path="/bemvindo" element={<BemVindo />} />
      <Route path="/Pesquisar" element={<SearchPage />} />
      <Route path="/dadosperfil" element={<DadosPerfil />} />
      <Route path="/Agendamentos" element={<Agendamentos />} />

    </Routes>
  );
}

export default App;