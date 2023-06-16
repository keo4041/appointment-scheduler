import React, { useState } from 'react';

const Notes = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <h2>Notes</h2>
      <textarea value={note} onChange={handleNoteChange} rows={5} cols={50} />
    </div>
  );
};

export default Notes;
