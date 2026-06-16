

const category=[
    {type:"Running"},
    {type:"Jordan"},
    {type:"Sandal, Sliders and Flipflop"},
    {type:"Tennis"},
    {type:"Lifestyle"},
    {type:"Training and Gym"},
    {type:"Basketball"},
    {type:"Skateboarding"},
    {type:"Walking"},
    {type:"Athletics"},
    {type:"Football"},
]


const filters=[
    {name:"Size"},
    {name:"Shop By Price"},
    {name:"Brand"},
    {name:"Discount"},
    {name:"Product Label"},
    {name:"Launched In"},
    {name:"Colours"},
    {name:"Sports"},
    {name:"Width"},
    {name:"Shoe Height"},
    {name:"Pack Size"},

    {name:"Collections"},
    {name:"Technology"},
    {name:"Cushoning"},
    {name:"Material"},
    {name:"Surface"},
    {name:"Air Max"},
    {name:"Shoe Feel"},
    {name:"Cushoning Type"},
    {name:"Best For"},
    {name:"Benefits"},
    {name:"Atheletes"},
    {name:"Run Type"},
    {name:"Closure"},
    {name:"Features"},

]

export default function Sidebar(){
    return(
        <div className="w-[260px] h-auto pb-4 pl-12">
          <div className="w-[240px]">
            <div className="flex flex-col justify-around w-[192px] h-[396px] mb-4 pb-4">
                {category.map((item,index)=>(
                    <div key={index} className="w-full h-auto text-[16px] font-semibold">
                        <p>{item.type}</p>
                        
                    </div>
                ))}
            </div>

            {/* reset button */}
            <div className="flex justify-center w-[192px] h-[45px] pb-3">
                <button className="w-full border rounded-full">Reset</button>

            </div>
          </div>

        
         {/* filters */}
          <div className="w-[240px]">

            {filters.map((item,index)=>(
                <div className="w-[192px] h-[58px] pb-1">
                <div className="flex justify-between w-full py-3 pr-2.5 h-[48px]">

                    {/* filter */}
                    <div className="w-auto">
                        {item.name}

                    </div>

                    {/* expand arrow */}
                    <div> 
                        <img className="size-5" src="" alt="" />
                    </div>

                </div>

                {/* horizontal line */}
                <div className="w-full h-[1px] bg-gray-300"></div>

            </div>

            ))}
            
          </div>

        </div>
    )
}