import { BsFillTrashFill } from 'react-icons/bs'
import { axiosInstance } from './configUrl'

const SingleNote = ({ note, darkMode }) => {

  const handleDelete = (id)=> {
    try {
      axiosInstance.delete(`/api/${id}`)
      alert('Note deleted!')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className={darkMode ? "single-note dark" : "single-note"} >
        <span>{new Date(note.createdAt).toDateString()}</span>
        <p>{note.title}</p>
        <button className="delete-btn" onClick={()=> handleDelete(note._id)} >
            <BsFillTrashFill className='trash-can'/>
        </button>
    </article>
  )
}

export default SingleNote