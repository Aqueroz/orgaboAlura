import './botao.css'

const Botao = (props) =>{
    return(
        <button className='botao'>
            {/* similar ao props.texto, mas com a possibilidade de usar uma image mcomo botao */}
            {props.children}
        </button>
    )
}

export default Botao