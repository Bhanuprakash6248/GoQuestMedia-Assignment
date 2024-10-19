// src/components/DialogueDisplay.js
import React from 'react';
import DialogueText from './DialogueText';
import DialogueControls from './DialogueControls';

const DialogueDisplay = () => {
  return (
    <div className="w-full mt-4 p-4">
      <h3 className="text-lg font-bold">Dialogue Editor</h3>

      {/* Dialogue text fields for original and translated */}
      <DialogueText />

      {/* Controls to navigate between dialogues */}
      <DialogueControls />
    </div>
  );
};

export default DialogueDisplay;
