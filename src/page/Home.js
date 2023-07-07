import React from 'react'
import { CheckToken } from '../api/CheckToken'
import Header from '../Components/layout/Header'
export default function Home() {
  CheckToken()
  return (
    <div>
  <Header/>
    </div>
  )
}
