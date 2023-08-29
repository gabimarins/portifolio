import './Header.css'
import Link from './../link/Link'
import barbielogo from '..//img/Barbie_Logo.svg.png';

function Header(){
    return(
        <header>
            <div className="fotobarbie">
            <img className="logo" src={barbielogo} alt="Logo da Barbie"></img>
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