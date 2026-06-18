"use client"
import { useEffect, useState } from "react"

const images=[
    {img:"shoe1.jpg"},
    {img:"shoe2.avif"},
    {img:"shoe3.avif"},
    {img:"shoe4.avif"},
    {img:"shoe5.avif"},
    {img:"shoe6.avif"},
    {img:"shoe7.avif"},
    {img:"shoe8.avif"},
    {img:"shoe9.avif"},
]

const sizes=[
    {size:"UK 7"},
    {size:"UK 8"},
    {size:"UK 9"},
    {size:"UK 10"},
    {size:"UK 11"},
]


export default function Airmax3(){
    const [selectedImg,setSelectedImg]=useState("")

    useEffect(()=>{
        setSelectedImg("shoe1.jpg")
    },[])

    function handleSelected(){
        console.log(selectedImg)
    }

    return(
        <div className="flex justify-center w-[1470px] h-[1380px] p-12">

            {/* shoe images */}
            <div className="flex w-[687px] h-[535px] pl-12 mr-4 ml-2">
                
                {/* small images */}
                <div className="flex flex-col w-15 h-auto gap-0.5 overflow-y-auto ">
                {images.map((item,index)=>(
                    <div className=" flex items-center size-15 mb-1">
                        <img className="size-15 rounded-md" src={`/airmax/${item.img}`} onClick={()=>{
                            handleSelected()
                            setSelectedImg(item.img)
                        }} alt="" />
                    </div>
                ))}
                    

                </div>

                <div className="items-end">
                    <img className="size-[535px]" src={`/airmax/${selectedImg}`} alt="" />
                </div>

            </div>




            {/* product info */}
            <div className="w-100 h-[1285px] pl-10">
                <div className="w-[360px] h-[1285px] pr-2.5 pb-6">
                    <section className="flex flex-col gap-3 w-[350px] h-[476px]">

                        <h1 className="w-full h-[52px]">
                            <div className="w-full h-6 mb-1 font-semibold text-[20px]">
                            Nike Air Max Plus 3
                        </div>
                        <div className="w-full h-6 mb-1 text-[#707072]" >
                            Men's Shoes
                        </div>

                        </h1>
                        
                        
                        {/* price */}
                        <div className="w-full h-[53px] mt-2" >
                            <div className="w-full h-6 mb-2 font-semibold">
                                17,495
                            </div>
                            <span className="text-[#707072] text-sm h-5">Inclusive of all taxes</span>
                            
                        </div>
                        <div className="w-full h-[137px]  mt-6">
                            {/* select size */}
                            <div className="flex justify-between w-full h-[26px] font-semibold">
                                <h2>Select Size</h2>
                                <div className="flex items-center gap-1 h-[24px]">
                                    <img className="size-6" src="" alt="" />
                                    <span className="text-sm">Size Guide</span>
                                </div>
                            </div>

                            {/* sizes */}
                            <div className="flex flex-wrap justify-between items-center w-[350px] h-[103px] mt-2">
                                {sizes.map((item,index)=>(
                                    <label className="border border-[#CACACB] rounded-lg w-[82.25] h-[48px] px-2 text-center">{item.size}</label>
                                ))}
                            </div>
                        </div>

                        {/* add to bag */}
                            <div className="w-[350px] h-[130px]">
                                <button className="bg-black text-white rounded-4xl font-semibold w-full h-[60px] mb-3 py-1">Add to Bag</button>
                                
                                <div className="flex gap-1 items-center justify-center rounded-4xl w-[350px] h-[58px] border border-[#00132529]">
                                    <span className="h-6 font-semibold">Favourite</span>
                                    <img className="size-6" src="" alt="" />
                                </div>

                            </div>
                    </section>

                    {/* extra info */}
                            <div className="w-[350px] h-[256px] pt-12">
                                <div className="w-full h-auto mb-4">
                                    The Nike Air Max Plus 3 updates an iconic design with TPU accents on the upper for a modern look that still pays homage to the OG. Thanks to its Tuned Air technology, it offers the unreal comfort that helped the Air Max Plus make its name.

                                </div>
                                <li className="ml-[27px]">Colour Shown: White|Vast Grey</li>
                                <li className="ml-[27px]">Style: CW1417-100</li>

                            </div>

                            {/* view product details */}
                            <div className="w-[350px] h-[25.5px] mt-[30px] mb-6">
                                <button className="h-[25.5px] font-semibold"> <u>View Product Details</u></button>
                            </div>

                            
                            {/* delivery details */}
                            <div className="w-[350px] h-[240px] mt-[40px] mb-4">

                                <div className="w-[350px] h-[24px] font-semibold">
                                Check delivery date
                                </div>

                                {/* pincode */}
                            <div className="w-[350px] h-[46px] mt-[2px] mb-4">
                                Enter pincode to know exact delivery dates/charges
                            </div>
                            <div className="flex justify-between items-center w-[350px] h-[48px] border rounded-lg">
                                <input className="text-[#363638] ml-3" type="number" name="pincode" placeholder="Pincode" id="" />
                                <span className="text-sm text-[#cacacb] mr-3">Check</span>
                            </div>

                            {/* return and exchange */}
                            <div className="flex items-center justify-between w-[350px] h-[40px] py-2 text-sm">
                                
                                <div className="flex items-center">
                                    <img className="size-6" src="/airmax/return.png" alt="" />
                                    <div className="h-[21px] ml-3">14-day return and size exchange</div>
                                </div>
                                
                                <div className="h-[21px]"><u>Know More</u></div>

                            </div>

                            <div className="flex items-center justify-between w-[350px] h-[40px] py-2 text-sm">

                                <div className="flex items-center">
                                    <img className="size-6" src="/airmax/shipping.png" alt="" />
                                    <div className="h-[21px] ml-3">Free delivery available</div>
                                </div>
                                
                                <div className="h-[21px]"><u>Know More</u></div>

                            </div>
                            </div>

                            {/* vendor details */}
                            <button className="flex justify-between items-center w-[350px] h-[88px]">
                                <div className=" h-[88px] py-[30px] text-[20px] font-medium">
                                    <h3 className="pb-0.5 h-[26px]">Vendor Details</h3>
                                </div>

                                {/* expand arrow */}
                                <img className="size-6" src="arrow_down.png" alt="" />
                            </button>

                            {/* REturn Policy */}
                            <button className="flex justify-between items-center w-[350px] h-[88px]">
                                <div className="h-[88px] py-[30px] text-[20px] font-medium">
                                    <h3 className="pb-0.5 h-[26px]">Return and exchange policy</h3>
                                </div>

                                {/* expand arrow */}
                                <img className="size-6" src="arrow_down.png" alt="" />
                            </button>

                </div>

            </div>

           

        </div>

    )
}