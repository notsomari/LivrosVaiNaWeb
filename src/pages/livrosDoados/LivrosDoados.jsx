import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function LivrosDoados(){

    
        const [livros,setLivros] = useState([])
        const [loading, setLoading] = useState(true)

    const puxarLivros = async() =>{
        try{
            const resposta = await axios.get("https://primeira-api-ssli.onrender.com/livros")
            setLivros(resposta.data)
        
    }

    catch (error) {
        console.error("Erro ao buscar livros:", error)
    }
    finally {
        setLoading(false)
    }
}

console.log(livros)
    
    useEffect(()=>{
        puxarLivros()
    },[])

    if (loading) {
        return(
            <section className={s.livrosDoadosSection}>
                <h2>Livros Doados</h2>
                <div>
                <p>Carregando Livros Doados...</p>
                </div>
            </section>
        )
    }

    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                {livros.map((item) =>(
                    <section>
                        <img src={item.image_url} alt={`Imagem do livro${item.titulo}`} />
                            <div>
                                <h4>{item.titulo}</h4>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </div>
                    </section>
                ))}
            </section>
        </section>
        
    )
}