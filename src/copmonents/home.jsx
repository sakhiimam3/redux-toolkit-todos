import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
       
     <section className='home'>
        <div>
             <h2>Welcome in redux todo lists</h2>
         <NavLink to="/todo"> <button>Simple todo redux</button> </NavLink> 
         <NavLink to="/todoapi"> <button> Todo with api call redux</button> </NavLink> 

       
        </div>
     </section>
    
      
    </>
  )
}

export default Home