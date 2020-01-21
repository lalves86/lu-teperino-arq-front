import React from 'react';

const DetailTabela = props => {
  
  const detailData = props.detail.data.map( detail => {
    const parcelas = detail.data_pgto.map( data => {
     return (
      <p key={data}>{data}</p>
     )
   })
    
    return (
      <div key={detail.id}>
        <h4>{detail.item}</h4>
        <div className="row">
          <div className="col-4">
            <p>{detail.descricao}</p> 
          </div>
          <div className="col-4">
            <p>Preço: R$ {detail.preco}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Opção de pagamento: {detail.meio_pgto}</p> 
          </div>
          <div className="col-4">
            <p>Número de parcelas: {detail.parcelas}</p> 
          </div>
          <div className="col-4">
            <p>Valor das parcelas: R$ {detail.valor_parcela}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Valor pago: R$ {detail.valor_pago}</p>
          </div>
        </div>
        <h5>Vencimento das parcelas:</h5>
        {parcelas}
      </div>
    )
  })
  return (
    <div>
      <button onClick={props.changeStatus} className="btn btn-secondary">Voltar</button>
      {detailData}
    </div>
  )
};

export default DetailTabela;