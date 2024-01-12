// eslint-disable-next-line no-unused-vars
import React from 'react'
import DarkMode1 from './Darkmode1.png'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import NewEye from './NewEye.png'
const FakeAddressBar = () => {
    return (
        <>
<div>


    <div className='relative flex z-10  h-[44px] pt-[5px] ml-[-4px] bg-[#35373b]'>
     <div className='DotsContainer border border-red-500 rounded-br-2xl bg-black w-fit p-[4px]'>
        <span className='relative  inline-block RoundDots w-[15px] h-[15px]
                rounded-full  border-transparent  bg-red-800 mx-1 z-10'
                 style={{ boxShadow: 'inset 0px 0px  7px  rgb(234 173 12)' }}>
        </span>    
        <span className='relative inline-block RoundDots w-[15px] h-[15px]
                rounded-full  border-transparent bg-yellow-700 mx-1 z-10'
                style={{ boxShadow: 'inset 0px 0px   7px rgb(253 224 171)   ' }}>
        </span>    
        <span className='relative inline-block RoundDots w-[15px] h-[15px]
                rounded-full  border-transparent bg-green-700 mx-1 z-10'
                style={{ boxShadow: 'inset 0px 0px   7px rgb(22 230 74)' }}>
        </span>    
      </div>
         
    <div className='NewTab relative justify-evenly w-[10rem] h-[40px] mt-[-4px] pl-[1.5rem] pt-[.3rem] inline-block  border-2 border-[#35373b] rounded-tl-xl bg-[#35373b]
         '><span className='InTheFlexTabWords font-bold font-serif text-[#FFe0d1]' >In-The-Flesh
        
         </span>
       
    </div>
    <div className='EyeballSpan relative inline-block mt-[-4px] ' style={{ width: '40px' }}>
        <img src={NewEye} alt="New Eye" />
    </div>
    <div className='EyeballSpan2 relative inline-block text-gray-500 mt-[-4px] height[40px] w-[44px] pt-[.4rem] font-extrabold bg-[#35373b] rounded-tr-xl' >
      &nbsp;&nbsp;&nbsp;&nbsp;x    
    </div>

    </div>




                <div className='relative flex justify-center '>

                   {/*  
                    <div className='DarkModeFakeTab absolute -top-0 w-screen'>
                        <img src={DarkMode1} alt="DarkMode1" ></img>
                    </div>
 */}

                    <div className='FakeTabContainer relative flex-row justify-start border-2 border-blue-700 w-screen'>
                        <span className='ArrowLeft relative inline-block pl-4 '>
                            <FaArrowLeft />
                        </span>
                        <span className='ArrowLeft relative inline-block pl-4 '>
                            <FaArrowRight />
                        </span>
                        <span className='RefreshButton relative inline-block pl-4'>
                            <MdRefresh  /> 
                        </span>
                    </div>
                </div>
</div>
        </>
    )
}

export default FakeAddressBar
   












  