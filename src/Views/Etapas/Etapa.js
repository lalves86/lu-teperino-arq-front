import React, {Component} from 'react';
import TaskDetails from './TaskDetails';

class Etapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
    this.openTasks = this.openTasks.bind(this)
  }

  openTasks() {
    this.setState(state => ({
      showDetails: !state.showDetails
    }));
  }

  
  render() {
    let concluidoStyle = this.props.data.concluido === 100 && 'concluido';
    let concluidoMessage = this.props.data.concluido === 100 && <h4>Etapa Concluída!</h4>;
    return (
      <div className="row card mb-2">
        <div className={concluidoStyle}>
          <div className="col card-body">
            <h3 className="card-title">{this.props.data.titulo}:</h3>
            {concluidoMessage}
            <p className="card-text">{this.props.data.descricao}</p>
            <div className="progress">
              <div className="bar-color progress-bar-striped" role="progressbar" style={{width: this.props.data.concluido+'%'}}>{this.props.data.concluido}%</div>
            </div>
            <button className="btn btn-secondary mt-2 mr-2" onClick={() => this.props.increment(this.props.data._id)} ><strong>+</strong></button>
            <button className="btn btn-secondary mt-2 mr-2" onClick={() => this.props.decrement(this.props.data._id)} ><strong>-</strong></button>
            <button className="btn btn-secondary mt-2" onClick={this.openTasks} >Detalhes</button>
            {this.state.showDetails ? <TaskDetails tasks={this.props.data.detalhes} /> : null}
          </div>

        </div>
      </div>
    )
  }
}

export default Etapa;