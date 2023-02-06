import React from 'react'
import axios from "axios";
import Base from './Base';

const api= {
    authToken: (body, params) => Base.post('/admin/auth/login', body, { params }),

    getCars: (params) => Base.get('/admin/v2/car', { params }),
  
}

export default api
