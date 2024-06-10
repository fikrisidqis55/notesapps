import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNotes } from '../viewmodels/NotesProvider';

const NoteDetailScreen = ({ route, navigation }) => {
  const { note } = route.params;
  const { deleteNote } = useNotes();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button title="Edit" onPress={() => navigation.navigate('EditNote', { note })} />
      <Button
        title="Delete"
        onPress={() => {
          deleteNote(note.id);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 18,
  },
});

export default NoteDetailScreen;
