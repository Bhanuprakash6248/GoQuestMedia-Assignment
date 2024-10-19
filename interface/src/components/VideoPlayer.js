// src/components/VideoPlayer.js
import React, { useRef, useState, useContext } from 'react';
import { AppStateContext } from '../context/AppStateContext';
import AudioRecording from "../Assets/AudioRecording.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { dialogues, currentDialogueIndex } = useContext(AppStateContext);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };


  return (
    <div className="w-full mb-8">
      <h1 className="text-lg font-bold mb-2">Video Player</h1>
      <video
        ref={videoRef}
        onTimeUpdate={handleProgress}
        className="w-full h-auto"
        src={AudioRecording}
      />

      <div className="bg-gray-200 h-2 mt-2 rounded">
        <div className="bg-blue-500 h-full rounded" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Custom play/pause button */}
      <button 
        onClick={handlePlayPause} 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        {isPlaying ? "Pause" : "Play"}
      </button>



      {/* Display current dialogue text */}
      <div className="mt-4">
        <h2 className="text-lg font-medium">Current Dialogue</h2>
        <p>{dialogues[currentDialogueIndex]?.original}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
