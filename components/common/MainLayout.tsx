import { ReactNode } from 'react'
import Header from './Header'

type MainLayoutProps = {
  children: ReactNode
}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}