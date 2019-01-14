document.getElementById("btn").addEventListener("click" , function (){ alert('Praise the Sun!'); });


const user_number = (e) => {
        e.preventDefault();
        const value = parseInt(document.getElementById('takeinput').value, 10);
        const message = (9000 >= value) ? 'Not many souls' : 'Thats over 9,000!';
        console.log(message);
      }
      
      const button = document.getElementById('button');
      button.addEventListener('click', user_number);



for (i = 1; i<30; i++)
        if (i > 11) 
        console.log(i+ " PASSED 11")
        else
        console.log(i)


/*let button = document.getElementById("button")

var input = document.getElementById("number_of_souls").getElementById("takeinput").value

let user_number=  function(){
    
    for (let i = 1; i<1; i++) {

        if (9000<input) {

        alert("Not many souls") }

        else 9000>input 

        alert("That's over 9,000!")
}
}

button.addEventListener("click", user_number)
   */