//import imagem from "..//img/barbie.png"
import './Projeto.css'
type ProjetoProps = {
    titulo: string,
    sinopse:string,
    imagem:string

}

function Projeto(props:ProjetoProps){
    return(
        <div className="filme-content">
            {/* o comentario aqui é desse jeito, dentro das
            chaves vc pode usar js, por isso da pra importar
            o "imagem" dentro do componente IMG */}
           <div className="foto_projeto">
                <img className="img-projeto" src={props.imagem} alt=""></img>
           </div> 

            <div className="text-projeto">
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
            </div>

        </div>
    )
}

export default Projeto
