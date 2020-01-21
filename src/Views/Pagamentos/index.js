import React, { useState } from "react";
import OrcamentosAPI from "../../assets/Orcamentos";
import Pagamento from './Pagamento';

const Pagamentos = () => {
  const [pagamentos] = useState(OrcamentosAPI);
  const pagamentoItem = pagamentos.map(pagamento => {
    return <Pagamento
              key={pagamento.id}
              data={pagamento}
            />
    });
  return (
    <div>
      <h2 className="display-4">Pagamentos</h2>
      <p className="lead">Acompanhe a evolução dos seus gastos</p>
      {pagamentoItem}
    </div>
  )
}

export default Pagamentos;