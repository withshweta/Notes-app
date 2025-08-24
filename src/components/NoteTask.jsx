import React from 'react'

const NoteTask = ({notes , deleteNote}) => {
  return (
    <div className='note-list'>
      {notes.length > 0 ? (
        notes.map((note,index)=>(
          <div key={index} className='note'>
            <span>{note}</span>
            <button onClick={()=>deleteNote(index)}>delete</button>
          </div>
        ))

       

      ) :<p>no notes yet!</p>}
        
    </div>
  )
}

export default NoteTask