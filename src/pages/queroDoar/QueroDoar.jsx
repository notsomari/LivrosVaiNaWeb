import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }
    
    const capturaImg = (e) =>{
        setImage_url(e.target.value)
    }

    const envioDados = async() =>{

        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://primeira-api-ssli.onrender.com/doar",dadosParaEnviar)
    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem ilustrando um livro aberto." />
                    <h2>Informações do Livro</h2>
                </div>
                <input required type="text" name="" id=""  placeholder='Titulo' onChange={capturaTitulo} />
                <input required type="text" name="" id=""  placeholder='Categoria' onChange={capturaCategoria} />
                <input required type="text" name="" id=""  placeholder='Autor' onChange={capturaAutor} />
                <input required type="text" name="" id=""  placeholder='Link da Imagem' onChange={capturaImg} />
                <input required type="submit" value="Doar" className={s.botaoDoar} onClick={envioDados} />
            </form>
        </section>
    )
}