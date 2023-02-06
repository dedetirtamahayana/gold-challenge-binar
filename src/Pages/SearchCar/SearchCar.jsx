import React, {useState, useEffect} from 'react';
import './SearchCar.css';
import Navbar from '../../Section/Navbar/Navbar';
import Banner from '../../Section/Banner/Banner';
import Footer from '../../Section/Footer/Footer';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SearchCar = () => {
const navigate = useNavigate();
const [search, setSearch] = useState({
    name: null
})
const LoadDetail = (id)=>{
  navigate('/car-detail/'+id);
  }
  const [selectCar, setSelectCar] = useState([])
    const onSearchChange = (ev, key) => {
      setSearch((prevState) => {
      const data = prevState;
      data[key] = ev.target.value;

      return data;
    })
  }

      const GetCar = async () => {
         try {
          const config ={
            headers:{
              access_token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTY3NjAzNX0.INrglYTuezfGnHxU43ibOnP0bikI8zKefoY38cq_71g'
            },
            params:{
              name: search.name
            }

        }
          const {data} = await axios.get (`${process.env.REACT_APP_BASE_BINAR_URL}/admin/v2/car`, config)
          setSelectCar(data.cars)
          // console.log('data',data)
          // console.log (selectCar)
          // console.log(search)
       }
       catch {
        console.log('err')

       }
    }


  return (
    <div>
    <Navbar/>
    <Banner/>
  
      <div className='section-search-car mb-5'>
        <div className='container container-search-car'>
        <form action="">
          <div className='row row-search-car border bg-white'>
            <div className='col-12 col-lg-2 d-flex p-0'>
              <div className="mb-3 input-car">
                <label className="form-label">Nama Mobil</label>
                <input type="text" className="form-control" id="name" placeholder="Ketik nama/tipe mobil"
                onChange={(ev) => onSearchChange(ev, 'name')}/>
              </div>
              </div>
              <div className='col-12 col-lg-2 d-flex p-0'>
              <div className="mb-3 input-car">
                <label className="form-label">Kategori</label>
                <select className="form-select" aria-label="Masukan Kapasitas Mobil">
                  <option defaultValue={'DEFAULT'}>Masukan Kapasitas Mobil</option>
                  <option value="1"  onChange={(ev) => onSearchChange(ev, 'category')}>2 - 4 orang</option>
                  <option value="2">4 - 6 orang</option>
                  <option value="3">6 - 8 orang</option>
              </select>
            </div>

            </div>
             <div className='col-12 col-lg-3 d-flex p-0'>
            <div className="mb-3 input-car">
                <label className="form-label">Harga</label>
                <select className="form-select" aria-label="Masukan Harga Sewa per Hari">
                  <option defaultValue={'DEFAULT'}>Masukan Harga Sewa per Hari</option>
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
              <button type="button" className="btn btn-car w-75" onClick={GetCar}>Cari Mobil</button>
            </div>
          </div>
          </form>
        </div>
      </div>
        
        
        <div className='container'>
            <div className='row d-flex'>
            {
              selectCar.map((item) => (
                <div key={`key-${item.id}`} className="col-12 col-lg-4 mb-3">
                  <Card className="h-100">
                    <Card.Img
                      src={item.image}
                      className="d-lg-block card-img-custom"
                    />
                    <Card.Body>
                      <div className="row">
                      <p className="pw-medium">{item.name}</p>
                          <strong className='pw-bold'>{item.price} / hari</strong>
                          <p className="pw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </p>
                      </div>
                      <Button onClick={()=>{LoadDetail(item.id)}}>
                        Pilih Mobil
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            }
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default SearchCar
