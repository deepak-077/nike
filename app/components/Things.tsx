

const shoes=[
  {
    img:"downshifter.jpg",
    name:"Nike Downshifter 14",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white"],
    price:"4,895"
  },
  {
    img:"pegasus.jpg",
    name:"Nike Pegasus Premium",
    type:"Men's Road Running Shoe",
    colours:[],
    price:"19,695"

  },
  {
    img:"quest6.jpg",
    name:"Nike Quest 6",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white","bg-brown"],
    price:"4,895"
  },
  {
    img:"downshifter 14.jpg",
    name:"Nike Downshifter 14",
    type:"Men's Road Running Shoe",
    colours:["bg-black","bg-white"],
    price:"4,895"
  },
  {
    img:"air jordan1.jpg",
    name:"Air Jordan 1 Low",
    type:"Nike Air Jordan 1 Low Men's Shoes",
    colours:["bg-blue","bg-grey"],
    price:"8,995"
  },
  {
    img:"jordan retro.jpg",
    name:"Air Jordan 1 Retro High OG Flight Club",
    type:"Men's Shoes",
    colours:[],
    price:"16,995"
  },
  {
    img:"calm.jpg",
    name:"Nike Calm 2.0",
    type:"Men's Slides",
    colours:["bg-black","bg-brown"],
    price:"3,895"
  },
  {
    img:"t90 sp.jpg",
    name:"Nike T90 SP",
    type:"Men's Shoes",
    colours:[],
    price:"9,695"
  },
  {
    img:"air jordan1 low.jpg",
    name:"Air Jordan 1 Low",
    type:"Nike Air Jordan 1 Low Men's Shoes",
    colours:["bg-brown","bg-blue"],
    price:"8,995"
  },

]


export default function Things(){
    
    return(
      <div className="flex justify-between items-center py-6 h-auto">


        {/* things */}
        <div className="pr-12 pl-10 h-auto">
          <div className=" grid grid-cols-3 w-[1122px] h-[478px] gap-3.5 mb-12">

            {shoes.map((item,index)=>(
            <div key={index} className="w-[366px] h-[452px]">
            
                {/* image */}
                <img className="size-[366px]" src={item.img} alt="" />

                {/* name and details */}
                <div className="flex flex-col justify-center w-[336px] pt-[12px] w-full h-[116px] gap-0.5">
                  {/* name */}
                  <div className="h-6 font-semibold">{item.name}</div>
                  <div className="h-6">{item.type}</div>

                  <div className="h-4 mt-1">
                  {item.colours.map((color)=>(
                      <div className={`size-4 rounded-full bg-${color}`}></div>
                  ))}
                  </div>

                  <div className="h-6 font-semibold" mt-2>{item.price}</div>
                </div>
            </div>
          
            ))} 
            </div>         
        </div>
      
      </div>

    )
}