import { useState } from 'react'
import { Eye, EyeOff, Trash2, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
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
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Secrets</h1>
          <p className="text-lg text-muted-foreground">
            Manage your application secrets and API keys
          </p>
        </div>
        <Link to="/add-secret">
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add New Secret
          </Button>
        </Link>
      </div>

      {/* Secrets Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Your Secrets ({secrets.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {secrets.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">No secrets found</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Add your first secret to get started with secure credential management.
              </p>
              <Link to="/add-secret" className="mt-4">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Secret
                </Button>
              </Link>
            </div>
          ) : (
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Value</TableHead>
                    <TableHead className="font-semibold">Created At</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {secrets.map((secret) => (
                    <TableRow key={secret.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {secret.name}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        <div className="flex items-center gap-2 max-w-xs">
                          <span className="truncate bg-muted px-2 py-1 rounded text-xs">
                            {visibleSecrets.has(secret.id) 
                              ? secret.value 
                              : maskValue(secret.value)
                            }
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 shrink-0"
                            onClick={() => toggleVisibility(secret.id)}
                          >
                            {visibleSecrets.has(secret.id) ? (
                              <EyeOff className="h-3.5 w-3.5" />
                            ) : (
                              <Eye className="h-3.5 w-3.5" />
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
                          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
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