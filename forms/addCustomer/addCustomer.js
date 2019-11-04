
addCustomer.onshow=function(){
    let query5 = "SELECT DISTINCT name FROM customer;"  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query5)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("Error")
    else {        
        
  let message = "" 
  for (i = 0; i <= results.length - 1; i++)
     message = message + results[i][0] + "\n"
  taList.value = message
    }
  }
} 



btnEnter.onclick=function(){

let companyName = inptName.value
let city = inptCity.value
let street = inptStreet.value
let state = inptState.value
let zipcode = inptZipcode.value

    let query5 = `INSERT INTO customer (name,street,city,state,zipcode) VALUES ("${companyName}", "${street}", "${city}", "${state}", "${zipcode}")`
 console.log(query5)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query5);

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            //let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the company!")
        } else
            NSB.MsgBox("There was a problem with adding the company to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
  let query6 = "SELECT name from customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query6)
    
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
        
    if (results.length == 0)   // the array is empty so no results returned             
        NSB.MsgBox("That is not a valid customer.")
    else {        
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
        
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        taList.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)

}



hmbMenuAdd.onclick=function(n){
    if (typeof(n) == "object") {
    return
  }
  
      switch(n) { 
        case 'See Customer':
            ChangeForm(seeCustomers)
            break
        case 'Add Customer':
            ChangeForm(addCustomer)
            break
        case 'Edit Customer':
            ChangeForm(deleteUpdateCustomer)
            break
        case 'Delete Customer':
            ChangeForm(deleteUpdateCustomer)
            break
        default: 
            NSB.MsgBox("Not a form.")
            break
  }
}


  



