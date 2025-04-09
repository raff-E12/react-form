import React, { useState } from 'react'
import News from "./News.json"

export default function Cards() {
    const [IsNews, SetCards] = useState(News);
  return (
      <>
        {IsNews.map(element => {
            return(
              <div className='cards'>
                <h2>{element.titolo}</h2>
              </div>
            )
        })}
      </>
  )
}
