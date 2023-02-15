import { useState } from 'react'
import './styles/sass/config/_index.scss'

import Nav from './components/Nav'
import Header from './components/Header'
import Steps from './components/Steps'
import Footer from './components/Footer'
import Destination from './components/Destination'

const App: React.FC<{}> = () => {
  return (
    <>
      <div className='container'>
        <Nav />
        <main>
          <Header />
          <Steps />
          <Destination />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
