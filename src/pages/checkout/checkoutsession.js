const stripe = require('stripe')('sk_test_51HrpSlHc1kG6xYQZwQi5vlxctj1gNcwKVn86dXMU3R4nZGrnejV2YxBZ2CT76yQDvoDeoLCAEYrtlEifgkWdcG5R00InsnfA7d');
const express = require('express');
const app = express();
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:3000/checkout';
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'));