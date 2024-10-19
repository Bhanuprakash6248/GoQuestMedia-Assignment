// src/context/AppStateContext.js
import React, { createContext, useState } from 'react';

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [dialogues, setDialogues] = useState([
    { original: 'Hello, how are you?', translated: 'Hola, ¿cómo estás?' },
    { original: 'I am fine, thank you!', translated: 'Estoy bien, gracias!' },
    { original: 'What are you doing?', translated: '¿Qué estás haciendo?' },
  ]);
  
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const updateDialogue = (index, updatedDialogue) => {
    const updatedDialogues = dialogues.map((dialogue, i) =>
      i === index ? updatedDialogue : dialogue
    );
    setDialogues(updatedDialogues);
  };

  const nextDialogue = () => {
    if (currentDialogueIndex < dialogues.length - 1) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const prevDialogue = () => {
    if (currentDialogueIndex > 0) {
      setCurrentDialogueIndex(currentDialogueIndex - 1);
    }
  };

  return (
    <AppStateContext.Provider
      value={{
        dialogues,
        currentDialogueIndex,
        updateDialogue,
        nextDialogue,
        prevDialogue,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
