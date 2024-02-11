import logo from "./assets/logo.svg";
import { NoteCard } from "./components/note-card.tsx";
import { NewNoteCard } from "./components/new-note-card.tsx";
import { useState } from "react"

export function App() {
  const [notes, setNotes] = useState([]);

  function onNoteCreated(content: string){
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content
    }

    setNotes([newNote, ...notes]);
  }

  function onNoteDeleted(id: number){ // implementar
    
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logotipo" />
      
      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight
          placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" /> {/* Divisor */}

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]"> 

        <NewNoteCard onNoteCreated={onNoteCreated} />
        
        {
          notes.map(note => {
            return <NoteCard key={note.id} note={note} />
          })
        }
      </div>
    </div>
  )
}


