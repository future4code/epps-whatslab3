import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  state = {
    mensagens = [
      {
      nomeUsuario:"",
      mensagemUsuario:""
    }],
    inputNomeUsuario ='',
    inputMensagemUsuario =''
  }

  adicionarMensagem(){
    const novaMensagem = {
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario
    }

    const mensagensNovas = this.state.mensagens
    mensagensNovas.push(novaMensagem)

    this.setState({mensagens = mensagensNovas})

  }

  
  
  render(){
    const ImprimeMensagemNaTela = this.state.mensagens.map((mensagem) =>{
      return <div>
        {mensagem.nomeUsuario}
        {mensagem.mensagemUsuario}
      </div>      
    })
    return (
      <div className="App">
        <button onClick={this.adicionarMensagem}></button>
      </div>
    );
  }
  
}

export default App;
