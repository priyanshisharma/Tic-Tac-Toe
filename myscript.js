
var s1 = document.querySelector('#c1');
var s2 = document.querySelector("#c2");
var s3 = document.querySelector("#c3");
var s4 = document.querySelector("#c4");
var s5 = document.querySelector("#c5");
var s6 = document.querySelector("#c6");
var s7 = document.querySelector("#c7");
var s8 = document.querySelector("#c8");
var s9 = document.querySelector("#c9");
var restart = document.querySelector('#b');


var cross = prompt("Who is playing with the cross?")
var circle = prompt("Who is playing with the circle")
alert(" All the best "+circle+' and ' +cross)

function checkwin()
{
  if(s1.textContent === 'X')
  {
    if(s2.textContent === 'X')
    {
      if(s3.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'

      }
    }
    if(s4.textContent === 'X')
    {
      if(s7.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
    if(s5.textContent === 'X')
    {
      if(s9.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  if(s2.textContent === 'X')
  {
    if(s5.textContent === 'X')
    {
      if(s8.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  if(s3.textContent === 'X')
  {
    if(s6.textContent === 'X')
    {
      if(s9.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  if(s4.textContent === 'X')
  {
    if(s5.textContent === 'X')
    {
      if(s6.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  if(s7.textContent === 'X')
  {
    if(s8.textContent === 'X')
    {
      if(s9.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  if(s3.textContent === 'X')
  {
    if(s5.textContent === 'X')
    {
      if(s7.textContent === 'X')
      {
        alert(cross+" wins!")
        s1.textContent= cross+' won!'
        s2.textContent= cross+' won!'
        s3.textContent= cross+' won!'
        s4.textContent= cross+' won!'
        s5.textContent= cross+' won!'
        s6.textContent= cross+' won!'
        s7.textContent= cross+' won!'
        s8.textContent= cross+' won!'
        s9.textContent= cross+' won!'
      }
    }
  }
  //for circle
  if(s1.textContent === 'O')
  {
    if(s2.textContent === 'O')
    {
      if(s3.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'

      }
    }
    if(s4.textContent === 'O')
    {
      if(s7.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
    if(s5.textContent === 'O')
    {
      if(s9.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
  if(s2.textContent === 'O')
  {
    if(s5.textContent === 'O')
    {
      if(s8.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
  if(s3.textContent === 'O')
  {
    if(s6.textContent === 'O')
    {
      if(s9.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
  if(s4.textContent === 'O')
  {
    if(s5.textContent === 'O')
    {
      if(s6.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
  if(s7.textContent === 'O')
  {
    if(s8.textContent === 'O')
    {
      if(s9.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
  if(s3.textContent === 'O')
  {
    if(s5.textContent === 'O')
    {
      if(s7.textContent === 'O')
      {
        alert(circle+" wins!")
        s1.textContent= circle+' won!'
        s2.textContent= circle+' won!'
        s3.textContent= circle+' won!'
        s4.textContent= circle+' won!'
        s5.textContent= circle+' won!'
        s6.textContent= circle+' won!'
        s7.textContent= circle+' won!'
        s8.textContent= circle+' won!'
        s9.textContent= circle+' won!'
      }
    }
  }
}
// Create a function that will check the square marker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent='X';
    //this.textContent=':)'
    // console.log(marker)
  }else if (this.textContent==='X') {
    this.textContent='O';
  }else {
    //this.innerHTML="<br><br><br>";
    this.textContent = ''
  }
  checkwin();
};

// Use a for loop to add Event listeners to all the squares

  s1.addEventListener("click", changeMarker);
  s2.addEventListener('click', changeMarker);
  s3.addEventListener('click', changeMarker);
  s4.addEventListener('click', changeMarker);
  s5.addEventListener('click', changeMarker);
  s6.addEventListener('click', changeMarker);
  s7.addEventListener('click', changeMarker);
  s8.addEventListener('click', changeMarker);
  s9.addEventListener('click', changeMarker);


  function clearBoard() {
    
        s1.textContent = '';
        s2.textContent = '';
        s3.textContent = '';
        s4.textContent = '';
        s5.textContent = '';
        s6.textContent = '';
        s7.textContent = '';
        s8.textContent = '';
        s9.textContent = '';
        s1.innerHTML='<br><br><br>'
        s2.innerHTML='<br><br><br>'
        s3.innerHTML='<br><br><br>'
        s4.innerHTML='<br><br><br>'
        s5.innerHTML='<br><br><br>'
        s6.innerHTML='<br><br><br>'
        s9.innerHTML='<br><br><br>'
        s7.innerHTML='<br><br><br>'
        s8.innerHTML='<br><br><br>'
        
  
  }
  restart.addEventListener('click',clearBoard)
/*
  s1.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse currently Over";
    headOne.style.color = 'red';
  })

headtwo.addEventListener("click",function(){
  headOne.innerHTML="<br><br><br>" 
})
*/
// Double Click



