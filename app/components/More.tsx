"use client"

import { useRouter } from "next/navigation"


const moreShoes= [
{
    img:"pegasus.jpg",
    name:"Nike Pegasus Premium",
    type:"Men's Road Running Shoe",
    colours:[],
    price:"19,695",
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
]

export default function More(){
    const router=useRouter()
    
    return(
        <div className="flex flex-col items-center justify-center w-[1470px] h-[626px] pl-12 mb-12">
            
            {/* title */}
            <div className="flex justify-between w-full h-[48px] mb-3 ml-4">
                <h1 className="text-[24px] font-medium">More From Men Lifestyle</h1>
                <div className="w-[100px] h-[46px] mr-6">
                    
                    <button className="size-[46px] px-[6px] py-[1px]">
                        <img src="" alt="" />
                    </button>

                    <button className="size-[46px] px-[6px] py-[1px]">
                        <img src="" alt="" />
                    </button>
                </div>
            </div>

            
            {/* related shoes */}
            <div className="flex  w-[1438px] h-[566px]">
                {moreShoes.map((item,index)=>(
            <div key={index} className="w-[450px] h-auto hover:cursor-pointer" onClick={()=>{
              router.push(item.route)
            }}>
            
                {/* image */}
                <img className="size-[450px]" src={item.img} alt="" />

                {/* name and details */}
                <div className="flex flex-col justify-center w-[450px] pt-[12px] w-full h-[116px] gap-0.5">
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
    )
}