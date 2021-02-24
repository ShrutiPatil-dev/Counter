let add = document.getElementById("add");
let sub = document.getElementById("sub");
let reset = document.getElementById("clear");
let count = 0
add.addEventListener("click",function(){
    count+= 1;
    document.getElementById("count").innerHTML = count;
})

sub.addEventListener("click",function(){
    if(count > 0){
    count-= 1;
    document.getElementById("count").innerHTML = count;
    }
    else{
        count = 0;
    }
})

clear.addEventListener("click",function(){
    count = 0
    document.getElementById("count").innerHTML = count;
})