import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotesList from './/NoteList/NotesList';
import NoteForm from './/NoteForm/NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:7070/notes');
    setNotes(response.data);
  };

  const addNote = async (content) => {
    await axios.post('http://localhost:7070/notes', { id: 0, content });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:7070/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="app">
      <h1>Notes</h1>
      <button onClick={fetchNotes}>🔄</button>
      <NotesList notes={notes} onDelete={deleteNote} />
      <NoteForm onAdd={addNote} />
    </div>
  );
};

export default App;