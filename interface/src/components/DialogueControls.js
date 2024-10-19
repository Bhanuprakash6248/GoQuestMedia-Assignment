// src/components/DialogueControls.js
import React, { useContext } from 'react';
import { AppStateContext } from '../context/AppStateContext';

const DialogueControls = () => {
  const { currentDialogueIndex, dialogues, nextDialogue, prevDialogue } = useContext(AppStateContext);

  return (
    <div className="flex justify-between mt-6">
      {/* Previous Button */}
      <button
        onClick={prevDialogue}
        disabled={currentDialogueIndex === 0}
        className={`py-2 px-4 rounded ${currentDialogueIndex === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onClick={nextDialogue}
        disabled={currentDialogueIndex === dialogues.length - 1}
        className={`py-2 px-4 rounded ${currentDialogueIndex === dialogues.length - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
      >
        Next
      </button>
    </div>
  );
};

export default DialogueControls;
