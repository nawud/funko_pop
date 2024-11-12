import Header from '../organisms/Header/Header'
import Footer from '../organisms/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    
    <Footer/>
      
    </>
  )
}

export default Layout
