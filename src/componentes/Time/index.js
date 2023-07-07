import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) =>{

    const css = {backgroundColor: props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    return(
        // variavel { {objeto}  }
        // se não tiver nenhuma card cadastrado ele não mostrará nenhum time na tela
        // podendo usar operador ternario, trocnado o && por ? e colocando o "  : ''  " no final da section
        (props.colaboradores.length > 0) && <section className='time' style={css} >
            <h3 style={borda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                // optei por usar a imagem pois cada url de github é unica, usando o nome poderia haver de ter mais de uma pessoa com a mesma key
                corDeFundo={props.corPrimaria}
                key={colaborador.imagem}
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem} 
                />)}
            </div>

        </section>
    )

}

export default Time