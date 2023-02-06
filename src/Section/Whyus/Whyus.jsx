import React from 'react'
import './Whyus.css'
import CardItem from '../../components/CardItem/CardItem'

const Whyus = () => {
  return (
<div className='container' id='Why-Us'>
        <div className='row-whyus-1'>
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6">
                    <CardItem 
                        cardImage ="asset/images/thumbs-up.png"
                        cardTitle ="Mobil Lengkap   "
                        cardText= "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
                    />
                </div>
                <div className="col-12 col-lg-3 col-md-6">
                    <CardItem 
                        cardImage ="asset/images/icon_price.png"
                        cardTitle ="Harga Murah"
                        cardText= "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
                    />
                </div>

                <div className="col-12 col-lg-3 col-md-6">
                    <CardItem 
                        cardImage ="asset/images/icon_24hrs.png"
                        cardTitle ="Layanan 24 Jam"
                        cardText= "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
                    />
                </div>

                <div className="col-12 col-lg-3 col-md-6">
                    <CardItem 
                        cardImage ="asset/images/icon_professional.png"
                        cardTitle ="Sopir Profesional"
                        cardText= "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
                    />
                </div>
            </div>
</div>

  )
}

export default Whyus
