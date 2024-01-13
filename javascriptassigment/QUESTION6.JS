let paymentmethod="paypal";
let payment=4000;

switch(paymentmethod){
    case "credit":
        payment+=4000*0.02;
        console.log("Total Payment",payment);
        break;
    case "debit":
        payment+=4000*0.015;
        console.log("Total Payment", payment);
        break;
    case "paypal":
        payment+=4000*0.03;
        console.log("Total Payment",payment);
        break;
    defaul:
    console.log("wrong value");


    }
