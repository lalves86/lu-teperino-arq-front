import React from 'react';

import Image from './Image'

const ImageGroup = props => {
  return (
    <div>
      <h2>{props.data.titulo}</h2>
      <div className="col">
        <Image image={props.data.imgUrl} />
      </div>
    </div>
  )
}

export default ImageGroup;