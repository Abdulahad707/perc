function getperc() {

    let std_name_11 = prompt("enter your name");
    let std_totalmarks=document.getElementById("tm1").value;
    let std_obtmarks=document.getElementById("obt1").value;
    let res=std_obtmarks/std_totalmarks*100
    
 document.getElementById("change").innerHTML=(`dear ${std_name_11} you have got it ${res}`)






}