deleteUpdateCustomer.onshow=function(){
    let query = "SELECT DISTINCT name FROM customer;"  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("Error")
    else {        
        // output the names of all the states

  drpDU.clear()   
  for (i = 0; i < results.length; i++) {
  drpDU.addItem(results[i])
    }
  }
} 

}

  drpDU.onclick=function(m){
  let newName = inptUpdate.value
    if (typeof(m) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    rdoUpdateDelete.onchange=function(){
    if (rdoUpdateDelete.value == 0)  // picked the first choice
    drpDU.value = m 
    let oldName = m
    
    let query9 = 'UPDATE customer SET name = ' + '"' + newName + '"' + ' WHERE name = ' + '"' + oldName + '"' + ';'
    console.log(query9)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query9)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed the company name.")

    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);

  let companyNameDel = inptCustomer.value
// make sure the name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= results.length - 1; i++) {
        if (oldName == results[i][0])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
  let query22 = "DELETE FROM customer WHERE name = " + '"' + oldName + '"'; 
  //alert(query)
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query22)

    
    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
        
    if (results.length == 0)   // the array is empty so no results returned             
        NSB.MsgBox("There are no companies with that name.")
    else {        
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
      
      btnSubmit.onclick=function(){
    
    drpDU.value = m   // make dropdown show choice user made
    NSB.MsgBox("s is " + m)


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
        taCompanyList.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
    }
  }
}  
}
}
}
}
}
}



hmbMenuDelete.onclick=function(n){
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
