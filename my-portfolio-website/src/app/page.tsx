import React from 'react'
import HomeMy from './home/page'
import About from './about/page'
import ProjectsPage from './project/page'
import ContactPage from './contact/page'



const Home = () => {
  return (
  
    <div>


      <HomeMy/>
      <About/>
     <ProjectsPage/>
     <ContactPage/>
    </div>
   
  )
}

export default Home