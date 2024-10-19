// src/App.js
import React from 'react';
import { AppStateProvider } from './context/AppStateContext';
import VideoPlayer from './components/VideoPlayer';
import AudioRecorder from './components/AudioRecorder';
import DialogueDisplay from './components/DialogueDisplay';


const App = () => {
  return (
    <AppStateProvider>
      <div className="p-4 max-w-lg mx-auto">
        <VideoPlayer />
        <AudioRecorder />
        <DialogueDisplay />
      </div>
    </AppStateProvider>
  );
};

export default App;
