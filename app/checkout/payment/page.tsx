// no navbar and no footer should be there

"use client"

import axios from "axios"
import Script from "next/script";
import { useRouter } from "next/navigation";

const options=[
        {img:"/tick.png",
         title: "Sign Up"
        },
        {img:"/tick.png",
         title: "Address"
        },
        {img:"/edit.png",
         title: "Payment"
        }

    ]

    const cards=[
        {title: "Bag",
         info: "1 Items"
        },
        {title: "Deliver to",
         info: "User ..."
        },
        {title: "Price Details",
         info: "1 Items"
        }
    ]
    const paymentOptions=[
        {img:"/tick.png",
         title: "UPI",
         desc:"Google Pay, PhonePe, Paytm & more"
        },
        {img:"/tick.png",
         title:"Credit/Debit Card",
         desc:"Visa, Mastercard, Rupay & more"
        },
        {img:"/edit.png",
         title: "NetBanking",
         desc:"Pay through your favourite bank "
        },
        {img:"/edit.png",
         title:"EMI",
         desc:"Easy installments"
        }

    ]

    const upiApps=[
        {img:"/googlepay.png"},
        {img:"/phone-pe.png"},
        {img:"/paytm.png"},
        {img:"/cred.png"},
        {img:"/UPI.png"},

    ]

    

export default function Payment(){
    const router=useRouter();

    const shoe = {
        amount :"17000",
        currency: "INR",
        receipt:" orderreceipt_id_11"
    }

    
    async function handlePayment(){
        try{
            const response = await axios.post("http://localhost:3001/create_order",shoe)
            const orderData=response.data


            // Razorpay Checkout - documentation
      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID, //  Razorpay key_id
        amount: orderData.amount, 
        currency: orderData.currency,
        name: 'Nike',
        description: 'Test Transaction',
        order_id: orderData.id, // This is the order_id created in the backend

        "handler": async function (response){
            try{
                const verification_items={
                   razorpay_payment_id:response.razorpay_payment_id,
                   razorpay_order_id:response.razorpay_order_id,
                   razorpay_signature:response.razorpay_signature
                };



        const verify= await axios.post("http://localhost:3001/verify_payment",{verification_items})
        
        if(verify.status===200){
            console.log("payment verification successful")
            router.push("/payment-success")
        }

            }
            catch(error){
                console.log("payment verification failed")
                router.push("/payment-failed")
            }

    },
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        },
      };

    //     var settings = {
    // "url": "/api/payment/verify",
    // "method": "POST",
    // "timeout": 0,
    // "headers": {
    // "Content-Type": "application/json"
    // },
    // "data": JSON.stringify({response}),
    // }

      const rzp = new (window as any).Razorpay(options);

      rzp.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });

        rzp.open();

        }
        catch(error){
            console.log(error)
        }
        
    }
    

    return(
        <div className="flex flex-col items-center justify-center">

            <Script 
          src="https://checkout.razorpay.com/v1/checkout.js" 
          strategy="lazyOnload" 
        />
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
                    <p className="w-full h-[48px] mb-1 text-[40px]">Choose payment method</p>
                    <p className="w-full h-[24px] mb-1 text-[#707072]">Choose the payment method you prefer</p>
                </div>

            </div>

            <div className="flex justify-between w-[1102px] h-[460px]">
                

                {/* Payment Options */}
                <div className="w-[748px] h-[460px] pb-4">
                   
                    <div className="w-[748px] h-[40px] pb-4">
                        <p className="text-[20px] font-medium">Payment Method Options</p>
                    </div>

                    <div className="flex w-[748px] h-[420px] border border-[#E5E5E5] rounded-2xl">
                        
                        <div className=" w-[328px] h-[420px]">
                            {paymentOptions.map((item,index)=>(
                                <div className={`flex items-center w-[328px] h-[80px] py-4 bg-[#F3F4F5] ${item.title==="UPI" ? "rounded-tl-2xl":"rounded-none"}`}>
                                    <span className="w-[40px] h-[24px] pl-4"> 
                                        <img className="size-6" src="/plus.png" alt="" />
                                    </span>
                         
                                <div className="flex flex-col gap-1 w-[289px] h-[48px] pl-[16px]">

                                    <p className="h-6">{item.title}</p>
                                    <p className="font-semibold text-sm h-5">{item.desc}</p>
                                </div>

                                </div>
                            ))}
                        </div>


                        {/* Payment details */}
                         <div className="flex flex-col w-[420px] h-[420px] px-3">
                            <div className="w-[394px] h-[305px]">
                                <div className="w-[378px] h-[305px] mx-2">

                                    <div className="w-[378px] h-[60px] mb-3 pt-6 pb-3 pl-3">
                                        <p className="text-[20px] font-medium">Pay with UPI</p>

                                    </div>



                                    <div className="w-[378px] h-[232px] pb-6">

                                        <div className="w-[378px] h-[208px]">
                                        <div className="flex justify-between w-full h-[56px]">
                                            <p className="pl-4 font-medium">Scan QR Code</p>
                                            <span className="w-10 h-6 pl-4">
                                                <img className="size-6" src="" alt="" />

                                            </span>

                                        </div>

                                        <div className="w-[362px] h-[152px] mx-2">
                                            <div className="flex w-[346px] h-[88px] mb-4">

                                                {/* QR */}
                                                <img className="size-[88px] mr-2" src="/qr.avif" alt="" />
                                                <div className="w-[206px] h-[88px]">
                                                    <p className="h-[20px] text-sm">Use any UPI app on your phone</p>

                                                    <div className="flex w-[206px] h-[26px]">
                                                    {upiApps.map((item,index)=>(
                                                        <img className="w-auto h-[24px] mr-2.5" src={item.img} alt="" />

                                                    ))}
                                                    </div>
                                                </div>

                                            </div>

                                            {/* payment button */}
                                            <button className="w-full h-12 p-2.5 text-white bg-black rounded-full hover:cursor-pointer" onClick={ handlePayment }>Scan & Pay ₹17,495 </button>



                                        </div>

                                    </div>

                                    </div>

                                </div>


                            </div>
                         </div>

                </div>

                </div>



            
                {/* Bag details */}
                <div className="w-80 h-[330px] pt-[30px]">
                    
                    {/* coupon */}

                    <div className="w-80 h-[102px] ">
                        <div className="w-80 h-[82px] my-2.5 border border-[#E5E5E5] rounded-2xl">

                            <div className="flex justify-between items-center h-[82px] py-4">
                                <span className="w-[40px] h-[35px] pl-3">
                                    <img className="size-[35px]" src="/coupon.png" alt="" />
                                </span>

                                <div className="w-[270px] h-[48px] pl-4">
                                    <h2 className="h-6 font-semibold"> Save more with 1 Offers </h2>
                                    <p className="h-[22px] mt-0.5 text-xs"> Cards, UPI, Net banking etc. </p>
                                </div>

                                <span className="w-[52px] h-6 pr-4 pl-3">
                                    <img className="size-6"  src="/right.png" alt="" />
                                </span>
                        
                            </div>
                        </div>
                    </div>

                    

                    <div className="w-80 h-[172px]">

                        {/* Bag, Address and Price info cards */}

                        {cards.map((item,index)=>(
                            <div className="flex justify-between w-[318px] h-14 py-4 border border-[#E5E5E5] rounded-2xl border-collapse">
                            <p className="pl-4 text-[20px] font-medium">{item.title}</p>
                            
                            <div className="flex">
                                <p className="text-[#707072]">{item.info}</p>
                                <span className="w-[52px] h-[24px] pl-3 pr-4">
                                    <img className="size-6 rotate-90" src="/right.png" alt="" />
                                </span>
                            </div>

                        </div>

                        ))}
                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}