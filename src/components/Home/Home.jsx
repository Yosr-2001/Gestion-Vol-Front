import { useEffect } from 'react'


import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
import FlightSearch from '../Search/Search'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <Navbar />
      <div className='home flex container'>

        <div className="hero">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/749/007/large_2x/airplane-in-sky-background-free-photo.jpg"
            alt="Airplane in Sky"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Your Journey Starts Here</h1>
            <p className="hero-subtitle">
              Discover destinations, book flights, and travel with ease.
            </p>
            <div className="cta-buttons">
              <Link to="/search">
                <Button className="cta-primary" >Search Flights</Button></Link>

            </div>
          </div>
        </div>



      </div >


    </>

  )
}

export default Home
