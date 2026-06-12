export default function Category(){
    const menu=["New & Featured", "Men", "Women", "Kids","Jordan","Sale"]
    return(
      <div className="flex justify-between px-12 h-[60px] items-center">
        
        <h1 className="text-[24px] h-6 font-semibold">Men's Shoes(470)</h1>

        {/* search bar & cart */}
        <div className="flex items-center w-[242px] h-6">

            <button className="mr-6">Hide Filters</button>
            <button className="mr-6">Sort By</button>


        </div>
      </div>

    )
}