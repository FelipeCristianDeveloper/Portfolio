import { Link } from 'react-router-dom';
import './style.css'

export default function Header () {
    return (
        <header className='header'>
            <div className='navbar'>
                <div className='navbar-logo'>
                    <Link className='logo' to='/'><h1>Portfólio</h1></Link>
                </div>

                <nav className='navbar-links'>
                    <Link className='link' to='/'>Início</Link>
                    <Link className='link' to='/about'>Sobre Mim</Link>
                    <Link className='link' to='/projects'>Projetos</Link>
                    <Link className='link' to='/skills'>Skills</Link>
                </nav>
            </div>
        </header>
    )
}