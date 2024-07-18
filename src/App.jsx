import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import io from 'socket.io-client'
function App() {
  const [ isRecording, setIsRecording ] = useState(false)
  const [ transcription, setTranscription ] = useState('')
  const socketRef = useRef()
  const mediaRecorderRef = useRef()

  useEffect(() => {
    socketRef.current = io('http://localhost:3004');

    socketRef.current.on('transcription', (data) => {
      setTranscription(prev => prev + ' ' + data)
    });

    return () => {
      socketRef.current.disconnect()
    }

  }, [])

  const startRecording = async () => {
    console.log('start recording')
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = event => {
      const reader = new FileReader();
      reader.readAsDataURL(event.data);
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[ 1 ];
        console.log(base64data)
        socketRef.current.emit('audio_chunk', { chunk: base64data });
      };
    };
    mediaRecorderRef.current.start(250); // Adjust the interval as needed
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <>
      <div>
        <button onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <p>Transcription: {transcription}</p>
      </div>
    </>
  )
}

export default App
