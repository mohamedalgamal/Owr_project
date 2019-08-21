var imgiteam = document.querySelectorAll(".img-item");
var addclass = document.querySelector(".lightBox-container");
var ligtbox = document.querySelector(".lightBox")
var close = document.getElementById("close")
for (var i=0 ; i<imgiteam.length ; i++)
    {
        imgiteam[i].addEventListener("click",function(ev){
            var event = ev.target.src;
            
            ligtbox.style.backgroundImage="url('"+event+"')"
         addclass.classList.add("show")
              
        })
        
    }
close.addEventListener("click",function(){
    
    
    
     addclass.classList.remove("show")
    
})
