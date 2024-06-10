import React, { useLayoutEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNotes } from '../viewmodels/NotesProvider';

const EditNoteScreen = ({ navigation, route }) => {
  const { note } = route.params || {};
  const { addNote, updateNote } = useNotes();
  const isEditMode = Boolean(note);
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditMode ? 'Edit Note' : 'Add Note',
    });
  }, [navigation, isEditMode]);

  const handleSave = () => {
    const noteData = { title, content };
    if (isEditMode) {
      updateNote({
        ...note,
        ...noteData,
      });
    } else {
      addNote(noteData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

export default EditNoteScreen;
