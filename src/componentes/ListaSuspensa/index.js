import './ListaSuspensa.css'

const ListaSuspensa= (props) =>{
    // map tranform a lista e devolve, diferente do foreach que devolve os valores
    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {/* deixar por padrao a escolha do time em branco */}
                <option value=""></option>
                {/* pra cada item que recebe como parametro será imprimido como option */}
                {/* mesma resultado qeu escrever abrincom chaves e com um return */}
                {/* cada key tem o nome do item, facilitando a renderização do react e evitando um erro, mesmo que não um erro blocante*/}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa