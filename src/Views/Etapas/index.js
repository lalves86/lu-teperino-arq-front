import React, {Component} from 'react';
import Etapa from './Etapa';
import EtapasData from '../../assets/ListadeEtapas';
import api from '../../services/api'

class Etapas extends Component {
  constructor () {
    super()
    this.state = {
      ListadeEtapas: []
    }
    this.incrementConclusion = this.incrementConclusion.bind(this);
    this.decrementConclusion = this.decrementConclusion.bind(this);
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    const response = await api.get('/etapas');

    this.setState({ ListadeEtapas: response.data });
  }

   incrementConclusion(id) {
    this.setState(prevState => {
      const updatedList = prevState.ListadeEtapas.map(Etapa => {
        if(Etapa._id === id && Etapa.concluido < 100) {
          return {
            ...Etapa,
            concluido: Etapa.concluido + 5
        }
      }
      return Etapa;
    })
      return {
        ListadeEtapas: updatedList
      }
    })
  }

   decrementConclusion(id) {
    this.setState(prevState => {
      const updatedList = prevState.ListadeEtapas.map(Etapa => {
        if(Etapa._id === id && Etapa.concluido > 0) {
          return {
            ...Etapa,
            concluido: Etapa.concluido - 5
        }
      }
      return Etapa;
    })
      return {
        ListadeEtapas: updatedList
      }
    })
  }

  
  render() {
    const EtapaItem = this.state.ListadeEtapas.map(item => {
    return <Etapa 
      key={item._id} 
      data={item}
      increment={this.incrementConclusion}
      decrement={this.decrementConclusion}
    />
  })
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="display-4">Etapas do Projeto</h2>
            <p className="lead" >Acompanhe o andamento do seu projeto</p>
          </div>
        </div>
        {EtapaItem}
      </div>
    )
  }
}

export default Etapas;