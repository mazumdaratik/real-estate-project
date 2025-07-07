
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CondominiumForm from './components/condominum-info/CondominiumForm'
import PropertyAddress from './components/condominum-info/modals/PropertyAddress'

function App() {
  

  return (
    <div>
    <Navbar/>
    {/* <Home /> */}
    <CondominiumForm />
    <PropertyAddress/>
    <Footer />
    </div>
  )
}

export default App
