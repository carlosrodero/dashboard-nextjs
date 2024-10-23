import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function FourOhFour() {
  return <main className='h-screen w-screen flex justify-center items-center flex-col gap-6'>
    <h1 className='text-4xl'>👋 Hello world</h1>
    <Link href="/app">
      <Button variant="outline">
        Go to dashboard
      </Button>
    </Link>
  </main>
}