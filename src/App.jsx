import { useState } from 'react'
import Header from'./component/header'
import Footer from './component/footer'
import SliderComponent from './component/swiper'
import Content from './component/side'
import './App.css'
import Checked from './component/maincol1'

function App() {

  return (
    <>
    <Header />
    <SliderComponent />
    <Content />
    <Checked />
    <Footer />
    </>
  )
}

export default App
