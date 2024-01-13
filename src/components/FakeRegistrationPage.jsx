// eslint-disable-next-line no-unused-vars
import React from 'react'
import DarkMode1 from './Darkmode1.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import NewEye from './NewEye.png'
import { BsIncognito } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { PiCarrotDuotone } from "react-icons/pi";

const FakeRegistrationPage = () => {
    return (
        <>
<div>


    <div className=' relative flex z-10  h-[44px] pt-[5px] ml-[-4px] bg-[#000]
                    outline outline-black z-50'>
                        
        <div className='DotsContainer relative inline-block mt-[-4px] pl-4 pr-2  outline outline-black
                 rounded-br-3xl bg-black w-[5.9rem] p-[2px]'>
        <span className='RoundDots relative  inline-block   w-[15px] h-[15px]
                rounded-full  border-transparent  bg-red-800 mt-[12px] mx-1 z-10'
                 style={{ boxShadow: 'inset 0px 0px  7px  rgb(234 173 12)' }}>
        </span>    
        <span className='RoundDots relative inline-block   w-[15px] h-[15px]
                rounded-full  border-transparent bg-yellow-700 mt-[12px] mx-1 z-10'
                style={{ boxShadow: 'inset 0px 0px   7px rgb(253 224 171)   ' }}>
        </span>    
        <span className='RoundDots relative inline-block  w-[15px] h-[15px]
                rounded-full  border-transparent bg-green-700 mt-[12px] mx-1 z-10'
                style={{ boxShadow: 'inset 0px 0px   7px rgb(22 230 74)' }}>
        </span>    
      </div>
         

    <div className='topTabWrapper relative inline-block justify-self-stretch w-fit h-fit
           
           outline outline-[#35373b] rounded-t-2xl bg-[#35373b] z-50 '>

            
            <span className='InTheFlexTabWords relative inline-block pr-4 pl-2 font-bold font-serif text-[#FFe0d1] ' >In-The-Flesh
            </span>
         <img src={NewEye} alt="New Eye" className='EyeballSpan relative inline-block pb-2  w-fit h-fit ' style={{ width: '30px' }}></img> 
     
            <span className='EyeballSpan2   relative inline-block text-gray-500   
            pt-[.4rem] pr-4 font-extrabold bg-[#35373b] rounded-tr-xl' >
                    &nbsp;&nbsp;&nbsp;&nbsp;x    
            </span>
            <span className='EyeballSpan4'></span>
 </div>
      <div className='vpnContainer absolute right-[7rem] top-[10px] '>
           <p className='relative flex hidden sm:inline-block font-semibold text-red-600 '> VPN </p>
           
      </div>
      
      <div className='vpnContainer absolute right-[2.9rem] top-[10px]  '>
          
           <p className='relative flex hidden xs:inline-block text-green-600'> Enabled </p>
      </div>
      <div className='vpnContainer absolute right-[1rem] top-[10px] text-[22px] '>
           <p className='relative flex hidden xs:inline-block font-semibold text-red-600 z-50 '> <PiCarrotDuotone /> </p>
           
      </div>
     
       
     
</div>




                <div className='relative flex justify-center '>

                 
   
                    {/* <div className='DarkModeFakeTab absolute -top-0 w-screen'>
                        <img src={DarkMode1} alt="DarkMode1" ></img>
                    </div> */}

                    <div className='FakeTabContainer relative flex-row justify-start border-b-2  border-slate-900  w-screen shadow-md shadow-black w-fit '>
                        <div className='ArrowsWrapper relative inline-block  top-[.2rem] '>
                        <span className='ArrowLeft relative hidden xs:inline-block pl-4 pt-2 text-slate-400 text-[18px]'>
                            <FaArrowLeft />
                        </span>
                        <span className='ArrowLeft relative hidden xs:inline-block pl-4 pt-2 text-slate-400 text-[18px] '>
                            <FaArrowRight />
                        </span>
                        <span className='RefreshButton relative hidden sm:inline-block pl-4 pt-2 text-slate-400  text-[22px]'>
                            <MdRefresh  /> 
                        </span>
                        </div>
                        <div className='SearchBar relative inline-flex justify-start ml-8 mt-[0rem]
                          w-[82%]  xs:w-[55%] sm:w-[50%] md:w-[60%] xxl:w-[80%] h-[3rem]   z-50

                         '>
                            <div className='inputSearch relative flex justify-start mt-[.75rem] border-2 border-gray-500 w-full h-8 rounded-3xl bg-black '>
                            <span className='PrivateBox relative inline-flex pt-1 pl-4 '><MdLock /></span>
                            <p className='relative flex inline-block text-gray-10 top-[.1rem]'
                            >&nbsp;&nbsp;https://intheflesh <span className='text-gray-500'>/register</span> </p>
                            </div>

                         </div>
                        <div className='SearchBar relative  justify-start ml-8 mt-[-1rem]  h-[3rem] 
                              hidden  md:inline-flex w-[10%] lg:w-[18%]  '> 
                            

                         </div>
                         <div className='vpnContainer absolute hidden xs:inline-block text-[27px]  right-[2.5rem]  text-slate-500 top-[8px]'>
                          <p className='relative flex hidden xs:inline-block  '><BsIncognito /> </p>
                         </div>
                         <div className='vpnContainer absolute text-[27px] right-[1rem] xxs:-right-0 text-slate-500 top-[12px]'>
                          <p className='relative flex inline-block'><HiDotsVertical  /> </p>
                         </div>

                    </div>
                    
                </div>
</div>
        </>
    )
}

export default FakeRegistrationPage
   












  