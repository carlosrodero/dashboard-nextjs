import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FourOhFour() {
  return <main className='h-screen w-screen flex justify-center items-center flex-col gap-3'>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <Button variant="outline">
        Go to home
      </Button>
    </Link>
  </main>
}