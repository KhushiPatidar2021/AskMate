import React from 'react'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()

function goToAi(){
  navigate('/ask')
}

function goToHistory(){
  navigate('/history')
}
  return (
    <div className='flex flex-col gap-6 justify-center items-center h-screen p-8 md:p-2'>
        <h1 className='text-[#B7A3E3]  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'> Hello, Welcome to Askmate</h1>
<div className='flex flex-col gap-2 justify-center items-center ' >
    <Button text={"Ask Ai"}  onClick={goToAi}  className={'bg-[#BBD5DA]'}/>
    <Button text={'Go to History'} onClick={goToHistory}  className={'bg-[#BBD5DA]'}/>
</div>
    </div>
  )
}

export default Home

