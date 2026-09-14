import { AboutPage } from '@/components/component/about-page'
import { Founders } from '@/components/component/founders'
import { Values } from '@/components/component/values'
import React from 'react'

function page() {
  return (
    <div>
      <Founders />
      <AboutPage />
      <Values/>
    </div>
  )
}

export default page
