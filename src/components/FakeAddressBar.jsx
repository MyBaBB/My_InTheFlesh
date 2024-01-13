// eslint-disable-next-line no-unused-vars
import React from 'react'
import DarkMode1 from './Darkmode1.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import NewEye from './NewEye.png'
import { BsIncognito } from "react-icons/bs";

const FakeAddressBar = () => {
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
      <div className='vpnContainer absolute right-[8rem] top-[10px] '>
           <p className='relative flex inline-block font-semibold text-red-600 '> VPN </p>
           
      </div>
      <div className='vpnContainer absolute right-[3.5rem] top-[10px]  '>
          
           <p className='relative flex inline-block text-green-600'> Enabled </p>
      </div>
      <div className='vpnContainer absolute text-[27px] right-[1rem] text-slate-500 top-[10px]'>
          
           <p className='relative flex inline-block'> <BsIncognito /></p>
      </div>
       
     
</div>




                <div className='relative flex justify-center '>

                 
   
                    {/* <div className='DarkModeFakeTab absolute -top-0 w-screen'>
                        <img src={DarkMode1} alt="DarkMode1" ></img>
                    </div> */}

                    <div className='FakeTabContainer relative flex-row justify-start border-b-2  border-slate-900  w-screen shadow-md shadow-black w-fit '>
                        <div className='ArrowsWrapper relative inline-block border p-1 border-blue-300'>
                        <span className='ArrowLeft relative inline-block pl-4 py-2 text-slate-400 text-[18px]'>
                            <FaArrowLeft />
                        </span>
                        <span className='ArrowLeft relative inline-block pl-4 py-2 text-slate-400 text-[18px] '>
                            <FaArrowRight />
                        </span>
                        <span className='RefreshButton relative inline-block pl-4 py-2 text-slate-400 text-[20px]'>
                            <MdRefresh  /> 
                        </span>
                        </div>
                        <div className='SearchBar relative inline-flex justify-start ml-8 mt-[-1rem] w-[70%] h-[3rem] outline outline-red-500 z-50
                         '>
                            <div className='inputSearch relative flex justify-start mt-2 border-2 border-gray-500 w-full h-8 rounded-3xl '>
                              
                            </div>

                         </div>
                    </div>
                    
                </div>
</div>
        </>
    )
}

export default FakeAddressBar
   












  