//import { useState } from 'react'

import contato from '../componentes/img/contato.png';
import './Contato.css'

 function Contato(){
  return(

  <section className="campopesquisafooter">

    <img src={contato}></img>
  <div className="cadastrofooter">

      <h1 className="h1footer">Entre em contato comigo!</h1>
      
 
      
      <input className="inputfooter nome" type="text" placeholder="Nome:"/>
      <input className="inputfooter email" type="text" placeholder="Email para contato:"/>
      <input className="inputfooter email" type="tel" placeholder="Número para contato:"/>
      <input className="inputfooter mensagem" type="text" placeholder="Deixe sua mensagem:"/>
      <button className="buttonfooter botaoenvio">Enviar mensagem</button>
      
    </div>
    </section>



  )
}

export default Contato