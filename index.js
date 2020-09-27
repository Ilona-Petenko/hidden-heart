document.getElementById("show-heart-button").onclick=function() { 
    document.getElementById("heart-img").style.visibility="visible"
    document.getElementById("back-button").style.visibility="visible"
    document.getElementById("show-heart-button").hidden=true
} 

document.getElementById("back-button").onclick=function() { 
    document.getElementById("heart-img").style.visibility="hidden"
    document.getElementById("back-button").style.visibility="hidden"
    document.getElementById("show-heart-button").hidden=false

}
