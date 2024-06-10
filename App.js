import React from 'react';
import { NotesProvider } from './viewmodels/NotesProvider';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <NotesProvider>
      <AppNavigator />
    </NotesProvider>
  );
};

export default App;
