import React, {Component} from 'react';

import ImagensProjeto from '../../assets/ImagensProjeto';

import ImageGroup from './ImageGroup';

class Images extends Component {
  constructor() {
    super()
    this.state = {
      ImagensProjeto: ImagensProjeto
    }
  }
  render() {
    const Imagem = ImagensProjeto.map(item => {
      return <ImageGroup 
        key={item.id}
        data={item}
      />
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="display-4">Imagens 3D</h2>
            <p className="lead" >Seu ambiente exclusivo</p>
          </div>
        </div>
        <div className="row">
          {Imagem}
        </div>
{/*         <div className="row">
          <div className="col">
            <img src="https://source.unsplash.com/random/200x200" />
          </div>
          <div className="col">
            <img src="https://source.unsplash.com/random/200x200" />
          </div>
          <div className="col">
            <img src="https://source.unsplash.com/random/200x200" />
          </div>
          <div className="col">
            <img src="https://source.unsplash.com/random/200x200" />
          </div>
        </div> */}
      </div>
    )
  }
}

export default Images;