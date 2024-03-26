import Books from "./components/Books"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
    <div className="container mx-auto px-5 md:8 lg:10">
     <Navbar></Navbar>
     <Hero></Hero>
     <Books></Books>
      <Footer></Footer>
    </div>
     
      
      
    </>
  )
}

export default App
