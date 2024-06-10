import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NoteItem = ({ note, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{note.title}</Text>
      <Text numberOfLines={1}>{note.content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NoteItem;
