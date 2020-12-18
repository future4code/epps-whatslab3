import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import userEvent from '@testing-library/user-event';


class App extends React.Component {

  state = {
    mensagens: [],
    inputNomeUsuario: "",
    InputMensagemUsuario: "",
    idMensagem: 0,
  }
  onChangeInputUsuario = event => {
    this.setState({ inputNomeUsuario: event.target.value })
    console.log(event.target.value);
  }

  onChangeMensagem = event => {
    this.setState({ inputMensagemUsuario: event.target.value })
    console.log(event.target.value);
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario

    }

    const MensagemNova = [...this.state.mensagens, novaMensagem]
    this.setState({
      mensagens: MensagemNova,
    })
    console.log(this.state.mensagens);

  
    // const id = this.state.idMensagem
    // id +=1
    // console.log(id)
    // this.setState({ idMensagem: mensagemId })
    this.limpar()
  }

  limpar = () => {
    this.setState({ inputMensagemUsuario: "", inputNomeUsuario: '' })
  }

  onKeyDownInput = event => {
    if (event.key === "Enter") {
      console.log(`tecla: ${event.key}`);
      this.adicionarMensagem()
    }
  }

  // apagarMensagem = () => {
  //   console.log('Apagar mensagem')
  // }

  //tentar depois



  render() {
    const listaMensagem = this.state.mensagens.map((mensagem) => {
      return (
        <div id={mensagem.idMensagem} >
          <p><strong>{mensagem.nomeUsuario}:</strong> {mensagem.mensagemUsuario} {mensagem.idMensagem}</p>

        </div>
      )
    })

    return (
      <div onKeyDown={this.onKeyDownInput} className="Pai">
        <div className="quadrado">
          <div className="containerMensagem">{listaMensagem}</div>

        </div>
        <div className="inputs">
          <input className="Usuario"
            placeholder="Usuario"
            value={this.state.inputNomeUsuario}

            onChange={this.onChangeInputUsuario}
          />
          <input className="Mensagem"
            placeholder="mensagem"
            onChange={this.onChangeMensagem}
            value={this.state.inputMensagemUsuario}
          />

          <button onClick={this.adicionarMensagem}>Enviar</button>
        </div>


      </div>
    );
  }

}

export default App;
