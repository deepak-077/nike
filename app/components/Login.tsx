export default function Login(){
    return (
        <div className="h-screen bg-transparent">
            <section className="flex flex-col size-[440px] rounded-2xl p-10">

                <div className="w-[360px] h-[350px]">
                    <div className="relative w-[360px] h-[60px]">
                        <img src="logo.svg" alt="" />
                        <button className="absolute top-2.5 right-2.5 size-[30px] p-2.5"></button>
                    </div>
                    <h2 className="w-full text-[20px] font-medium mx-[24px]">Log in to your account </h2>
                    <p className="w-full text-sm font-medium m-[24px] mt-2">Get personalised picks & faster checkout </p>


                    <div className="w-[360px] h-[210px] px-6">
                        <div className="w-[312px] h-[56px] px-3">
                            <div className="w-[28px] h-[23px] mr-2">

                            </div>
                            <input className="w-[250px] h-[54px] py-4" type="text" name="" id="" />

                            <button className="w-[312px] h-[50px] px-1.5 py-[1px] mt-8">Get OTP</button>
                            <div className="w-[312px] h-[40px] text-sm mt-8 text-[#707072]">By entering this site, you agree to the 
                                <span className="w-[270px] h-[20px] text-sm">
                                    <a className="font-medium text-black" href="">Terms & Conditions</a>
                                    "and"
                                    <a className="font-medium text-black" href="">Privacy Policy</a>

                                </span>
                            </div>


                        </div>

                    </div>


                </div>
                

            </section>

        </div>
    )
}