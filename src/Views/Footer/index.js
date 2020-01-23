import React from 'react';
import styles from './styles.css';
import Icons from 'material-icons-react';

const Footer = () => {
  return (
    <div style={styles} className="container-footer">
      <a href="/etapas" ><Icons icon='today' size={50} /></a>
      <a href="/orcamentos" ><Icons icon='folder' size={50} /></a>
      <a href="/pagamentos" ><Icons icon='payment' size={50} /></a>
    </div>
  )
}

export default Footer;