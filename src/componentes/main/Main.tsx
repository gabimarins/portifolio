import { useState } from 'react'

import './Main.css'
import Gabriela from "..//img/gabriela.jpeg"
import Gabrielona from "..//img/gabrielona.jpeg"
import Projeto from './../projeto/Projeto'
import lupa from '../img/lupa.png';

type ProjetoType = {
       id:number,
       titulo:string,
       sinopse:string,
       link:string,
       imagem:string
}

export default function Main(){
    const [texto, setTexto]=useState("")
    const projetos:ProjetoType[] = [
         {
              id: 1,
              titulo:'SITE DA BARBIE',
              sinopse:"Site com todos os filmes da Barbie, desenvolvido com o auxílio do professor Guilherme Terenciani. Uma curiosidade: o site da Barbie foi utilizado como base para a produção desse.",
              link: "Acesse aqui",
              imagem: "/barbie.png"
       },
        {
              id: 2,
              titulo:'NAVITRINE',
              sinopse:"Plataforma online de exposição de produtos das lojas do comércio de moda e vestuário de Naviraí. Projeto desenvolvido em colaboração com meus companheiros: Camila Morais, Ellen Pinheiro e Pedro Ribeiro.",
              link: "Acesse aqui",
              imagem: "/navitrine.png"
       },
        {
              id: 3,
              titulo:'LÊMAIS',
              sinopse:"Plataforma online de direcionamento à compra e venda de livros. Dividida por categorias e filtros que facilitem a sua vida e instiguem a leitura. Em parceira com a plataforma de streaming Amazon Prime.",
              link: "Acesse aqui",
              imagem: "/lemais.png"
       },
      {
              id: 4,
              titulo:'GAVECH',
              sinopse:"Loja online de moda de grife. Projeto desenvolvido em parceria com os alunos: André Lacerda, Camila Morais, Ellen Pinheiro, Henrique Gavazzoni, Vitor Michelotto.",
              link: "Acesse aqui",
              imagem: "/gavech.png"
       }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    
    return(
    <>
        {
              <div className="campopesquisa"> 
                     <div id="divBusca">
                            <input type="text" className="botao_pesquisa" placeholder="O que deseja?" onChange={TrataTexto}/>
                            <button className="divBusca"><img src={lupa}></img></button>
                    </div>
                    
      <h1 className="titulo_projeto">Meus projetos:</h1>
      {(texto)?<p>Resultados para: {texto}</p>:""}
              </div>
       }
    
    <div className="geral"> <div className="bloco1">
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
            </div></div>
            
        <main className="content-main">
                     {projetos.filter((projeto) => {
                     const textoSemEspacos = texto.replace(/\s/g, ''); 
                     const tituloSemEspacos = projeto.titulo.replace(/\s/g, '');
                     const sinopseSemEspacos = projeto.sinopse.replace(/\s/g, ''); 
                     const tudo = tituloSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo2 = sinopseSemEspacos.toLowerCase().includes(textoSemEspacos.toLowerCase());
                     const tudo3 = tudo || tudo2; 
                     return tudo3;
                     })
                     .map((projeto) => (
                     <Projeto key={projeto.id} titulo={projeto.titulo} sinopse={projeto.sinopse}  link={projeto.link} imagem={projeto.imagem} />
                     ))}
        </main>

        
        <div className="geral">
               
              

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


     </>
    )
}
