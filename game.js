function onrel() {
    let i = 1;
    setInterval(function(){

    let randomNumber = Math.floor(Math.random()*9);

    if(randomNumber==0){
        document.getElementById("a11").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==1){
        document.getElementById("a12").style.display = "block";
        
        document.getElementById("a11").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==2){
        document.getElementById("a13").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==3){
        document.getElementById("a14").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==4){
        document.getElementById("a15").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==5){
        document.getElementById("a16").style.display = "block";
       
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==6){
        document.getElementById("a17").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==7){
        document.getElementById("a18").style.display = "block";
        
        document.getElementById("a12").style.display = "none";
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a11").style.display = "none";
        document.getElementById("a19").style.display = "none";
    }
    if(randomNumber==8){
        document.getElementById("a19").style.display = "block";
        document.getElementById("a12").style.display = "none";        
        document.getElementById("a13").style.display = "none";
        document.getElementById("a14").style.display = "none";
        document.getElementById("a15").style.display = "none";
        document.getElementById("a16").style.display = "none";
        document.getElementById("a17").style.display = "none";
        document.getElementById("a18").style.display = "none";
        document.getElementById("a11").style.display = "none";
    }

(i++);
},800); 

console.log(count);
}
let count = 0;

function countt(){
    
    count += 10;
    document.getElementById("coun").innerHTML = ("Your Live Score is"+ " " + count);
    return count
}
document.getElementById("coun").innerHTML = ("Your Live Score is" + " " + count);


let Time=5;
let countTime=setInterval(function(){
   if(Time>0)
   { 
       document.getElementById("spanId").innerHTML=`${Time} is remaining`;
       Time-=1;
   }
   else
   {
    document.getElementById("spanId").innerHTML=`${Time} is finished`;
    document.getElementById("main12").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("h3").innerHTML = ("Your Score is" + " " + count);
    document.getElementById("coun").innerHTML = ("Your Final Score is" + " " + count);
    
   }

},1000);


