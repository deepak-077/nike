export default function Navbar(){
    const menu=["New & Featured", "Men", "Women", "Kids","Jordan","Sale"]
    return(
      <div className="flex justify-between px-12 h-[60px] items-center">
        <img className="size-20" src="" alt="" />
        <nav className="flex h-[60px] items-center justify-center">
            { menu.map((item,index)=>(
                <div className="px-3 font-semibold">
                    <span>{item}</span>
                </div>
            )
            )}
        </nav>

        {/* search bar & cart */}
        <div className="flex items-center w-[344px] h-[60px]">

            <div className="w-[180px] h-[36px]">Search</div>
            <div className="size-9 mx-0.5">wish</div>
            <div className="size-9 mx-0.5">Cart</div>

        </div>
      </div>

    )
}