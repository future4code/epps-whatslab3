import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component {
  
  state = {
    mensagens: [
      {
      nomeUsuario:"",
      mensagemUsuario:""
    }],
    inputNomeUsuario :'',
    inputMensagemUsuario :''
  }

  adicionarMensagem(){
    const novaMensagem = {
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario
    }

    const mensagensNovas = this.state.mensagens
    mensagensNovas.push(novaMensagem)

    this.setState({mensagens : mensagensNovas})

  }

  
  
  render(){
     const adicionarMensagem =() =>
    
     return (
      <div className="Pai">
        <div className= "quadrado">

        </div>
        <div className= "inputs">
          <input className="nome"
          placeholder="nome"
          />
           <input className="Mensagem"
          placeholder="mensagem"
          />

          <button onClick="">Enviar</button>
        </div>


      </div>
    );
  }
  
  
}

export default App;
