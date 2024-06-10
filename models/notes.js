const notes = [
  {
    id: 1,
    title: 'First Note',
    content: 'This is the content of the first note.',
  },
  // Other notes
];

export const getNotes = () => {
  return notes;
};

export const getNoteById = (id) => {
  return notes.find((note) => note.id === id);
};

export const addNote = (note) => {
  note.id = notes.length + 1;
  notes.push(note);
};

export const updateNote = (updatedNote) => {
  const index = notes.findIndex((note) => note.id === updatedNote.id);
  if (index !== -1) {
    notes[index] = updatedNote;
  }
};

export const deleteNote = (id) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
};
