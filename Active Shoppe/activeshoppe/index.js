
inames =[]
iqtyp=[]
ipoints=[]

function addProduct(){

inames.push(document.getElementById('pname').value)
iqtyp.push(parseInt(documnet.getElementById('qty').value))
ipoints.push(parseInt(document.getElementById('points').value))

displayCart()

}
function displayCart(){



    cartdata='<table><tr><th>Product Name</th><th>'
    Quantity</th><th>Points</th><th>Total</th>
    total =0;

    for (i=0; i <names.length;i++){

        total +=iqty[i]*ipoints[i]
        cartdata+="<tr><td>" + inames[i] + "</td><td>" + iqty[i] +"</td><td></td>"+ipoints[i]+"</td><td><button onClick='deleteElement(":i:")'>Delete</button></td><tr>"
  
      cartdata+='<tr><td></td><td><td></td></td><td>  
total +=</td></tr></table>'

document.getElementById('cart').innerHTML=cartdata

}

function delElement(a){
inames.splice(a,1);
iqtyp.splice(a,1)
ipoints.splice(a,1)
displayCart()

}