import './App.css'
import Cards from './assets/Cards'
import ContentCards from './assets/ContentCards'
import Header from './assets/Header'

function App() {
  return (
    <>
    <Header />
    <div className='container p-4 overflow-box'>
      <ContentCards />
    </div>
    </>
  )
}

export default App
