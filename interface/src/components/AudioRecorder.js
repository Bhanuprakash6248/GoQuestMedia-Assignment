// src/components/AudioRecorder.js
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';


const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);
  const waveSurferRef = useRef(null);
  

  // Initialize WaveSurfer when the component mounts
  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#4a90e2',
      cursorColor: '#333',
      height: 80,
      barWidth: 2,
    });
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunks.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
      loadWaveform(audioUrl); // Load the waveform when recording stops
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const loadWaveform = (url) => {
    waveSurferRef.current.load(url); // Load the audio file into WaveSurfer
  };

  const playAudio = () => {
    if (waveSurferRef.current.isPlaying()) {
      waveSurferRef.current.pause();
    } else {
      waveSurferRef.current.play();
    }
  };

  return (
    <div className="w-full mt-4">
      <div id="waveform" className="w-full mb-4">{isRecording ? <h1>Recording Started....</h1>:null}</div>

      <button
        onClick={isRecording ? stopRecording : startRecording}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {audioUrl && (
        <div className="mt-4">
          <button
            onClick={playAudio}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Play/Pause Recording
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
