import { useState } from 'react'

import contato from '../componentes/img/contato.png';
import './Contato.css'

 function Contato(){
   const [textoC, setTextoC]=useState("")

    function TrataTextoC(e:React.ChangeEvent<HTMLInputElement>){
        setTextoC(e.target.value)
    }
  
  return(

  <section className="campopesquisafooter">

    <img src={contato}></img>
  <div className="cadastrofooter">

      <h1 className="h1footer">Entre em contato comigo!</h1>
      
      <input className="inputfooter nome" type="text" placeholder="Nome:" onChange={TrataTextoC}/>
      <input className="inputfooter email" type="text" placeholder="Email para contato:" onChange={TrataTextoC}/>
      <input className="inputfooter email" type="tel" placeholder="Número para contato:" onChange={TrataTextoC}/>
      <input className="inputfooter mensagem" type="text" placeholder="Deixe sua mensagem:" onChange={TrataTextoC}/>
      <button className="buttonfooter botaoenvio">Enviar mensagem</button>

       <div className="Cdigitado">
          {textoC && <p>Nome:{textoC}</p>}
       </div>
    </div>
    </section>



  )
}

export default Contato
ChatGPT
O código que você postou é um componente React chamado Contato, que parece estar destinado a lidar com um formulário de contato. No entanto, você deseja que, quando você digitar nos inputs, o que você digitou apareça na parte inferior da página. O código já possui a estrutura básica para fazer isso, usando o estado local com useState para rastrear o texto digitado nos inputs e renderizá-lo na seção com a classe "Cdigitado".

No entanto, há um problema no código que você postou. Todos os seus inputs estão usando a mesma função TrataTextoC para atualizar o estado textoC, o que significa que apenas o último input terá efeito e os outros serão sobrescritos. Para resolver isso, você pode criar uma função separada para cada input e manter um estado diferente para cada um. Além disso, você pode adicionar rótulos (labels) aos inputs para identificá-los.

Aqui está uma versão revisada do seu código:

javascript
Copy code
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
Neste código, criei quatro estados diferentes (um para cada input) e funções de tratamento separadas para cada um. Os valores desses estados são usados para preencher os valores dos inputs e exibir os dados na parte inferior da página conforme o usuário digita. Certifique-se de substituir o código original do seu componente pelo código revisado acima.





