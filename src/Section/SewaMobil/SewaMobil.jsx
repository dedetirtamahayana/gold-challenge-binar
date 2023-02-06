import React from 'react'
import { Button } from 'react-bootstrap'
import './SewaMobil.css'
const SewaMobil = () => {
  return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg 12'>
                    <div className='border sewa-mobil text-center'>
                        <h2 className='text-white'>Sewa Mobil di (Lokasimu) Sekarang</h2>
                        <p className='w-50 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <Button>
                            Mulai Sewa Mobil
                        </Button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SewaMobil
