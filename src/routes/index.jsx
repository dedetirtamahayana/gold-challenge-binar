import React from 'react'
import Home from '../Pages/Home/Home'
import SearchCar from '../Pages/SearchCar/SearchCar'
import CarDetail from '../Pages/CarDetail/CarDetail'

const routes = () => {
  return [
    {
        path:'/',
        element: <Home/>

    },
    {
      path:'/#Testimonial',
      element: <Home/>

  },
    {
        path:'/home',
        element: <Home/>

    },
    
    {
        path:'/search-car',
        element: <SearchCar/>

    },
    {
      path:'/car-detail/:id',
      element: <CarDetail/>

  }
  ]
}

export default routes
