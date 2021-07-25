var name = prompt("what is your name?")
alert("Hello welcome to my website" +  name)
var favBooks = prompt("What is your favorite book?")
document.write('<p>' + favBook + "</p>")
if(favBook=="The mountain is you"){
  document.write("<div>" + "<h3>" + favBook + "</h3>" + "<img src='https://images-na.ssl-images-amazon.com/images/I/615NRk7ETOL.jpg' alt='The mountain is you' width='300' height='400'/>")

}
else if (favBook=="A gentle reminder"){
  document.write("<div>" + "<h3>" + favBook + "</h3>" + "<img src='https://m.media-amazon.com/images/I/31N4PmRrqrL.jpg' alt='A gentle reminder' width='300' height='400'/>")
}
else if (favBook=="Think like a monk"){
  document.write("<div>" + "<h3>" + favBook + "</h3>" + "<img src= 'https://images-na.ssl-images-amazon.com/images/I/71ru1Xg+VyL.jpg' alt='Think like a monk' width='300' height='400'/>")
  }
else{
  alert('We do not have this book')
}

var favBook = prompt("What is your favorite book out of these three books? 1. The mountain is you 2. A gentle reminder 3. Think like a monk")

while(favBook != "The mountain is you" && favBook != "A gentle reminder" && favBook != "Think like a monk"){
  favBook = prompt("What is your favorite book The mountain is you, A gentle reminder or Think like a monk")
}

var number = prompt("Enter the number of the picture you want to view")
if(favBook=="The mountain is you"){
  for(i=0; i<number; i++)
  document.write(
    "<div>" + "<h3>" + favBook + "</h3>" + "<img src=https://images-na.ssl-images-amazon.com/images/I/615NRk7ETOL.jpg alt='The mountain is you' width=300 height=400/>" + "</div>")
}
else if(favBook == "A gentle reminder"){
  for(i=0; 1<number; i++)
  document.write(
    "<div>" + "<h3>" + favBook + "</h3>" + "<img src=' src='https://m.media-amazon.com/images/I/31N4PmRrqrL.jpg' alt='A gentle reminder' width='300' height='400'/>" + "</div>"
  )
}
else if(favBook == "Think like a monk"){
  for(i=0; i<number; i++){
  document.write(
    "<div>" + "<h3>" + favBook + "</h3>" + "<img src =' https://images-na.ssl-images-amazon.com/images/I/71ru1Xg+VyL.jpg' alt='Think like a monk' width='300' height='400'/> "
  )
  }
}
else{
  alert('Not available')
}

var rates = prompt("Please rate us out of 5")
function rate(){
  while(rates>5){
    rates=prompt("Error, Please try again")
  }
  return rate;
}
rate();