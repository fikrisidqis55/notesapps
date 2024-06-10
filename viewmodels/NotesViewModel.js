// viewmodels/NotesViewModel.js
import { useState, useEffect } from 'react';
import { loadData, saveData } from '../utils/storage';

const useNotesViewModel = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const savedNotes = await loadData('notes');
      if (savedNotes) {
        setNotes(savedNotes);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    saveData('notes', notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: notes.length + 1 }]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
};

export default useNotesViewModel;
