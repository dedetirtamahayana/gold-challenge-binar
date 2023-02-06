import React from 'react'
import './Banner.css'
import { useNavigate } from 'react-router';
import Image from '../../images/car.png'

const Banner = () => {
  const Navigate = useNavigate();
  return (
    <section className="heroSection">
    <div  className="heroContentNew heroContent">
      <div  className="heroTitle">
        <h1>Sewa &amp; Rental Mobil Terbaik di kawasan Jawa Timur</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil
          kualitas terbaik dengan harga terjangkau. Selalu siap melayani
          kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
        <div  className="hero-button">
            <button type="button"  className="btn btn-success" onClick={()=>Navigate('/search-car')}>
              Mulai Sewa Mobil
            </button>
        </div>
      </div>
    </div>
    <div  className="heroContentNew heroImage">
      <img src={Image} alt="img-car" width="100%" height="auto" />
    </div>
  </section>
  )
}

export default Banner
