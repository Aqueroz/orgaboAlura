import './CampoTexto.css'
//funcao dentro de uma const para ficar mais organizado e de maior entendimento, bastante usado em empresas

const CampoTexto = (props) =>{
    const placeholderModificada = `${props.placeholder}`
    // let valor = 'teste
    //hook do estado
    //valor e uma forma de definir o valor
    // const [valor, setValor] = useState('aoba')
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
        // setValor(evento.target.value)
        // console.log(valor)
    }
    return(
        <div className='campo-texto'>
            {/* imprimir o valor que esta sendo retornado pelo pros */}
            <label>
                {props.label}
            </label>
            {/* é possivel colocar dentro de uma const, ficando algo como 
            const placeholderModificada = `${props.placeholder}...`
            fazendo apenas ser necessario chamar a constante onde está o comando para o props no placeholder 
            podendo também ser usado apenas o 
            `${props.placeholder}...`*/}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto