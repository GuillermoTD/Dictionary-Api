import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DictionaryProvider } from './context/DictionaryContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </StrictMode>
)
