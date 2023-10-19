import React, { useState } from 'react';
import contato from '../componentes/img/contato.png';
import './Contato.css';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <section className="campopesquisafooter">
      <img src={contato} alt="Imagem de Contato" />
      <div className="cadastrofooter">
        <h1 className="h1footer">Entre em contato comigo!</h1>

        <input
          className="inputfooter nome"
          type="text"
          placeholder="Nome:"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="inputfooter email"
          type="text"
          placeholder="Email para contato:"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputfooter email"
          type="tel"
          placeholder="Número para contato:"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <input
          className="inputfooter mensagem"
          type="text"
          placeholder="Deixe sua mensagem:"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button className="buttonfooter botaoenvio">Enviar mensagem</button>

        <div className="Cdigitado">
          <p>Dados informados:</p>
          <p>Nome: {nome}</p>
          <p>Email: {email}</p>
          <p>Número: {numero}</p>
          <p>Mensagem: {mensagem}</p>
        </div>
      </div>
    </section>
  );
}

export default Contato;
