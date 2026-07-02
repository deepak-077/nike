export default function Category(){
    const menu=["New & Featured", "Men", "Women", "Kids","Jordan","Sale"]
    return(
      <div className="flex justify-between px-12 h-[60px] items-center">
        
        <h1 className="text-[24px] h-6 font-semibold">Men's Shoes(470)</h1>

        
        <div className="flex items-center w-[242px] h-6">

            <button className="mr-6 flex w-auto">Hide Filters
              <img className="size-5 ml-2" src="slider.png" alt="" />
            </button>
            <button className="flex py-[1px] px-[6px]">Sort By
              <img className="size-5 rotate-90 ml-2.5" src="right.png" alt="" />
            </button>


        </div>
      </div>

    )
}