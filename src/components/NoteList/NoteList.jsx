import React from 'react';
import Note from '../Note/Note';

const NotesList = ({ notes, onDelete }) => {
    return (
        <div className="notes-list">
            {notes.map(note => (
                <Note key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NotesList;
