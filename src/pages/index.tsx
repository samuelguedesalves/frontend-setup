import React from 'react'
import Head from 'next/head'

import { Navbar } from '../styles/Home.styles'

import Image from '../assets/image.jpg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>
      <main>
        <Navbar>
          <div className="container">
            <div className="logo-block">
              <h1>Blog Startup</h1>
            </div>
            <div className="menu-block">
              <ul>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Contato</li>
              </ul>
            </div>
          </div>
        </Navbar>
      </main>
    </div>
  )
}

export default Home
