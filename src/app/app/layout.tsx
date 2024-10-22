import { PropsWithChildren } from 'react'
import { MainSidebar } from './_components/main-sidebar'
import { auth } from '@/services/auth'
import { redirect } from 'next/navigation'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()
  if (!session) return redirect('/auth')

  return (
    <div className="grid grid-cols-[14rem_1fr]">
      <MainSidebar user={session?.user} />
      <main>{children}</main>
    </div>
  )
}
