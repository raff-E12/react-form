import { useState } from 'react'
import './App.css'
import Cards from './assets/Cards'
import ContentCards from './assets/ContentCards'
import Header from './assets/Header'
import News from "./assets/News.json"

function App() {
  const [isNews, setNews] = useState(News);
  return (
    <>
    <Header link={isNews} sets={setNews}/>
    <div className='container p-4 overflow-box'>
      <ContentCards link={isNews} sets={setNews}/>
    </div>
    </>
  )
}

export default App
