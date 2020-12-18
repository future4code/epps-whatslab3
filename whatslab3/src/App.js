import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import userEvent from '@testing-library/user-event';


class App extends React.Component {
  
  state = {
    mensagens: [],
    inputNomeUsuario: "",
    InputMensagemUsuario:"",
  }
  onChangeInputUsuario = event =>{
    this.setState({inputNomeUsuario: event.target.value})
    console.log(event.target.value);
  }

  onChangeMensagem = event =>{
    this.setState({inputMensagemUsuario: event.target.value})
    console.log(event.target.value);
  }
  
   adicionarMensagem=()=>{
    const novaMensagem = {
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario
      
    }

    
      


    const MensagemNova = [...this.state.mensagens, novaMensagem]
    this.setState({
      mensagens: MensagemNova,
        })
        console.log(this.state.mensagens);

  

  }

  onKeyDownInput = event =>{
    if(event.key === "Enter"){
      console.log(`tecla: ${event.key}`);
      this.adicionarMensagem()
    }
  }
  
  
  
  render(){
    const listaMensagem = this.state.mensagens.map((mensagem)=>{
      return(
        <div> 
          <p><strong>{mensagem.nomeUsuario}:</strong> {mensagem.mensagemUsuario}</p>
        </div>
      )
    })
      
    return (
      <div onKeyDown={this.onKeyDownInput} className="Pai">
        <div className= "quadrado">
          <div className="containerMensagem">{listaMensagem}</div>

        </div>
        <div className= "inputs">
          <input className="Usuario"
          placeholder="Usuario"

          onChange={this.onChangeInputUsuario}
          />
           <input className="Mensagem"
          placeholder="mensagem"
          onChange={this.onChangeMensagem}
          />

          <button onClick={this.adicionarMensagem}>Enviar</button>
        </div>


      </div>
    );
  }
  
  
}

export default App;
