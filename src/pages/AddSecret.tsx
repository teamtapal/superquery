import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowLeft, Shield, AlertTriangle, Info } from 'lucide-react'
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
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
          className="h-9 w-9"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Add New Secret</h1>
          <p className="text-lg text-muted-foreground">
            Create a new secret to store securely in your vault
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        {/* Main Form */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Secret Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Secret Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g., Database Password, API Key"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={errors.name ? 'border-destructive focus:border-destructive focus:ring-destructive' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  A descriptive name to identify your secret
                </p>
              </div>

              <div className="space-y-3">
                <label htmlFor="value" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Secret Value *
                </label>
                <div className="relative">
                  <Input
                    id="value"
                    type={showValue ? 'text' : 'password'}
                    placeholder="Enter your secret value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className={errors.value ? 'border-destructive focus:border-destructive focus:ring-destructive pr-10' : 'pr-10'}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full w-10 hover:bg-transparent"
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
                <p className="text-sm text-muted-foreground">
                  The actual secret value (password, API key, etc.)
                </p>
              </div>

              <div className="flex gap-3 pt-4">
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

        {/* Security Information */}
        <Card className="shadow-sm border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Security Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Local Storage Only</p>
                <p className="text-sm text-muted-foreground">
                  Secrets are stored locally in your browser and are not sent to any server.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Session Based</p>
                <p className="text-sm text-muted-foreground">
                  Secrets will be cleared when you refresh or close the browser.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">Development Only</p>
                <p className="text-sm text-muted-foreground">
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