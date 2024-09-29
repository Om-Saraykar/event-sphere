import React from 'react'
import { useState,useEffect } from 'react'
import Hackcard from './Hackcard'

const Hackathons = () => {
  const user = (sessionStorage.getItem('name'))
  const [hack,setHack]=useState([])
  const [isEmpty,setIsEmpty] = useState(true)
  
  const getHack = async() =>{
    let req = await fetch("http://localhost:3000/")
    let data =await req.json()
    if(data){
      setHack(data)
      setIsEmpty(false);

    }
  }

  useEffect(()=>{
    getHack();
  },[])

  
  return (
    
      
      <section className='h-[91vh] bg-doodle w-full flex items-center justify-center overflow-hidden'>
        <div className='h-[80vh]w-full ml-12 mb-24 flex flex-col mr-12'>
          <h1 className='text-6xl text-center font-extrabold bg-black text-white'>Hackathons</h1>
          <div className="h-[70vh] w-full text-white overflow-auto mt-7">
            {
              hack.map((item,key)=>{
                const obj = item.data;
                const id = item.id;
                return(
                <Hackcard key = {key} title={obj.title} desc={obj.desc} prize={obj.prize} min={obj.min} max={obj.max} duration={obj.duration} date={obj.date} id={id}/>
                
                )
              })
            }
          </div>
            {isEmpty && <div className='rounded h-[37vh] p-4 text-3xl font-extrabold mt-12 ml-24 text-center mb-24 bg-black text-white'>No hackathons available! Come later for more.</div>}
        
        </div>
      
    </section>
    

  )
}

export default Hackathons
