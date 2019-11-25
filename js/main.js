var contact ="";
var objectContact ="";
if(localStorage.getItem("localValue") == null)
    {
        contact=[]
    }
else
    {
        contact = JSON.parse(localStorage.getItem("localValue"))
    }
loopContact();
function addMethod(){
var userEmailValue = document.getElementById("userEmail").value;
var dot = userEmailValue.indexOf(".")
var attEmail = userEmailValue.indexOf("@")
var userFirstName  = userEmailValue.substring(0 , dot)
var userSecondName = userEmailValue.substring(dot+1 , attEmail)
var afterAtt = userEmailValue.substring(attEmail+1)
document.getElementById("userFName").value = userFirstName
document.getElementById("userCName").value  = userSecondName
document.getElementById("userDomain").value = afterAtt
var userFirstNameValue = userFirstName
var userSecondNameValue = userSecondName
var uNameUserValue = userFirstNameValue+" "+userSecondNameValue;
var userDomainValue = afterAtt  
var userAgeValue = document.getElementById("userAge").value
var userSalaryValue = document.getElementById("userSalary").value
if (userEmailValue =="" ||  userAgeValue=="" || userSalaryValue=="")
    {
        alert("Please Enter Your Data")
    }
    else
        {
            objectContact = {uName: uNameUserValue , uDomain : userDomainValue , uAge : userAgeValue , uSalary : userSalaryValue  }
            contact.push(objectContact)
            localStorage.setItem("localValue" ,JSON.stringify(contact)  )
            loopContact();
            clearData();   
        }

}
function loopContact(){
    var valueContact ="";
    for( i = 0 ; i < contact.length ; i++)
        {
            
            valueContact = valueContact + "<tr><td>"+i+"</td><td>"+contact[i].uName+"</td><td>"+contact[i].uDomain+"</td><td>"+contact[i].uAge+"</td><td>"+contact[i].uSalary+"</td><td><button class='btn btn-danger' onclick='DeleteMethod("+i+")'>Delete</button></td></tr>"
            
            
        }
    document.getElementById("tebleBody").innerHTML = valueContact;
}
function clearData(){
    document.getElementById("userEmail").value = "";
    document.getElementById("userFName").value = "";
    document.getElementById("userCName").value = "";
    document.getElementById("userDomain").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("userSalary").value = "";
  
}
function DeleteMethod(IndexOf){
    contact.splice(IndexOf)
    localStorage.setItem("localValue", JSON.stringify(contact))
    loopContact();  
}
function search(){
 var x = false;
    var usearch = document.getElementById("Search").value;
    for (i=0 ; i < contact.length ; i++ )
        {
            if(contact[i].uName == usearch)
                {
                    x = true
                
                }
            
            
            
        }
		if (x==false)
			{
				alert("Done")
			}
		else
			{
			alert("user not exist")
			}
    
}



