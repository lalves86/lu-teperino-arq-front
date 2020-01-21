import React from 'react';

const Image = props => {
  const url = props.image.map(src => {
    return <img src={src} alt="" />
  })
  return (
    <div>
      {url}
    </div>
  )
}

export default Image;