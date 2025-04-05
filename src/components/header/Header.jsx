import logoLivro from '../../assets/logoLivro.png'
import lupa from '../../assets/lupa.png'
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'
import s from './header.module.scss'

export default function Header(){
    return(

        <BrowserRouter>
       
        <header>
            <section className={s.logoHeader}>
                <img src={logoLivro} alt="Imagem ilustrativa de um livro aberto sendo folheado, de capa azul." />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link} to='/inicio' >Início</Link></li>
                    <li><Link className={s.link} to='/livrosdoados' >Livros Doados</Link></li>
                    <li><Link className={s.link} to='/querodoar' >Quero Doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraDeBusca}>
                <input type="search" name="" id="" placeholder='O que Você Procura?' />
                <button>
                    <img src={lupa} alt="Imagem de uma lupa." />
                </button>
            </section>
        </header>
        <Routes>
            <Route path='/' element={<Navigate to="/inicio"/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/livrosdoados' element={<LivrosDoados/>} />
            <Route path='/querodoar' element={<QueroDoar/>} />
        </Routes>
        </BrowserRouter>
    )
}