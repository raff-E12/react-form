import React from 'react'
import Cards from './Cards'

export default function ContentCards({link, sets}) {
  const list_export = link;
  return (
    <div className='content-cards container'>
        <Cards list={list_export} listsets={sets}/>
    </div>
  )
}
