import './Header.css'
import LinkNav from '../linknav/LinkNav'
import logogabi from './../img/logo.png';

function Header(){
    return(
        <header>
            <div className="logogabi">
            <img className="logo" src={logogabi} alt="Logo do Site"></img>
            </div>
            <nav>
                <ul>
                    <li className="inicio">
                        <LinkNav url="/" texto='Início'/>
                    </li>
                    <li>
                        <LinkNav url="/portfolio" texto='Portfólio'/>
                    </li>
                    <li>
                        <LinkNav url="/avaliacoes" texto='Avaliações'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                    <li>
                        <LinkNav url="/" texto='|'/>
                    </li>
                    <li>
                        <LinkNav url="/sabermais" texto='Saber mais'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header