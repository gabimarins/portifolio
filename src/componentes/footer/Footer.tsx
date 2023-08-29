import './Footer.css';
import logogabi from '..//img/logo.png';
import discord from '..//img/discord.png';
import instagram from '..//img/Instagram_icon.png.webp';
import twitter from '..//img/twitter.png';
import facebook from '..//img/facebook.png';
import youtube from '..//img/youtube.png';

export function Footer(){
    return(
        <footer className="rodape">

<div className="conteudorodape">
<div className="sessao1">
            <div className="blocoinicial">
                <img className="logo" src={logogabi} alt="Logo da Barbie"></img>
                <div className="divtexto"><p>Descubra mais sobre a Gabriela, seus gostos, seu cotidiano, seus hobbies, viagens e sonhos!</p></div>
                <div className="redessociais">
                    <img src={discord} alt="discord"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={youtube} alt="youtube"/>
                </div>
            </div>

            <div className="bloco2 bloco">
                <h1>Possíveis faculdades</h1>
                <a href="#">Design</a>
                <a href="#">Arquitetura e Urbanismo</a>
                <a href="#">Ciência da Computação</a>
                <a href="#">Psicologia</a>
                <a href="#">Comunicação e Marketing</a>
            </div>

            <div className="bloco3 bloco">
                <h1>Minhas viagens</h1>
                <a href="#">Fortaleza</a>
                <a href="#">Itapema</a>
                <a href="#">Florianópolis</a>
                <a href="#">Bahia</a>
                <a href="#">Minas Gerais</a>
            </div>

            <div className="bloco4 bloco">
                <h1>Objetivos profissionais</h1>
                <a href="#">Faculdade renomeada</a>
                <a href="#">Sucesso</a>
                <a href="#">Emprego dos sonhos</a>
            </div>

            <div className="bloco5 bloco">
                <h1>Comunidade</h1>
                <a href="#">Entrar em contato</a>
                <a href="#">Cookies e Tecnologia</a>
                <a href="#">Declaração de Acessibilidade</a>
                <a href="#">Cookie Preferences</a>
            </div>
     </div>

<div className="bloco6">
            <div className="blocofinal">
                <div className="direitos"><a>© 2023 Gabriela Marins</a></div>
                <div className="propriedadesfinais"><a>Termos de serviço</a>
                <a>Política de privacidade</a>
                <a className="linha">|</a>
                <a>◍ Português ∇</a>
            </div>
            </div> 
            </div>
</div>
        </footer>
    )
}

export default Footer