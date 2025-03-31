

import { Suspense } from 'react'
import './App.css'
import Bottoles from './Components/Bottoles/Bottoles'

const bottolesPromise=fetch('/bottole.json')

function App() {
  

  return (
    <>
      <h1>Awesome BOttle oN Buy on the market</h1>
      <Suspense fallback={<h2>bottole is comming soone;;;,,,,,,,,,,,,,</h2>
      }>
        <Bottoles bottolesPromise={bottolesPromise}></Bottoles>
  </Suspense>
     
    </>
  )
}

export default App
