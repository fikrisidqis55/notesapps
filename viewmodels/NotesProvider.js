import React, { createContext, useContext, useState, useEffect } from 'react';
import { getNotes, addNote as addNoteToModel, updateNote as updateNoteInModel, deleteNote as deleteNoteFromModel } from '../models/notes';

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const addNote = (note) => {
    addNoteToModel(note);
    setNotes(getNotes());
  };

  const updateNote = (note) => {
    updateNoteInModel(note);
    setNotes(getNotes());
  };

  const deleteNote = (id) => {
    deleteNoteFromModel(id);
    setNotes(getNotes());
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
