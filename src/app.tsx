import logo from "./assets/logo.svg";
import { NoteCard } from "./components/note-card.tsx";
import { NewNoteCard } from "./components/new-note-card.tsx";
import { useState } from "react";
import { toast } from "sonner";

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNoteCreated(content: string){
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringfy(notesArray));
  }

  function onNoteDeleted(id: number){ // implementar
    // const i = notes.findIndex(item => item.id == id);
    // const noteList = [...notes];
    // noteList.splice(i, 1);
    // setNotes([...noteList]);]
    // toast.success("Nota removida com sucesso");
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
            return <NoteCard onNoteDeleted={onNoteDeleted} key={note.id} note={note} />
          })
        }
      </div>
    </div>
  )
}


