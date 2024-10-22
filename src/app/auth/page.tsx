import { AuthForm } from "./_components/auth-form";
import { auth } from '@/services/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await auth()
  if (session) return redirect('/app')

  return (
    <main className="flex items-center justify-center h-screen">
      <AuthForm />
    </main>
  )
}