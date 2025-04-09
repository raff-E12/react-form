import './App.css'
import Cards from './assets/Cards'

function App() {
  return (
    <>
    <header className='container col-sm-12 header-sc'>
      <h2 className='col-sm-6'>Boolean Blog</h2>
      <div className='col-side-2 col-sm-6'>
        <button className='btn btn-primary'>Add</button>
      </div>
    </header>
    <div className='container p-4 overflow-box'>
      <Cards />
    </div>
    </>
  )
}

export default App
