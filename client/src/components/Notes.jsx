import SingleNote from "./SingleNote"
import AddNote from "./AddNote"

const Notes = ({ notes, darkMode }) => {
  return (
    <section className="notes">
      <AddNote />
       {
         notes.map(note=> (
            <SingleNote 
              note={note}  
              key={note._id} 
              darkMode={darkMode} 
            />
         ))
       }
    </section>
  )
}

export default Notes