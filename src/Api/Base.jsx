import React from 'react'
import axios, {Axios} from 'axios'

const Base = axios.create ({
    baseURL:`${process.env.REACT_APP_BASE_BINAR_URL}`,
    timeout: 15000
})



  export default Base;
