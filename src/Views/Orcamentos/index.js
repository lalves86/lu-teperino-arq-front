import React, {useState} from 'react';
import Orcamento from './Orcamento';
import OrcamentosAPI from '../../assets/Orcamentos';

const Orcamentos = () => {
  const [orcamentos] = useState(OrcamentosAPI);
  const orcamentoItem = orcamentos.map(orcamento => {
    return <Orcamento
              key={orcamento.id}
              data={orcamento}
            />
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="display-4">Orçamentos</h2>
          <p className="lead">Seus orçamentos</p>
        </div>
      </div>
      {orcamentoItem}
    </div>
  )
}

export default Orcamentos;