import s from './inicio.module.scss'
import balança from '../../assets/balança.png'
import comunidade from '../../assets/comunidade.png'
import lendoLivro from '../../assets/lendoLivro.png'
import transformar from '../../assets/transformar.png'

export default function Inicio (){
    return (
       <main>
        <section className={s.primeiraSessaoInicio}>
            <h2>Venha Fazer Parte Da Maior Rede De Doação</h2>
        </section>

        <section className={s.porqueDoarSection}>
            <h2>Por que Devo Doar?</h2>
        <section className={s.containerCards}>
            <section>
                <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                <img src={comunidade} alt="Imagem ilustrando círculo social de 4 pessoas." />
            </section>
            <section>
                <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                <img src={lendoLivro} alt="Imagem ilustrando pessoa lendo." />
            </section>
            <section>
                <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                <img src={transformar} alt="Imagem ilustrando 6 pessoas transformando o mundo." />
            </section>
            <section>
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                <img src={balança} alt="Imagem ilustrando uma balança que representa igualdade." />
            </section>
            </section>
        </section>
       </main>
    )
}