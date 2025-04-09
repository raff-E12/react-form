import React, { useState } from 'react'
import News from "./News.json"

export default function Cards({list}) {
    const [isNews, SetCards] = useState(list);

    const handleDeletecCard = (index) =>{
      const index_card = isNews.filter((_,i) => i !== index);
      SetCards(index_card);
    }

  return (
      <>
        {isNews.map((element, index) => {
            return(
              <div className='cards' key={element.id}>
                <div className='cross-icon d-flex' onClick={() =>{handleDeletecCard(index)}}>
                  <i class="fa-solid fa-xmark"></i>
                </div>
                {element.immagine !== "" && element.immagine !== undefined ? <div className='box-img-card d-flex' 
                style={{backgroundImage:`url(${element.immagine})`}}></div> : <div className='box-img-card wall d-flex'><h3>News</h3></div>}
                <div className='text-card d-flex'>
                  <h4>{element.titolo}</h4>
                  <p>{element.riassunto}</p>
                </div>
                <div className='tags d-flex p-2'>
                    {element.tag.map( tags => {
                      return(
                        <p className='tag'>#{tags}</p>
                      )
                    })}
                  </div>
              </div>
            )
        })}
      </>
  )
}
