

document.getElementById('add-money').addEventListener('click',function(event){
  event.preventDefault();

  const AddMoney =document.getElementById('input-add-money').value;
  const balance =document.getElementById('account-balance').innerText;

const totalBalance= parseFloat(balance);
const totalMoney=parseFloat(AddMoney);
const totalBalanceMoney=(totalBalance + totalMoney);

document.getElementById('account-balance').innerText =  totalBalanceMoney;

//   console.log(AddMoney);
const addPin =document.getElementById('input-pin number').value;

if(addPin=="1234"){
 console.log('add your money');
}
else{
     alert('please valid Pin');
}

})