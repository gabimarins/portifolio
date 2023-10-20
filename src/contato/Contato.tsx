import { useState } from 'react'

import contatoimg from '../componentes/img/contato.png';
import './Contato.css'

 function Contato(){
   const [Nome, setNome]=useState("")
   const [Email, setEmail]=useState("")
   const [Numero, setNumero]=useState("")


    // function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
    //     setNome(e.target.value)
    //     setEmail(e.target.value)
    //     setNumero(e.target.value)
    // }
  
  return(

  <section className="campopesquisafooter">

    <img src={contatoimg}></img>
  <div className="cadastrofooter">

      <h1 className="h1footer">Entre em contato comigo!</h1>
      
      <input className="inputfooter nome" type="text" placeholder="Nome:" onChange={(e) => setNome(e.target.value)}/>
      <input className="inputfooter email" type="text" placeholder="Email para contato:" onChange={(e) => setEmail(e.target.value)}/>
      <input className="inputfooter email" type="tel" placeholder="Número para contato:" onChange={(e) => setNumero(e.target.value)}/>
      <input className="inputfooter mensagem" type="text" placeholder="Deixe sua mensagem:"/>
      <button className="buttonfooter botaoenvio">Enviar mensagem</button>

        <div className="Cdigitado">
          {Nome && <p>Dados informados: <br/><br/> Nome:{Nome}</p>}
          {Email && <p>Email:{Email}</p>}
          {Numero && <p>Número: {Numero}</p>}
       </div>
    </div>
    </section>



  )
}

export default Contato