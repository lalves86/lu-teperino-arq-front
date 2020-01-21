import React from 'react';
import Tabela from './Tabela';

const Orcamento = props => {
  const data = props.data
  return (
    <div className="row card">
        <div className="col card-body">
          <h3 className="card-title">{data.segmento}</h3>
          <p className="card-text">{data.descricao}</p>
          <Tabela data={data.itens} />
        </div>
      </div>
  );
}

export default Orcamento;