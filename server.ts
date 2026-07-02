import express from "express"
// import cors from "cors";
import Razorpay from "razorpay";
import dotenv from "dotenv"
import cors from "cors"
import crypto from "crypto";

dotenv.config()

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET})


const details = {
  "razorpay_payment_id": "pay_29QQoUBi66xm2f",
  "razorpay_order_id": "order_9A33XWu170gUtm",
  "razorpay_signature": "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d"
}


app.post("/create_order", async (req,res)=>{
    const {amount,currency,receipt}=req.body;
    
    try{
        var shoe = {
            amount: parseInt(amount, 10)*100,  // Amount is in currency subunits. 
            currency: currency || "INR",
            receipt:receipt.trim() 
        }
        
        const order=await instance.orders.create(shoe)

        res.status(200).json(order)

    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg:"failed to create order id "})
    }
})

app.post("/verify_payment",async (req,res)=>{
    
    try{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        
        const message = razorpay_order_id + "|"+ razorpay_payment_id;

        const generated_signature = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(message)
        .digest("hex")


        if (generated_signature == razorpay_signature) {
        console.log("payment verification successful")
        res.status(200).json({msg:"payment verified"})
     }
    
     res.status(400).json({msg:"payment verification failed"})

    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"payment verification failed"})
    }
})


app.listen(3001,()=>{
    console.log("server started successfully")
})