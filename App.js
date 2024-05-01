import React from 'react';
import { NativeRouter, Route } from 'expo-router';
import Cadastro from './app/components/Cadastro';
import EsqueceuSenha from './app/components/EsqueceuSenha';
import LoginScreen from './app/components/LoginScreen';
import inicio from './app/inicio';
const App = () => {
  return (
    <NativeRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/esqueceuSenha" component={EsqueceuSenha} />
      <Route path="/inicio" component={inicio} />
    </NativeRouter>
  );
};

export default App;
