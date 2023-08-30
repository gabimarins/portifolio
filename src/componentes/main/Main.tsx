import './Main.css'
import Gabriela from "..//img/gabriela.jpeg"
import Gabrielona from "..//img/gabrielona.jpeg"


function Main(){
    return(
        <div className="geral">
        <div className="bloco1">
        <div className="main-content">
            <div className="text-gabriela">
                <div className="texto">
                <h1>Olá! Muito prazer, eu sou a Gabriela.</h1>
                <p className="sinopse">Me chamo Gabriela Marins dos Santos. Atualmente, sou estudante do 3º ano do Técnico em Informática<br></br>
                para Internet do IFMS Campus Naviraí. Atualmente, estou na correria com os estudos para o Enem. É um momento de muita <br></br>
                ansiedade e reflexão para mim, pois eu ainda não sei que curso fazer. Enfim... eu gosto de ler livros de romance, fantasia<br></br>
                e distopia. Também gosto muito de escrever e ler. Sou bolsista em um projeto da FUNDECT que visa estudar as Mudanças Climáticas <br></br>
                e já tive um projeto publicado sobre aprendizado de máquina. Aqui, irei postar tudo o que é de meu interesse.
                <br></br><br></br>Continue aqui para saber mais!</p>
                </div>
                <img src={Gabriela} alt=""></img>
            </div>
            </div>

            <div className="bloco2">
        <div className="main-content2">
            <div className="text-gabriela2">
            <img src={Gabrielona} alt=""></img>
                <div className="texto2">
                <h1>Alguns fatos sobre mim...</h1>
                <p className="sinopse2">1 - Eu amo fazer interfaces de sites, seja no figma ou no vs code!<br></br>
                2 - Durante a pandemia, no ano de 2021, li 100 livros! Finalizei o ano com a saga de Percy Jackson.<br></br>
                3 - Amo fazer viagens, especialmente para a praia! <br></br>
                4 - Eu uso óculos e já consegui quebrar os 3 que tive, então atualmente estou sem óculos nenhum... <br></br>
                5 - Sou uma pessoa muito indecisa, desde um look até um curso da faculdade<br></br>
                (Extra) Pedro disse que sou cú doce e recuso todos os contatinhos da vida. 
                <br></br><br></br>Nos tópicos do rodapé você encontra mais informações sobre mim :)</p>
                </div>
                
            </div>
            </div>
            
        </div>
        </div>
        </div>




    )
}

export default Main