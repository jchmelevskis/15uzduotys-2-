var tabs = document.querySelectorAll(".tab")


function showtab(id){
    for(var x of tabs){
        x.style.display = "none"
       
    }
document.getElementById(id).style.display = "block"

}
