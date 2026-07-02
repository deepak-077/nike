"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";


// check here if the user is logged in when they click proceed to buy- ask phone nubmer

export default function Checkout(){
    const [counter,setCounter] = useState(1)
    const router = useRouter();

    function increase(){
        setCounter(counter+1);
    }

    function decrease(){
        if(counter>0){
            setCounter(counter-1);
        }
    }
    useEffect(()=>{
        if(counter===0){
            router.push("/checkout/empty");
        }
        
    },[counter,router])

    return(
        <div className="flex justify-center items-center w-[1470px] h-[500px]">
            <div className="flex justify-between items-center w-[1100px] h-[420px] mt-[94px]">
                
                {/* products */}
                <div className="w-[712px] h-[422px]">

                    <div className=" w-[712px] h-[312px]">

                        <h2 className="w-[712px] h-[34px] mb-6 font-semibold text-2xl"> Bag </h2>


                        {/* product image left side */}
                        <div className="w-[712px] h-[254px] pb-6">
                        <div className="flex w-[712px] h-[222px] mb-2">


                            <div className=" w-[164px] h-[222px] mb-2">
                                
                                {/* item image */}
                                <img className="size-[164px]" src="/airmax/shoe1.jpg" alt="" />
                                
                                <div className="flex justify-between items-center w-[164px] h-[42px] mt-4">
                                    
                                    {/* quantity */}
                                    <div className="flex items-center w-[106px] h-[42px] border border-[#E5E5E5] rounded-full" >
                                        
                                        {/* bin or decrease */}
                                        <button className="flex justify-center items-center size-10" onClick={decrease}>
                                            <img className="size-6" src={counter>0?"minus.png":"bin.png"} alt="" />

                                        </button>

                                        <div className="flex justify-center items-center w-[24px] h-[40px]">{counter}</div>

                                        {/* increase */}
                                        <div className="flex justify-center items-center size-10 py-[1px] px-[6px]" onClick={increase}>
                                            <img className="size-6" src="plus.png" alt="" />
                                            
                                        </div>
                                    </div>

                                    <div className="flex justify-center items-center size-10 p-1.5 border border-[#E5E5E5] rounded-full">
                                        {/* wishlist */}
                                        <img className="size-6" src="heart.png" alt="" />

                                    </div>

                                </div>

                            </div>



                            {/* product info and price */}

                            <div className="flex flex-col w-[536px] h-[126px] ml-3 text-[#707072]">
                                <div className="flex justify-between w-full h-[27px] font-semibold text-black">
                                    <h3 className="my-0.5">Nike Air Max Plus 3</h3>
                                    <span>₹ 17,495</span>
                                </div>
                                <div className="w-full h-[24px] my-0.5">Men's Shoes</div>

                                <div className="w-full h-[24px]">White</div>
                                <div className="w-full h-[24px] my-0.5">14 Day Return</div>
                                <div className="w-full h-[24px] my-0.5 font-medium"><u>Size UK 9</u> </div>

                            </div>

                        </div>

                        </div>


                    </div>


                </div>


                {/* summary */}
                <div className="flex flex-col w-[356px] h-[422px]">


                    {/* summary and total */}
                    <div className="w-[356px] h-[206px] px-3 pb-4">
                        <h2 className="h-[34px] text-[24px] font-semibold">Summary</h2>

                        <div className="w-[332px] h-[140px] mt-4">
                            <div className="flex justify-between w-full h-[22px] my-4">
                                <span>Bag Total</span>
                                <span className="ml-2">₹ 17,495</span>
                            </div>

                            <div className="flex justify-between w-full h-[22px] my-4">
                                <span>Sub Total</span>
                                <span className="ml-2">₹ 17,495</span>
                            </div>

                            <div className="flex justify-between w-full h-[22px] my-4">
                                <span>Shipping Charges</span>
                                <span className="ml-2 text-green-400">Free</span>
                            </div>

                            <div className="flex justify-between w-full h-[24px] mt-4 font-semibold">
                                <span>You Pay</span>
                                <span className="ml-2 ">₹ 17,495</span>
                            </div>


                        </div>
                    </div>


                    {/* coupon */}

                    <div className="flex justify-between items-center w-[330px] h-[82px] mt-2 mx-3 mb-6">
                        <img className="size-6" src="coupon.png" alt="" />
                        <div className="w-[270px] h-[48px]">
                            <h2 className="h-6 font-semibold"> Log in to apply promo code </h2>
                            <p className="h-[22px] mt-0.5"> Get instant savings on your order </p>
                        </div>
                        
                        <img className="size-6"  src="right.png" alt="" />

                    </div>

                    {/* proceed to buy */}
                    <div className="w-[352px] h-[92px] px-3">
                        <button className="w-[332px] h-[60px] px-1.5 py-[1px] bg-black text-white font-semibold rounded-full hover:cursor-pointer" onClick={()=>{
                            router.push("/checkout/address")
                        }}> Proceed to Buy </button>


                    </div>

                    
                </div>

            </div>

        </div>
    )
}