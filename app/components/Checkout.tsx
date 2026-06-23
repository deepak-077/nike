export default function (){
    return(
        <div className="w-[1470px] h-[500px]">
            <div className="w-[1100px] h-[420px] mt-[94px]">
                
                {/* products */}
                <div className="w-[712px] h-[422px]">

                    <div className="w-[712px] h-[312px]">

                        <h2 className="w-[712px] h-[34px] mb-6"> Bag </h2>



                        {/* product image left side */}
                        <div className="w-[712px] h-[254px] pb-6">
                        <div className="w-[712px] h-[222px] mb-2">


                            <div className="w-[164px] h-[222px] mb-2">
                                <img className="size-[164px] border" src="" alt="" />
                                
                                <div className="w-[164px] h-[42px] mt-4">
                                    
                                    {/* quantity */}
                                    <div className="w-[106px] h-[42px]">
                                        {/* bin or reduce */}
                                        <button className="size-10">
                                            <img src="" alt="" />

                                        </button>

                                        <div className="w-[24px] h-[40px]">1</div>

                                        {/* increase */}
                                        <div className="size-10 py-[1px] px-[6px]">
                                            +
                                        </div>
                                    </div>

                                    <div className="size-10 p-1.5">
                                        {/* wishlist */}
                                        <img className="size-6" src="" alt="" />

                                    </div>


                                </div>

                            </div>



                            {/* product info and price */}

                            <div className="w-[536px] h-[126px] ml-3">
                                <div className="w-full h-[27px]">
                                    <h3 className="my-0.5">Nike Air Max Plus 3</h3>
                                    <span>₹ 17,495</span>
                                </div>
                                <div className="w-full h-[24px] my-0.5">Men's Shoes</div>

                                <div className="w-full h-[24px]">White</div>
                                <div className="w-full h-[24px] my-0.5">14 Day Return</div>
                                <div className="w-full h-[24px] my-0.5">Size UK 9</div>

                            </div>



                        </div>

                        </div>






                    </div>





                    



                </div>


                {/* summary */}
                <div className="w-[356px] h-[422px]">


                    {/* summary and total */}
                    <div className="w-[356px] h-[206px] px-3 pb-4">
                        <h2 className="h-[34px]">Summary</h2>

                        <div className="w-[332px] h-[140px] mt-4">
                            <div className="w-full h-[22px] my-4">
                                <span>Bag Total</span>
                                <span className="ml-2">₹ 17,495</span>
                            </div>

                            <div className="w-full h-[22px] my-4">
                                <span>Sub Total</span>
                                <span className="ml-2">₹ 17,495</span>
                            </div>

                            <div className="w-full h-[22px] my-4">
                                <span>Shipping Charges</span>
                                <span className="ml-2 text-green-400">Free</span>
                            </div>

                            <div className="w-full h-[24px] mt-4">
                                <span>You Pay</span>
                                <span className="ml-2 text-green-400">₹ 17,495</span>
                            </div>


                        </div>
                    </div>

                    <div className="w-[330px] h-[82px] mt-2 mx-3 mb-6">
                        <div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}