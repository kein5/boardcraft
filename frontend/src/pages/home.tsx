import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Turn Your Rules into Playable Games
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Write your board game rules in Markdown, and our AI will transform them
              into fully playable online games using WebAssembly.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/create-game">Create Your Game</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/browse-games">Play Games</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              How It Works
            </h2>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">1. Write Your Rules</h3>
                  <p className="text-sm text-muted-foreground">
                    Create your board game rules using our Markdown editor with live preview.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">2. AI Generation</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes your rules and creates a playable WebAssembly implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">3. Play & Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly play your game online with friends or share it with the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Ready to Create Your Own Game?
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start with a simple markdown description of your board game rules, and our AI will transform it
              into a playable game in minutes.
            </p>
            <div className="flex flex-col gap-4">
              <Button asChild size="lg">
                <Link to="/create-game">Create a Game</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/browse-games">Browse Games</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 