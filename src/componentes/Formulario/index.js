import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


// não se de ve esquecer de informar na função que há um props
const Formulario = (props) => {
// lista dos nomes dos times
// useState, deve-se aprender bastante sobre ele
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) =>{
        // evitar que o navegador siga o comportamento padrao
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        // ao clicar no botao de cadastrar os espaços para inserir os dados é limpado de forma automotaica e sem recarregar toda a pagina
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                {/* receber parametros baseados nos nomes sem precisar fazer repetir muito o mesmo código com poucas alterações, usando o props */}
                {/* passando o parametro */}
                <CampoTexto 
                obrigatorio={true} 
                label="nome" 
                placeholder="Digite seu nome" 
                valor={nome}
                aoAlterado={valor =>setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label="cargo" 
                placeholder="Digite seu endereço" 
                valor={cargo}
                aoAlterado={valor =>setCargo(valor)}
                />
                <CampoTexto 
                label="imagem" 
                placeholder="Informe o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor =>setImagem(valor)}
                />
                {/* chamnado  const com os times */}
                <ListaSuspensa 
                obrigatorio={true} 
                label="time" 
                itens={props.times} 
                valor={time}
                aoAlterado={valor =>setTime(valor)}
                />
                {/* <Botao texto="Criar Card"  /> */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario