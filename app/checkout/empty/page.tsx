export default function Empty(){
    return(
        <div className="w-[1470px] h-[500px]">
            <div className="flex flex-col justify-center items-center w-[1100px] h-[500px] mx-[185px] py-10 px-5">
                <h2 className="h-[28px] text-2xl mt-6">Your bag is empty.</h2>
                <p className="h-[22px] mb-6 mt-4">When you add products, they'll appear here.</p>
                <button className="w-[400px] h-[54px] py-[1px] px-[6px] bg-black text-white rounded-full">Shop Now</button>

            </div>

        </div>
    )
}