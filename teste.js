const mercadopago = require('mercadopago');
async function listAll() {
mercadopago.configurations.setAccessToken('TEST-1610870527199793-020410-28d17925a34820c84218222d23ae375b-222811412');

var payment_data = {
    transaction_amount: 1,
    token: 'ff8080814c11e237014c1ff593b57b4d',
    installments: 1,
    payer: {
      type: "customer",
      id: "123456789-jxOV430go9fx2e"
    }
  };
  
  mercadopago.payment.create(payment_data).then(function (data) {
    console.log(data);
  });

}

listAll();