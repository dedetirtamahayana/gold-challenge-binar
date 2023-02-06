import React from 'react'
import './Bestcar.css'

function Bestcar() {
  return (
        <div className='container section-bestcar d-block d-md-flex'>
            <div className='col-lg-6 row-bestcar-1'>
                <img className='image-bestcar' src="asset/images/bestcar.png" alt="" />
            </div>


            <div className='col-lg-6 row-bestcar-2'>
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p className='fw-bold'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                    kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    <li className='fw-bold'>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                    <li className='fw-bold'>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                    <li className='fw-bold'>Sewa Mobil Jangka Panjang Bulanan</li>
                    <li className='fw-bold'>Gratis Antar - Jemput Mobil di Bandara</li>
                    <li className='fw-bold'>Layanan Airport Transfer / Drop In Out</li>
                </ul>
            </div>
        </div>
  )
}

export default Bestcar
