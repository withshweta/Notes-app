import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(note.trim()){
    addNote(note);     // 👈 add the note to the list
    setNote("");       // 👈 clear input
  };
  }
  return (
    <div className='input-section'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='write a note'
          value={note}
          onChange={handleChange}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
