import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Body() {
    return (
        <div className='container-fluid bg-body'>
            <Header />
            <Content />
        </div>
    )
}
