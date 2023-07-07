//é possivel omitir a extensao do oponente, como o exemplo abaixo onde importa um .js mas não diz que é um .js
import { useState } from 'react';
import Banner from './componentes/Banner';
//deixar apenas a pasta faz o arquivo index ser chamado automaticamente 
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
  },
  {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
  },
  {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
  },
  {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
  },
  {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
  },
  {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
  }  
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) =>{
    // usado para depurar e ver o que acontece linha a linha
    // parar a reproducao e mostrar o que esta acontecendo
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    // todo o conteudo jsx deve ser colocado dentro de uma unica tag, a partir dela adicionar tudo que precisa
    // também é possivel usar o fragment
    // escrevendo <fragment><fragment/> ou <> </> , de forma mais simplficidada
    <div className="App">

      {/* abrir e fechar tag sem precisar passar as duas tags */}
      <Banner />

      {/* elevar o estado, leia mais sobre isso pois não é tão simples de entender */}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {/* a chave é usada para controlar a renderização */}
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      // fazend um filtro onde o nome do time vai definir em qual classe o card será colocado
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
