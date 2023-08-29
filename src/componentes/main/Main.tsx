import './Main.css'
import Gabriela from "..//img/gabriela.jpeg"


function Main(){
    return(
        <div className="main-content">
            <div className="text-gabriela">
                <div className="texto">
                <h1>Olá! Muito prazer, eu sou a Gabriela.</h1>
                <p className="sinopse">Me chamo Gabriela Marins dos Santos. Atualmente, sou estudante do 3º ano do Técnico em Informática<br></br>
                para Internet do IFMS Campus Naviraí. Atualmente, estou na correria com os estudos para o Enem. É um momento de muita <br></br>
                ansiedade e reflexão para mim, pois eu ainda não sei que curso fazer. Enfim... eu gosto de ler livros de romance, fantasia<br></br>
                e distopia. Também gosto muito de escrever e ler. Sou bolsista em um projeto da FUNDECT que visa estudar as Mudanças Climáticas <br></br>
                e já tive um projeto publicado sobre aprendizado de máquina. Aqui, irei postar tudo o que é de meu interesse.
                <br></br><br></br>Por hora é só, muito obrigada!</p>
                </div>
                <img src={Gabriela} alt=""></img>
            </div>



            
        </div>




    )
}

export default Main