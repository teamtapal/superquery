import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Secrets } from './pages/Secrets'
import { AddSecret } from './pages/AddSecret'

export interface Secret {
  id: string
  name: string
  value: string
  createdAt: string
}

function App() {
  const [secrets, setSecrets] = useState<Secret[]>([
    {
      id: '1',
      name: 'Database Password',
      value: 'super_secret_password_123',
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      name: 'API Key',
      value: 'sk-1234567890abcdef',
      createdAt: '2024-01-14T15:45:00Z'
    },
    {
      id: '3',
      name: 'JWT Secret',
      value: 'jwt_secret_key_very_secure',
      createdAt: '2024-01-13T09:15:00Z'
    }
  ])

  const addSecret = (name: string, value: string) => {
    const newSecret: Secret = {
      id: Date.now().toString(),
      name,
      value,
      createdAt: new Date().toISOString()
    }
    setSecrets(prev => [newSecret, ...prev])
  }

  const deleteSecret = (id: string) => {
    setSecrets(prev => prev.filter(secret => secret.id !== id))
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route 
          path="/secrets" 
          element={<Secrets secrets={secrets} onDeleteSecret={deleteSecret} />} 
        />
        <Route 
          path="/add-secret" 
          element={<AddSecret onAddSecret={addSecret} />} 
        />
      </Routes>
    </Layout>
  )
}

export default App
