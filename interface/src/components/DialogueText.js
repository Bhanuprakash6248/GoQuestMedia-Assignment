// src/components/DialogueText.js
import React, { useContext } from 'react';
import { AppStateContext } from '../context/AppStateContext';

const DialogueText = () => {
  const { dialogues, currentDialogueIndex, updateDialogue } = useContext(AppStateContext);
  const currentDialogue = dialogues[currentDialogueIndex];

  const handleOriginalTextChange = (e) => {
    const updatedDialogue = {
      ...currentDialogue,
      original: e.target.value,
    };
    updateDialogue(currentDialogueIndex, updatedDialogue);
  };

  const handleTranslatedTextChange = (e) => {
    const updatedDialogue = {
      ...currentDialogue,
      translated: e.target.value,
    };
    updateDialogue(currentDialogueIndex, updatedDialogue);
  };

  return (
    <div className="mt-4">
      {/* Editable Original Text */}
      <label className="block font-medium">Edit Original Text:</label>
      <input
        type="text"
        value={currentDialogue.original}
        onChange={handleOriginalTextChange}
        className="border border-gray-300 rounded p-2 w-full mt-2"
      />

      {/* Editable Translated Text */}
      <label className="block font-medium mt-4">Edit Translated Text:</label>
      <input
        type="text"
        value={currentDialogue.translated}
        onChange={handleTranslatedTextChange}
        className="border border-gray-300 rounded p-2 w-full mt-2"
      />
    </div>
  );
};

export default DialogueText;
