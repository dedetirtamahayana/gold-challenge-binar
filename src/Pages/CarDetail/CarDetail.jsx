import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../../Section/Navbar/Navbar';
import Banner from '../../Section/Banner/Banner';
import Footer from '../../Section/Footer/Footer';
import './CarDetail.css'

const CarDetail = () => {
  const {id} =useParams();

  const[dataCar,carDataChange]= useState({})

  const GetCar = async () => {
    try {
     const config ={
       headers:{
         access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTY3NjAzNX0.INrglYTuezfGnHxU43ibOnP0bikI8zKefoY38cq_71g'
       },
   }
     const {data} = await axios.get (`${process.env.REACT_APP_BASE_BINAR_URL}/admin/car/${id}`, config)
     carDataChange(data)
     console.log('data',data)
  }
  catch {
   console.log('err')

  }
}

  useEffect(() => {
    GetCar ();
  }, []);
  return (
    <div>
    <Navbar/>
    <Banner/>

    <div className='section section-car-detail'>
      <div className='container'>
      <form action="">
      <fieldset disabled>
          <div className='row row-search-car border bg-white'>
            <div className='col-12 col-lg-2 d-flex p-0'>
              <div className="mb-3 input-car">
                <label className="form-label">Nama Mobil</label>
                <input type="text" className="form-control" id="name" placeholder="Ketik nama/tipe mobil"/>
              </div>
            </div>
            <div className='col-12 col-lg-2 d-flex p-0'>
              <div className="mb-3 input-car">
                <label className="form-label">Kategori</label>
                <select className="form-select" aria-label="Masukan Kapasitas Mobil">
                  <option selected>Masukan Kapasitas Mobil</option>
                  <option value="big">2 - 4 orang</option>
                  <option value="2">4 - 6 orang</option>
                  <option value="3">6 - 8 orang</option>
              </select>
            </div>

            </div>
            <div className='col-12 col-lg-3 d-flex p-0'>
            <div className="mb-3 input-car">
                <label  className="form-label">Harga</label>
                <select className="form-select" aria-label="Masukan Harga Sewa per Hari">
                  <option selected>Masukan Harga Sewa per Hari</option>
                  <option value="1"> Rp .400.000</option>
                  <option value="2"> Rp. 400.000 - Rp. 600.000</option>
                  <option value="3"> Rp .400.000</option>
              </select>
            </div>
            </div>
            <div className='col-12 col-lg-3 d-flex p-0'>
            <div className="mb-3 input-car">
                <label className="form-label">Status</label>
                <select className="form-select" aria-label="Disewa">
                  <option selected>Disewa</option>
                  <option value="1"> Disewa</option>
              </select>
            </div>
            </div>
            <div className='col-12 col-lg-2 text-center form-btn'>
              <button type="button" className="btn btn-car w-75">Cari Mobil</button>
            </div>
          </div>
          </fieldset>
          </form>

        <div className='row row-car-detail'>
          <div className='col-12 mb-3 col-lg-6'>
            <div className='border rounded detail-rent'>
              <div className='detail-title'>
                <p className='fw-bold'>Tentang Paket</p>
              </div>
            <strong>Include</strong>
            <ul className='detail-ul'>
              <li> Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li> Sudah termasuk pajak</li>
            </ul>

            <strong>Exclude</strong>
            <ul className='detail-ul'>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>

            <strong>Refund, Reschedule, Overtime</strong>
            <ul className='detail-ul'>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            </div>
          </div>

          <div className='col-12 col-lg-6'>
            <div className='border rounded'>   
              <div className='detail-car text-center'>
                <img className='detail-car-image'src={dataCar.image} alt="" />
              </div>
              <div className='detail-text pb-5'>
                <strong>{dataCar.name}</strong>
                <p>6-8 Orang</p>
              </div>

              <div className='detail-price d-flex pb-5'>
                <div className='col-6 '>
                  <strong>Total</strong>
                </div>
                <div className='col-6 text-end'>
                  <strong>Rp.{dataCar.price}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
      <Footer/>
    </div>
  )
}

export default CarDetail
