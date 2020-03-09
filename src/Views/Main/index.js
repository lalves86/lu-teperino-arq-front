import React, { useState, useEffect } from 'react';
import styles from './styles.css';

import api from '../../services/api';

import Footer from '../Footer';

const Main = () => {
  const [etapas, setEtapas] = useState([]);

  useEffect(() => {
    async function loadEtapas() {
      const response = await api.get('/etapas');

      setEtapas(response.data);
    }
    loadEtapas();
  }, []);

  const etapasArray = etapas.map(etapa => {
    return (
      <div key={etapa._id} className="card-etapa">
        <a className="main-links" href="/etapas">
          {etapa.descricao}
        </a>
      </div>
    );
  });

  return (
    <>
      <div style={styles} className="container-group">
        {etapasArray}
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
