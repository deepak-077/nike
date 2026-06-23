export default function Address(){

    const options=[
        {img:"/tick.png",
         title: "Sign Up"
        },
        {img:"/edit.png",
         title: "Address"
        },
        {img:"",
         title: "Payment"
        }

    ]

    return(
        <div className="flex flex-col items-center justify-center">
            {/* navbar */}
            <nav className="flex justify-around w-[1470px] h-[65px] p-4">
                <div className="flex items-center w-[130px] h-[32px] pr-4 pl-12">
                    {/* logo */}
                    <img className="size-[65px]" src="/logo.svg" alt="" />
                </div>

                {/* Signup */}
                <div className="flex justify-center">
                    {options.map((item,index)=>(
                    <div className="flex items-center h-[32px]">
                        <div className="flex items-center">
                        <div className="flex justify-center w-[77px] h-[32px] pr-3 ">
                            
                            <img className="size-8" src={item.img} alt="" />

                        </div>
                        <p>{item.title}</p>

                        </div>
                        <hr  className="w-[124px] h-[1px] bg-[#E5E5E5] my-[10px] mx-3"/>
                
                    </div>
                ))}

                </div>
                
                
            </nav>



            <div className="w-[1102px] h-[84px] mt-7">
                <div className=" w-[738px] h-[84px]">
                    <p className="w-full h-[48px] mb-1 text-[40px]">Choose Address</p>
                    <p className="w-full h-[24px] mb-1 text-[#707072]">Detailed address will help our delivery partner reach your doorstep quickly</p>
                </div>

            </div>

            <div className="flex justify-between w-[1102px] h-[196px]">
                
                {/* Add address */}
                <div className="w-[748px] h-[196px]">
                    <div className="w-[748px] h-[162px] mt-[24px]">
                        {/* address box */}
                        <div className="flex flex-col justify-center items-center w-[366px] h-[148px] mb-[14px] p-6">
                            <img className="size-6" src="/plus.png" alt="" />
                            <p className="font-semibold">Add New Address</p>


                        </div>

                    </div>

                </div>

                {/* Bag details */}
                <div className="w-80 h-[196px] pt-6">
                    <div className="w-80 h-[172px]">
                        
                        {/* Bag */}
                        <div className="flex justify-between w-[318px] h-14 py-4">
                            <p className="text-[20px] font-semibold">Bag</p>
                            
                            <div className="flex">
                                <p className="text-[#707072]">1 Items</p>
                                <span className="w-[52px] h-[24px] pl-3 pr-4">
                                    <img className="size-6 rotate-90" src="/right.png" alt="" />
                                </span>
                            </div>

                        </div>

                        {/* Price details */}
                        <div className="flex justify-between w-[318px] h-14 py-4">
                            <p className="text-[20px] font-semibold">Price Details</p>
                            
                            <div className="flex">
                                <p className="text-[#707072]">1 Items</p>
                                <span className="w-[52px] h-[24px] pl-3 pr-4">
                                    <img className="size-6 rotate-90" src="/right.png" alt="" />
                                </span>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}