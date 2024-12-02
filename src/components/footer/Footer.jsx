import facebookLogo from '../../assets/facebookLogo.png'
import twitterLogo from '../../assets/twitterLogo.png'
import youtubeLogo from '../../assets/youtubeLogo.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import s from './footer.module.scss'


export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
            <p>4002-8922</p>
            <nav>
                <a href=""><img src={facebookLogo} alt="Imagem que ilustra a logo do Facebook." /></a>
                <a href=""><img src={twitterLogo} alt="Imagem que ilustra a logo do Twitter." /></a>
                <a href=""><img src={youtubeLogo} alt="Imagem que ilustra a logo do Youtube." /></a>
                <a href=""><img src={linkedinLogo} alt="Imagem que ilustra a logo do Linkedin." /></a>
                <a href=""><img src={instagramLogo} alt="Imagem que ilustra a logo do Instagram." /></a>
            </nav>
            </section>
            <section className={s.copyright}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}