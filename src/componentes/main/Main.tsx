import { useState } from 'react'

import './Main.css'
import Gabriela from "..//img/gabriela.jpeg"
//import Gabrielona from "..//img/gabrielona.jpeg"
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
              sinopse:"Plataforma online com todos os filmes da Barbie, desenvolvido com o auxílio do professor Guilherme Terenciani. Uma curiosidade: o site da Barbie foi utilizado como base para a produção desse.",
              link: "Acesse aqui",
              imagem: "/barbie.png"
       },
        {
              id: 2,
              titulo:'NAVITRINE',
              sinopse:"Plataforma online de exposição de produtos das lojas do comércio de moda e vestuário de Naviraí. Projeto desenvolvido em colaboração com meus colegas de turma: Camila Morais, Ellen Pinheiro e Pedro Ribeiro.",
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
              titulo:'CALENGA',
              sinopse:"Plataforma onde pessoas com conhecimentos em diversos assuntos podem publicar seus tutoriais, para que outras possam aprender e começar a fazer a sua própria renda. Conteúdos disponibilizados de moda, estética, artesanato, edição e muito mais.",
              link: "Acesse aqui",
              imagem: "/calenga.png"
       },
      {
              id: 5,
              titulo:'GAVECH',
              sinopse:"Plataforma de loja online de moda de grife. Projeto desenvolvido em parceria com os alunos: Camila Morais, Ellen Pinheiro e Vitor Michelotto.",
              link: "Acesse aqui",
              imagem: "/gavech.png"
       },
       {
              id: 6,
              titulo:'Aroma de Café',
              sinopse:"Plataforma para exposição, compra e venda de produtos da padaria Aroma de Café.",
              link: "Acesse aqui",
              imagem: "/cafe.png"
       },
       {
              id: 7,
              titulo:'Previsão de Produtividade de Soja no MS por Aprendizagem de Máquina',
              sinopse:"Artigo científico traduzido para o inglês publicado na revista Springer. Utilizado como TCC. Premiado na FETECMS 2022 (2º) em Ciências Agrárias. Orientador: Guilherme Botega Torsoni. Coorientador: Lucas Aparecido.",
              link: "Acesse aqui",
              imagem: "/soja.png"
       },
       {
              id: 8,
              titulo:'Caracterização do clima do MS com dados do CMIP6.',
              sinopse:"Artigo científico em andamento. Orientador: Guilherme Botega Torsoni. Coorientador: Lucas Aparecido.",
              link: "Acesse aqui",
              imagem: "/soja.png"
       }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    
    return(
    <>

<div className="geral"> 
       
<div className="bloco1">
               <div className="main-content">
                   <div className="text-gabriela">
                       <div className="texto">
                       <h1>Olá! Muito prazer, eu sou a Gabriela.</h1>
                       <p className="sinopse">Me chamo Gabriela Marins dos Santos. Atualmente, sou estudante do 3º ano do Técnico em Informática
                       para Internet do IFMS Campus Naviraí. Ao longo da minha trajetória acadêmica, desenvolvi diversos projetos que incluem interface gráfica,
                       programação e escrita científica. Adoro essa área e penso em levar adiante na minha vida. Nesse site, você poderá ter acesso ao meu portifólio,
                       que conta com os principais conteúdos produzidos por mim até aqui. Espero que gostem. Abraços!
                       <br></br><br></br>Continue aqui para saber mais!</p>
                       </div>
                       {<div className="campopesquisa"> 
                     <div id="divBusca">
                            <input type="text" className="botao_pesquisa" placeholder="O que deseja encontrar?" onChange={TrataTexto}/>
                            <button className="divBusca"><img src={lupa}></img></button>
                    </div>
              </div>}
                     
                   </div>
                   <img src={Gabriela} alt=""></img>
            </div></div></div>

        <div className='resultados'>
        <h1 className="titulo_projeto">Projetos realizados por mim:</h1>
            {(texto)?<p>Resultados para: {texto}</p>:""}
        </div>
           
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
    
     


     </>
    )
}
