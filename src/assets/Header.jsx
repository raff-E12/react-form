import React, { useEffect, useState } from 'react'
import News from "./News.json"

export default function Header({link, sets}) {
    const [isOpen, SetOpen] = useState(true);
    const [isArt, SetNew] = useState({
      titolo: "",
      tag: "",
      immagine:"",
      riassunto: "",
    });

    const handleObjIDAdd = (e) =>{
       const { id, value } = e.target;
      //  console.log(id, value);
          switch (id) {
          case "img-input":
            isArt.immagine = value ? String(value) : "";
            break;

            case "title-input":
              isArt.titolo=  value ? String(value) : "";
            break;
            
            case "description-input":
              isArt.riassunto= value ? String(value)  : "";
            break;

            case "tags-input":
              isArt.tag = String(value).split(",");
            break;
        }
        console.log(isArt);
       return isArt;
    }
    
    const handleNewsAdd = () => {
        const value_img = isArt.immagine;
        const value_title = isArt.titolo;
        const value_description = isArt.riassunto;
        const value_tags = isArt.tag;

        if (value_img !== "" && value_title !== "" && value_description !== "" && value_tags !== "") {
          console.log(link);
          sets( list => [...list, {id: link[link.length - 1].id + 1, ...isArt}]);
        } else{
          window.alert("Compila il form se vuoi proseguire.");
        }
    };

  return (
   <>
    <header className='container col-sm-12 header-sc'>
    <h2 className='col-sm-6'>Boolean Blog</h2>
    <div className='col-side-2 col-sm-6'>
      <button className='btn btn-primary' onClick={()=>{SetOpen(value => !value)}}>Add</button>
    </div>
    <div className={`box-add-news ${isOpen ? "d-none": "d-flex"}`}>
        <div>
            <h3>Aggiungi un Articolo</h3>
        </div>
        <ul className='d-flex list-options'>
            <li>
              <p>Aggiungi l'immagine:</p>
              <input type="text" placeholder="Aggiungi l'immagine.." id='img-input' onChange={handleObjIDAdd}/>
            </li>
            <li>
              <p>Aggiungi il titolo:</p>
              <input type="text" placeholder="Aggiungi il titolo.." id='title-input' onChange={handleObjIDAdd}/>
            </li>
            <li>
              <p>Aggiungi la descrizione:</p>
              <input type="text" placeholder="Aggiungi la descrizione.." id='description-input' onChange={handleObjIDAdd}/>
            </li>
            <li>
              <p>Aggiungi i tag:</p>
              <input type="text" placeholder="Aggiungi i tag.." id='tags-input' onChange={handleObjIDAdd}/>
            </li>
            <li>
                <button className='btn btn-primary' id='btn-add' onClick={handleNewsAdd}>Add</button>
            </li>
        </ul>
    </div>
  </header>
   </>
  )
}
