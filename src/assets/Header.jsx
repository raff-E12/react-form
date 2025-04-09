import React, { useState } from 'react'
import News from "./News.json"

export default function Header({link}) {
    const [isOpen, SetOpen] = useState(true);
    const [isNews, SetLists] = useState(link);

    const newsaddHandle = () => {
        const value_img = document.getElementById("img-input").value;
        const value_title = document.getElementById("title-input").value;
        const value_description = document.getElementById("description-input").value;
        const value_tags = document.getElementById("tags-input").value;

        // console.log(String(value_tags).split(","))
        let object_compositions = {
            id: isNews[isNews.length - 1].id + 1,
            titolo: String(value_title),
            tag: String(value_tags).split(","),
            immagine: String(value_img),
            riassunto: String(value_description)
        }

        SetLists( list => [...list, object_compositions]);
    };


  return (
   <>
    <header className='container col-sm-12 header-sc'>
    <h2 className='col-sm-6'>Boolean Blog</h2>
    <div className='col-side-2 col-sm-6'>
      <button className='btn btn-primary' onClick={()=>{SetOpen( value => !value)}}>Add</button>
    </div>
    <div className={`box-add-news ${isOpen ? "d-none": "d-flex"}`}>
        <div>
            <h3>Aggiungi un Articolo</h3>
        </div>
        <ul className='d-flex list-options'>
            <li>
              <p>Aggiungi l'immagine:</p>
              <input type="text" placeholder="Aggiungi l'immagine.." id='img-input'/>
            </li>
            <li>
              <p>Aggiungi il titolo:</p>
              <input type="text" placeholder="Aggiungi il titolo.." id='title-input'/>
            </li>
            <li>
              <p>Aggiungi la descrizione:</p>
              <input type="text" placeholder="Aggiungi la descrizione.." id='description-input'/>
            </li>
            <li>
              <p>Aggiungi i tag:</p>
              <input type="text" placeholder="Aggiungi i tag.." id='tags-input'/>
            </li>
            <li>
                <button className='btn btn-primary' id='btn-add' onClick={()=>{newsaddHandle()}}>Add</button>
            </li>
        </ul>
    </div>
  </header>
   </>
  )
}
