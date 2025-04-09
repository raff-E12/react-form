import React, { useState } from 'react'

export default function Header() {
    const [isOpen, SetOpen] = useState(true);
  return (
   <>
    <header className='container col-sm-12 header-sc'>
    <h2 className='col-sm-6'>Boolean Blog</h2>
    <div className='col-side-2 col-sm-6'>
      <button className='btn btn-primary' onClick={()=>{SetOpen( value => !value)}}>Add</button>
    </div>
    <div className={`box-add-news ${isOpen ? "d-flex": "d-none"}`}>
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
                <button className='btn btn-primary' id='btn-add'>Add</button>
            </li>
        </ul>
    </div>
  </header>
   </>
  )
}
