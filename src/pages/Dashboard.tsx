import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Key, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Secrets Manager</h1>
        <p className="text-lg text-muted-foreground">
          Securely manage and organize your application secrets in one place.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Secrets</CardTitle>
            <Shield className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-muted-foreground mt-1">
              Active secrets in your vault
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Recent Activity</CardTitle>
            <Key className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-sm text-muted-foreground mt-1">
              Secrets added this week
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm sm:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Quick Actions</CardTitle>
            <Plus className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Link to="/add-secret">
              <Button className="w-full h-11">Add New Secret</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Section */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Getting Started</CardTitle>
          <CardDescription className="text-base">
            Learn how to use the Secrets Manager effectively
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <span className="text-blue-600 dark:text-blue-400">🔐</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Manage Secrets</h4>
                  <p className="text-sm text-muted-foreground">
                    View, add, and delete your application secrets securely.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <span className="text-green-600 dark:text-green-400">👁️</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Mask/Unmask Values</h4>
                  <p className="text-sm text-muted-foreground">
                    Toggle visibility of secret values for security purposes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <span className="text-purple-600 dark:text-purple-400">🌙</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark themes using the toggle in the navbar.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <span className="text-orange-600 dark:text-orange-400">📱</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Access your secrets from any device with our mobile-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}