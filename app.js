document.getElementById("btn").addEventListener("click" , function (){ alert('Praise the Sun!'); });


let form = document.getElementById("number_of_souls")

let user_number=  function(e){
  e.preventDefault()
  var input = document.getElementById("takeinput").value
  if (input<=9000) 
        {console.log("Not many souls")
      }
  else  {console.log("That's over 9,000!")
      }
}

form.addEventListener("submit", user_number)



for (i = 1; i<30; i++) {
        if (i > 11) {
        console.log( i + " PASSED 11")
    }   else{
        console.log(i)
    }
}


