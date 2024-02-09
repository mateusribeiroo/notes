export function NoteCard(){
  return (
    <button className="
      text-left 
      rounded-md 
      p-5 space-y-3 
      overflow-hidden 
      relative 
      hover:ring-2 
      focus-visible:ring-2 
      outline-none  
      hover:ring-slate-600 
      bg-slate-800 
      focus-visible:ring-lime-400
    ">
      <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, nulla nihil cupiditate sapiente excepturi eveniet facilis eaque voluptas odio nemo recusandae quod eum veniam ratione, fugit cumque. Ab, deserunt incidunt.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique nulla unde eos id? Enim, voluptatum consequuntur. Pariatur quas voluptate autem modi sit vel eos nam, quae sequi quibusdam qui incidunt!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t
        from-black/60 to-black/0 pointer-events-none" 
      />
    </button>
  )
}