import logo from "./assets/logo.svg";
import { NoteCard } from "./components/note-card.tsx";
import { NewNoteCard } from "./components/new-note-card.tsx";
import { ChangeEvent, useState, FormEvent } from 'react';
import { toast } from "sonner";
import { X } from "lucide-react";

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes');

    if(notesOnStorage){
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value);
  }

  function onNoteCreated(content: string){
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray));
  }

  function onNoteDeleted(id: string){ 
    
    const newNotes = notes.filter((element) => element.id != id)

    setNotes(newNotes);

    localStorage.setItem("notes", JSON.stringify(newNotes));

    toast.success("Nota deletada com sucesso!");
  }

  const filteredNotes = search !== "" ? notes.filter(note => 
    note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ) : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logotipo" />
      
      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight
          placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" /> {/* Divisor */}

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]"> 

        <NewNoteCard onNoteCreated={onNoteCreated} />
        
        {
          filteredNotes.map(note => {
            return <NoteCard onNoteDeleted={onNoteDeleted} key={note.id} note={note} />
          })
        }
      </div>
    </div>
  )
}


