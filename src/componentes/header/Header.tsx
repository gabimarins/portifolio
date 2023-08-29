import './Header.css'
import Link from './../link/Link'
import logogabi from './../img/logo.png';

function Header(){
    return(
        <header>
            <div className="logogabi">
            <img className="logo" src={logogabi} alt="Logo do Site"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Início'/>
                    </li>
                    <li>
                        <Link texto='Portfólio'/>
                    </li>
                    <li>
                        <Link texto='Avaliações'/>
                    </li>
                    <li>
                        <Link texto='Contatos'/>
                    </li>
                    <li>
                        <Link texto='|'/>
                    </li>
                    <li>
                        <Link texto='Saber mais'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header