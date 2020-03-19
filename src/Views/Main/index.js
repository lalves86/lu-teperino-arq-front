import React, { useState, useEffect } from 'react';
import styles from './styles.css';

import api from '~/services/api';

import Footer from '../Footer';

const Main = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    async function loadProjetos() {
      const response = await api.get('/projetos');

      setProjetos(response.data);
    }
    loadProjetos();
  }, []);

  const projetosArray = projetos.map(projeto => {
    const clientExists = projeto.cliente_id;
    return (
      <div key={projeto._id} className="card-etapa">
        <a className="main-links" href="/etapas">
          <span>{projeto.nome}</span>
          <span>
            {clientExists ? clientExists.nome : 'Nenhum cliente atribuído'}
          </span>
        </a>
      </div>
    );
  });

  return (
    <>
      <div style={styles} className="container-group">
        {projetosArray}
      </div>
      <div className="main-content" />
      <div className="button-container">
        <a className="button" href="/etapas">
          Andamento do projeto
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Main;
