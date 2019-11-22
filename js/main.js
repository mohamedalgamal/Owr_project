var ArrayData =[]
function My_function(){
    var UserName = document.getElementById("UserName").value;
    var UserAge = document.getElementById("UserAge").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserSalary = document.getElementById("UserSalary").value;
    var alldata = {Uname : UserName , Uage :UserAge , Uemail:UserEmail , Usalary : UserSalary}
    ArrayData.push(alldata);
    loopdata();
    cleardata();
    
    
    
}
function loopdata(){
    
    var data = "";
    for(i = 0 ; i < ArrayData.length ; i++)
        {
        
            data = data +"<tr><td>"+ArrayData[i].Uname+"</td><td>"+ArrayData[i].Uage+"</td><td>"+ArrayData[i].Uemail+"</td><td>"+ArrayData[i].Usalary+"</td></tr>"
            
        }
            
            document.getElementById("MyTable").innerHTML = data;
   
}
function  cleardata(){
    
    
    document.getElementById("UserName").value="";
   document.getElementById("UserAge").value="";
    document.getElementById("UserEmail").value="";
   document.getElementById("UserSalary").value="";
    
    
    
    
}

	
