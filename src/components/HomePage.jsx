// eslint-disable-next-line no-unused-vars
import React from 'react'
import FakeRegistrationPage from './FakeRegistrationPage'
import FakeDetailBoxes from './FakeDetailBoxes'
import FakeRegistrationHeader from './FakeRegistrationHeader'
import Copyright from './Copyright'

const HomePage = () => {
    return (
        <div className='HomePageWrapper relative  justify-center 
             w-full h-screen'>
             <div className='TopDiv fixed top-0 left-0 z-50'>   
             <FakeRegistrationPage />
             </div>
             <div className='fixed top-[5.8rem] w-screen z-50'>
                <FakeRegistrationHeader />
             </div>
             <Copyright />
             <div className='mt-[7rem] z-0'>
              <FakeDetailBoxes />  
             </div>
             <Copyright />
        </div>
   
    )
}

export default HomePage

