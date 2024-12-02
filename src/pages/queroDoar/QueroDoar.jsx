import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem ilustrando um livro aberto." />
                    <h2>Informações do Livro</h2>
                </div>
                <input required type="text" name="" id=""  placeholder='Titulo'/>
                <input required type="text" name="" id=""  placeholder='Categoria'/>
                <input required type="text" name="" id=""  placeholder='Autor'/>
                <input required type="text" name="" id=""  placeholder='Link do Livro'/>
                <input required type="submit" value="Doar" className={s.botaoDoar} />
            </form>
        </section>
    )
}