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

        try {
            await axios.post("https://primeira-api-ssli.onrender.com/doar",dadosParaEnviar)

            setTitulo('')
            setCategoria('')
            setAutor('')
            setImage_url('')
        }

        catch (error) {
        console.error("Erro ao enviar os dados:", error)
        }
    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem ilustrando um livro aberto." />
                    <h2>Informações do Livro</h2>
                </div>
                <input required type="text" name="" id=""  placeholder='Titulo' value={titulo} onChange={capturaTitulo} />
                <input required type="text" name="" id=""  placeholder='Categoria' value={categoria} onChange={capturaCategoria} />
                <input required type="text" name="" id=""  placeholder='Autor' value={autor} onChange={capturaAutor} />
                <input required type="url" name="" id=""  placeholder='Link da Imagem' value={image_url} onChange={capturaImg} />
                <input required type="submit" value="Doar" className={s.botaoDoar} onClick={envioDados} />
            </form>
        </section>
    )
}