import React, {useState} from 'react';
import Button from '../components/Button'
import Calc from '../components/Calc';
import PhotosGallery from '../components/Gallery'


function Topico10(){  

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/nature',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/grayscale'
  ]

  return(
    <div>
      
      <h3>Tópico 10 - Smart Components</h3>        

      <h4>galeria de fotos</h4>

      <PhotosGallery 
        photos = {photos}
      />
      
      

        
    </div>
  )

}  

export default Topico10