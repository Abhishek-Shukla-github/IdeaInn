import Header from '@/components/landing-page/header'
import React from 'react'

const HomePageLayout = ({children}) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default HomePageLayout