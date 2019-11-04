
seeCustomers.onshow=function(){
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

  drpCName.clear()   
  for (i = 0; i < results.length; i++) {
  drpCName.addItem(results[i])
    }
  }
} 
}


drpCName.onclick=function(s){
    if (typeof(s) == "object")   
      return 

    else {  // the user picked something
    let query2 = `SELECT * FROM customer Where name = "${s}";`
    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mrs82759&pass=3751223&database=mrs82759&query=" + query2)

    if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results2 = JSON.parse(req1.responseText)
    if (results2.length == 0)
        NSB.MsgBox("Error")
    else {        
        // output the names of all the states

  let message = "" 
  for (i = 0; i < results2.length; i++)
     message = message + results2[i]
  taMoreInfo.value = message
      }
    }
  }
}


hmbMenuCustomers.onclick=function(n){
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
