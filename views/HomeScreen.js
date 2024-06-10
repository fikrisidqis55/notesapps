import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useNotes } from '../viewmodels/NotesProvider';
import NoteItem from '../components/NoteItem';

const HomeScreen = ({ navigation }) => {
  const { notes } = useNotes();

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onPress={() => navigation.navigate('NoteDetail', { note: item })}
          />
        )}
      />
      <Button title="Add Note" onPress={() => navigation.navigate('EditNote')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
