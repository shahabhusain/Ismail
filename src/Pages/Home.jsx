import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Clients from '../components/Home/Clients'
import RecentWork from '../components/RecentWork/RecentWork'
import Contact from '../components/Home/Contact'
const Home = () => {
  return (
    <div>
      <Hero />
     <RecentWork />
      {/* <Clients /> */}
      <Contact />
    </div>
  )
}

export default Home