import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" alt="BoardCraft" className="h-6 w-6" />
            <span className="font-bold">BoardCraft</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/browse-games" className="transition-colors hover:text-foreground/80">
              Browse Games
            </Link>
            <Link to="/create-game" className="transition-colors hover:text-foreground/80">
              Create Game
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
} 