import './Footer.css';
import logogabi from '..//img/logo.png';
import instagram from '..//img/Instagram_icon.png.webp';
import facebook from '..//img/facebook.png';
import linkedin from '..//img/linkedin.webp';
import email from '..//img/email.webp';

export function Footer(){
    return(
        <footer className="rodape">

<div className="conteudorodape">
<div className="sessao1">
            <div className="blocoinicial">
                <img className="logo" src={logogabi} alt="Logo da Barbie"></img>
                <div className="divtexto"><p>Descubra mais sobre mim, meus projetos, vida acadêmica e sonhos!</p></div>
                <div className="redessociais">
                    <img src={instagram} alt="instagram"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={linkedin} alt="linkedin"/>
                    <img src={email} alt="email"/>
                </div>
            </div>

            <div className="bloco">
                <h1>Projetos</h1>
                <a href="#">Projetos do Figma</a>
                <a href="#">Projetos do VS Code</a>
                <a href="#">Iniciação Científica</a>
                <a href="#">Projetos de extensão</a>
                <a href="#">Atividades escolares</a>
            </div>

            <div className="bloco3 bloco">
                <h1>Minhas viagens</h1>
                <a href="#">Fortaleza</a>
                <a href="#">Itapema</a>
                <a href="#">Florianópolis</a>
                <a href="#">Bahia</a>
                <a href="#">Minas Gerais</a>
            </div>

            <div className=" bloco">
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