import React from 'react'
import { CheckToken } from '../api/CheckToken'
import Header from '../Components/layout/Header'
import Body from '../Components/layout/Body'
export default function Home() {
  CheckToken()
  return (
    <div>
      <Body />
    </div>
  )
}
