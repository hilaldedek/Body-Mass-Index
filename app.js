const agırlık=document.getElementById("weight");
const boy=document.getElementById("height");
const onay=document.getElementById("submit");
const sonuc= document.getElementById("sonuc");
const end=document.getElementById("end");
const clear=document.getElementById("clear");
onay.addEventListener("click",function(){
    const result=agırlık.value/(boy.value*boy.value);
    if(result<=18.4){
        sonuc.innerText =`${result.toFixed(2)}`;
        end.innerText += `Underweight`;
    }else if(result<=24.9){
        sonuc.innerText =`${result.toFixed(2)}`;
        end.innerText += `Normal`;
    }else if(result<=39.9){
        sonuc.innerText =`${result.toFixed(2)}`;
        end.innerText += `Overweight`;
    }else{
        sonuc.innerText =`${result.toFixed(2)}`;
        end.innerText += `Obese`;
    }
})
weight.addEventListener("keydown",(event)=>{
    if(event.keyCode===13){
        onay.click();
    }
})
height.addEventListener("keydown",(event)=>{
    if(event.keyCode===13){
        onay.click();
    }
})
clear.addEventListener("click", function(){
    agırlık.value="";
    boy.value="";
    end.innerText="";
    sonuc.innerText=0;
} )