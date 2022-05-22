import SingleNote from "./SingleNote"
import AddNote from "./AddNote"

const Notes = ({ notes, darkMode, baseUrl }) => {
  return (
    <section className="notes">
      <AddNote baseUrl={baseUrl}/>
       {
         notes.map(note=> (
            <SingleNote 
              note={note} 
              baseUrl={baseUrl} 
              key={note._id} 
              darkMode={darkMode} 
            />
         ))
       }
    </section>
  )
}

export default Notes