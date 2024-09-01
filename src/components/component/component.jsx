
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gradient-to-r from-[#5b21b6] to-[#ec4899] py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">SOLTRUST</h1>
              <p className="max-w-[600px] text-lg text-primary-foreground">
                Empowering the future of decentralized finance through Solana Technology and community-driven
                development.
              </p>
            </div>
            <div className="w-full max-w-md space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Parth Nath Chauhan" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="parthnath@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="wallet">Wallet Address (optional)</Label>
                  <Input id="wallet" type="text" placeholder="0x123456789abcdef" />
                </div>
                <Button type="submit" className="w-full">
                  Join the Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Decentralized Finance, Blockchain, and Community
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Sol Trust is a decentralized finance platform built on blockchain technology, empowering users to take
                  control of their financial future. Our community-driven development ensures that the platform evolves
                  to meet the needs of our users.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center gap-2">
                  <BitcoinIcon className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Blockchain</h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Secure and transparent transactions powered by blockchain technology.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center gap-2">
                  <NetworkIcon className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Decentralized</h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Decentralized finance platform that puts you in control of your assets.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center gap-2">
                  <GroupIcon className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Community-Driven</h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Our platform evolves based on the needs and feedback of our community.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4 flex flex-col items-center justify-center gap-2">
                  <WalletIcon className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">Secure Wallet</h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Securely store and manage your digital assets with our built-in wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 w-full shrink-0">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <a  href="https://www.linkedin.com/in/parth26nath/" className="text-xs text-muted-foreground">&copy; created By Parth Nath Chauhan @PNC</a>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="https://www.linkedin.com/in/parth26nath/" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              SOLTRUST-WAITINGLIST
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              COMMING SOON
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BitcoinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  )
}


function GroupIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function NetworkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
