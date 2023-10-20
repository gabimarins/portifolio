import { useState } from 'react'

import contatoimg from '../componentes/img/contato.png';
import './Contato.css'

 function Contato(){
   const [textoC, setTextoC]=useState("")

    function TrataTextoC(e:React.ChangeEvent<HTMLInputElement>){
        setTextoC(e.target.value)
    }
  
  return(

  <section className="campopesquisafooter">

    <img src={contatoimg}></img>
  <div className="cadastrofooter">

      <h1 className="h1footer">Entre em contato comigo!</h1>
      
      <input className="inputfooter nome" type="text" placeholder="Nome:" onChange={TrataTextoC}/>
      <input className="inputfooter email" type="text" placeholder="Email para contato:" onChange={TrataTextoC}/>
      <input className="inputfooter email" type="tel" placeholder="Número para contato:" onChange={TrataTextoC}/>
      <input className="inputfooter mensagem" type="text" placeholder="Deixe sua mensagem:" onChange={TrataTextoC}/>
      <button className="buttonfooter botaoenvio">Enviar mensagem</button>

        <div className="Cdigitado">
          {textoC && <p>Dados informados: {textoC}</p>}
       </div>
    </div>
    </section>



  )
}

export default Contato