import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface AddSecretProps {
  onAddSecret: (name: string, value: string) => void
}

export function AddSecret({ onAddSecret }: AddSecretProps) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [showValue, setShowValue] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; value?: string }>({})
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setErrors({})
    
    // Validation
    const newErrors: { name?: string; value?: string } = {}
    
    if (!name.trim()) {
      newErrors.name = 'Secret name is required'
    }
    
    if (!value.trim()) {
      newErrors.value = 'Secret value is required'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Add the secret
    onAddSecret(name.trim(), value.trim())
    
    // Reset form and navigate
    setName('')
    setValue('')
    setShowValue(false)
    navigate('/secrets')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Add New Secret</h1>
          <p className="text-muted-foreground mt-2">
            Create a new secret to store securely in your vault
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Secret Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Secret Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g., Database Password, API Key"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? 'border-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  A descriptive name to identify your secret
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="value" className="text-sm font-medium">
                  Secret Value *
                </label>
                <div className="relative">
                  <Input
                    id="value"
                    type={showValue ? 'text' : 'password'}
                    placeholder="Enter your secret value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={errors.value ? 'border-destructive pr-10' : 'pr-10'}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowValue(!showValue)}
                  >
                    {showValue ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.value && (
                  <p className="text-sm text-destructive">{errors.value}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  The actual secret value (password, API key, etc.)
                </p>
              </div>

              <div className="flex space-x-3">
                <Button type="submit" className="flex-1">
                  Add Secret
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => navigate('/secrets')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Security Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">Local Storage Only</p>
                <p className="text-xs text-muted-foreground">
                  Secrets are stored locally in your browser and are not sent to any server.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">Session Based</p>
                <p className="text-xs text-muted-foreground">
                  Secrets will be cleared when you refresh or close the browser.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <div>
                <p className="text-sm font-medium">Development Only</p>
                <p className="text-xs text-muted-foreground">
                  This is a demo application. Do not use for real secrets in production.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}