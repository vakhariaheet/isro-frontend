import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Map from './pages/Map'
import { ClerkProvider } from '@clerk/clerk-react';
function App() {

  return (
    <>
      <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ClerkProvider>
    </>
  )
}

export default App
