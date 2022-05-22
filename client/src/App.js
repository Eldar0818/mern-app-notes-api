import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Notes from './components/Notes'
import { axiosInstance } from './configUrl'

function App() {

  const[darkMode, setDarkMode] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [notes, setNotes] = useState([])

  useEffect(()=> {
    const fetchNotes = async ()=> {
      try {
        const response = await axiosInstance.get('/api')
        const data = await response.data
        setNotes(data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotes()

  }, [])

  return (
    <main className={darkMode ? 'body dark-body' : 'body'}>

      <section className='app'>
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
          <div className='control'>
            <Notes 
              notes={notes.filter(note=> note.title.toLowerCase().includes(searchValue))}
              darkMode={darkMode}
            />
          </div>
      </section>

    </main>
    
  )
}

export default App