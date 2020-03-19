import React, { useState, useEffect } from 'react';
import Orcamento from './Orcamento';
import api from '../../services/api';

const Orcamentos = () => {
  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    async function loadOrcamentos() {
      const response = await api.get('/orcamentos');
      setOrcamentos(response.data);
    }
    loadOrcamentos();
  }, []);

  const orcamentoItem = orcamentos.map(orcamento => {
    return <Orcamento key={orcamento._id} data={orcamento} />;
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
  );
};

export default Orcamentos;
