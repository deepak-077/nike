const links=[
    {route:"© 2026 Nike, Inc. All rights reserved"},
    {route:"Terms of Use"},
    {route:"Nike Privacy Policy"},
    {route:"Store Claim Policy"},

]

export default function Footer(){
    return(
        <div className="w-[1362px] h-[140px] mx-[54px] pt-3 pb-5">
            <div className="w-[1362px] h-[109px] pb-16">
                <div className="flex gap-5 w-[1362px] h-[45px] pt-6">
                    {links.map((item,index)=>(
                        <p className="w-auto text-[#707072] text-sm">{item.route}</p>

                    ))}
                    
                </div>

            </div>

        </div>
    )
}