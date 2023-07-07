import './Colaborador.css'

// desestruturar, deixando sem o props
// passando um objeto com o nomes dos objetos que deseja usar, similar ao props
const Colaborador = ({nome, cargo, imagem, corDeFundo}) =>{
    return(
        <div className='colaborador'>
            {/* objeto   {{variavel}} */}
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador