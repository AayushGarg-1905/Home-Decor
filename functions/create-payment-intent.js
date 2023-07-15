
require('dotenv').config()

const stripe=require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler= async function(event,context){
    // console.log(event)
    if(event.body){
        const {cart,shipping_fee,total_amount}=JSON.parse(event.body)

        const calculateOrderAmount=()=>{
            return shipping_fee+total_amount;
        }
        // console.log(cart)
        try{
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency:'inr',
                description: 'Exported transaction description goes here',
            })
            return {
                statusCode:200,
                body:JSON.stringify({clientSecret: paymentIntent.client_secret})
            }
        }
        catch(error){
            return {
                statusCode:500,
                body:JSON.stringify({msg:error.message})
            }
        }
    }

    return {
        statusCode:200,
        body:'create payment intent'
    }
    
}