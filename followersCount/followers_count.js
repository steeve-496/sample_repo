let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML=count;
}
function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!");
    }else if (count===20){
        alert("Your instagram post gained 20 followers! Congratulations!Keep it up") 
    }
}

function count_Reset(){
    count=0;
    document.getElementById("countDisplay").innerHTML=count;
    alert("Followers count has been reset")
}