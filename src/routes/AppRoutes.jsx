import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { QrPageLogic } from '../pages/QrPageLogic'
import { RegisterPage } from '../pages/RegisterPage'

export const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<RegisterPage/>}/>

    {/*Find user */}
    <Route path="/:code" element={<QrPageLogic/>} />
    </Routes>
  )
}
