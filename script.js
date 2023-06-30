var restart=document.querySelector("#restart");
restart.addEventListener("click",reset);
var tds=document.querySelectorAll("#value");
function reset(){
    alert("Are you Sure you want to Restart !!!")
    for (i in tds){
        tds[i].value=''
    }
}
pre="X"
function add(k){
    var present=tds[k].value
    if ((present=='')&&(pre=="O")){
        tds[k].value="X"
        pre="X"
    }
    else if ((present=='')&& (pre=="X")){
        tds[k].value="O"
        pre="O"
    }
    else{
        tds[k].value=""
    }
if ((tds[0].value==tds[1].value)&&(tds[1].value==tds[2].value)){
    if ((tds[0].value!='')&&(tds[1].value!='')&&(tds[2].value!='')) {
        if ((tds[0].value=="X")||(tds[1].value=='X')||(tds[2].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    }   
}
else if ((tds[0].value==tds[3].value)&&(tds[3].value==tds[6].value)){
    if ((tds[0].value!='')&&(tds[3].value!='')&&(tds[6].value!='')) {
        if ((tds[0].value=="X")||(tds[3].value=='X')||(tds[6].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    } 
}
else if ((tds[6].value==tds[7].value)&&(tds[7].value==tds[8].value)){
    if ((tds[6].value!='')&&(tds[7].value!='')&&(tds[8].value!='')) {
        if ((tds[6].value=="X")||(tds[7].value=='X')||(tds[8].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    } 
}
else if ((tds[8].value==tds[5].value)&&(tds[5].value==tds[2].value)){
    if ((tds[8].value!='')&&(tds[5].value!='')&&(tds[2].value!='')) {
        if ((tds[8].value=="X")||(tds[5].value=='X')||(tds[2].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        } 
    } 
}
else if ((tds[3].value==tds[4].value)&&(tds[4].value==tds[5].value)){
    if ((tds[3].value!='')&&(tds[4].value!='')&&(tds[5].value!='')) {
        if ((tds[3].value=="X")||(tds[4].value=='X')||(tds[5].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    } 
}
else if ((tds[1].value==tds[4].value)&&(tds[4].value==tds[7].value)){
    if ((tds[1].value!='')&&(tds[4].value!='')&&(tds[7].value!='')) {
        if ((tds[1].value=="X")||(tds[4].value=='X')||(tds[7].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        } 
    } 
}
else if ((tds[0].value==tds[4].value)&&(tds[4].value==tds[8].value)){
    if ((tds[0].value!='')&&(tds[4].value!='')&&(tds[8].value!='')) {
        if ((tds[0].value=="X")||(tds[4].value=='X')||(tds[8].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    } 
}
else if ((tds[2].value==tds[4].value)&&(tds[4].value==tds[6].value)){
    if ((tds[4].value!='')&&(tds[6].value!='')&&(tds[2].value!='')) {
        if ((tds[4].value=="X")||(tds[6].value=='X')||(tds[2].value=='X')){
            alert("Player 1 Wins")
        }
        else{
            alert("Player 2 Wins")
        }
    } 
}
}