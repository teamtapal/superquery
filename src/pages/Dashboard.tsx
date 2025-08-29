import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Key, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to Secrets Manager</h1>
        <p className="text-muted-foreground mt-2">
          Securely manage and organize your application secrets in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Secrets</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Active secrets in your vault
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Secrets added this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link to="/add-secret">
              <Button className="w-full">Add New Secret</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Learn how to use the Secrets Manager effectively
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">🔐 Manage Secrets</h4>
              <p className="text-xs text-muted-foreground">
                View, add, and delete your application secrets securely.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">👁️ Mask/Unmask Values</h4>
              <p className="text-xs text-muted-foreground">
                Toggle visibility of secret values for security purposes.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">🌙 Dark Mode</h4>
              <p className="text-xs text-muted-foreground">
                Switch between light and dark themes using the toggle in the navbar.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">📱 Responsive Design</h4>
              <p className="text-xs text-muted-foreground">
                Access your secrets from any device with our mobile-friendly interface.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}