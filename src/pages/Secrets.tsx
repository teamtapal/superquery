import { useState } from 'react'
import { Eye, EyeOff, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table'
import type { Secret } from '@/App'

interface SecretsProps {
  secrets: Secret[]
  onDeleteSecret: (id: string) => void
}

export function Secrets({ secrets, onDeleteSecret }: SecretsProps) {
  const [visibleSecrets, setVisibleSecrets] = useState<Set<string>>(new Set())

  const toggleVisibility = (id: string) => {
    const newVisible = new Set(visibleSecrets)
    if (newVisible.has(id)) {
      newVisible.delete(id)
    } else {
      newVisible.add(id)
    }
    setVisibleSecrets(newVisible)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const maskValue = (value: string) => {
    return '•'.repeat(Math.min(value.length, 20))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Secrets</h1>
          <p className="text-muted-foreground mt-2">
            Manage your application secrets and API keys
          </p>
        </div>
        <Button onClick={() => window.location.href = '/add-secret'}>
          Add New Secret
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Secrets ({secrets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {secrets.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No secrets found.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add your first secret to get started.
              </p>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {secrets.map((secret) => (
                    <TableRow key={secret.id}>
                      <TableCell className="font-medium">
                        {secret.name}
                      </TableCell>
                      <TableCell className="font-mono text-sm max-w-xs">
                        <div className="flex items-center space-x-2">
                          <span className="truncate">
                            {visibleSecrets.has(secret.id) 
                              ? secret.value 
                              : maskValue(secret.value)
                            }
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => toggleVisibility(secret.id)}
                          >
                            {visibleSecrets.has(secret.id) ? (
                              <EyeOff className="h-3 w-3" />
                            ) : (
                              <Eye className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatDate(secret.createdAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => onDeleteSecret(secret.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}