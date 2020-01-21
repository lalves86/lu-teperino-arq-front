import React, {useState} from 'react';
import DetailTabela from './DetailTabela';

const Tabela = props => {
  
  const [detail] = useState(props);
  const [showDetails, setDetails] = useState(false);

  const changeStatus = () => {
    setDetails(!showDetails);
  };

/*   const soma = () => {
    detail.preco
  } */

  const itemTabela = detail.data.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.item}</td>
        <td>{item.descricao}</td>
        <td>R$ {item.preco}</td>
        <td></td>
      </tr>
    )
  });

  const tableHead = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th><button onClick={changeStatus} className="btn btn-secondary">Detalhar</button></th>
          </tr>
        </thead>
        <tbody>
          {itemTabela}
          <tr>
            <td>Total:</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  };

  return (
    <div>
      {showDetails ? <DetailTabela detail={detail} changeStatus={changeStatus} /> : tableHead() }
    </div>
  );
};

export default Tabela;