import { useState } from 'react'
import Axios from 'axios'

const AddNote = ({ baseUrl }) => {

  const [title, setTitle] = useState("")

  const handleSubmit = async (event)=> {
    event.preventDefault()
    try {
      await Axios.post(baseUrl, { title })
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="addnotes" >
       <form className="addnote-form" onSubmit={handleSubmit} >
           <textarea placeholder="Enter Notes..." onChange={event=> setTitle(event.target.value)} ></textarea>
           <button>Add Note</button>
       </form>
    </section>
  )
}

export default AddNote