import React from 'react' 
import Welcome from '../../component/welcome/welcome'
import Carousel from '../../component/slider/slider'
import Sertificate from '../../component/sertificates/sertificate'
import PrivacyPolicy from '../../component/privacypolicy/privacypolicy'
import Footer from '../../component/footer/footer'
import './index.css'


export default function Index() {
  return (
    <div className="app-wrapper">
    <Welcome />
    <Carousel />
    <Sertificate />
    <PrivacyPolicy /> 
    <Footer/>
  </div>
  )
}
