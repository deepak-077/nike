"use client" 

import Sidebar from "./Sidebar"
import { useRouter } from "next/navigation"

const shoes=[
  
  {
    img:"air max plus 3.jpg",
    name:"Nike Air Max Plus 3",
    type:"Men's Shoes",
    colours:["bg-[#663300]","bg-blue-900"],
    price:"17,495",
    route:"/airmax3"
  },
  {
    img:"pegasus.jpg",
    name:"Nike Pegasus Premium",
    type:"Men's Road Running Shoe",
    colours:[],
    price:"19,695",
    route:"/"

  },
  {
    img:"quest6.jpg",
    name:"Nike Quest 6",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white","bg-[#663300]"],
    price:"4,895",
    route:"/"
  },
  {
    img:"downshifter 14.jpg",
    name:"Nike Downshifter 14",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white"],
    price:"4,895",
    route:"/"
  },
  {
    img:"air jordan1.jpg",
    name:"Air Jordan 1 Low",
    type:"Nike Air Jordan 1 Low Men's Shoes",
    colours:["bg-blue-900","bg-gray-500"],
    price:"8,995",
    route:"/"
  },
  {
    img:"jordan retro.jpg",
    name:"Air Jordan 1 Retro High OG Flight Club",
    type:"Men's Shoes",
    colours:[],
    price:"16,995",
    route:"/"
  },
  {
    img:"calm.jpg",
    name:"Nike Calm 2.0",
    type:"Men's Slides",
    colours:["bg-black","bg-[#663300]"],
    price:"3,895",
    route:"/"
  },
  {
    img:"airforce 1.jpg",
    name:"Nike Air Force 1 '07",
    type:"Men's Shoes",
    colours:["bg-[#808080]","bg-[#663300]"],
    price:"9,695",
    route:"/"
  },
  {
    img:"downshifter.jpg",
    name:"Nike Downshifter 14",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white"],
    price:"4,895",
    route:"/"
  },
  
  
  {
    img:"AIR max plus 8.jpg",
    name:"Nike Air Max Plus VII",
    type:"Men's Shoes",
    colours:["bg-[#FF0000]","bg-[#000000]"],
    price:"13,595",
    route:"/"
  },
  {
    img:"metcon7.jpg",
    name:"Nike Free Metcon 7",
    type:"Men's Training Shoes",
    colours:["bg-[#FFFFFF]","bg-[#000000]","bg-[#808080]"],
    price:"11,295",
    route:"/"
  },
  {
    img:"zoom blazer.jpg",
    name:"Nike SB Zoom Blazer Low Pro GT",
    type:"Skate Shoes",
    colours:["bg-[#FFFFFF]","bg-[#000000]"],
    price:"6,795",
    route:"/"
  },
]

export default function Things(){
  const router = useRouter()
    
    return(
      <div className="flex justify-between items-center py-6 h-auto ">

        {/* sidebar */}
        <Sidebar/>
        

        {/* things */}
        <div className="pr-12 pl-10 h-auto">
          <div className=" grid grid-cols-3 w-[1122px] h-auto gap-3.5 ">

            {shoes.map((item,index)=>(
            <div key={index} className="w-[366px] h-auto hover:cursor-pointer mb-12" onClick={()=>{
              router.push(item.route)
            }}>
            
                {/* image */}
                <img className="size-[366px]" src={item.img} alt="" />

                {/* name and details */}
                <div className="flex flex-col justify-center w-[336px] pt-[12px] w-full h-[116px] gap-0.5">
                  {/* name */}
                  <div className="h-6 font-semibold">{item.name}</div>
                  <div className="h-6">{item.type}</div>

                  
                  {item.colours && item.colours.length>0 && (
                    <div className={`flex gap-1.5 h-4 mt-1}`  }>
                      {item.colours.map((color)=>(
                        <div className={`size-4 rounded-full border border-gray-400 ${color}`}></div>
                      ))}
                    </div>
                  )}
                  
                  <div className="h-6 font-semibold" mt-2>{item.price}</div>
                </div>
            </div>
          
            ))} 
            </div>         
        </div>
      
      </div>

    )
}