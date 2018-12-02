$(document).ready(function(){
  
  console.log('jQ connected');
  
  
    // add an event to button
    $('button').on('click', function(){
      var playerInput = $('.player-input').val();
      var playerInput2 = $('.player-input2').val();
      setPlayer(playerInput , playerInput2);
    })
  
    // function that sets localStorage value
    function setPlayer(name, name2) {
      window.localStorage.setItem('currentPlayer', name);
      window.localStorage.setItem('currentPlayerr', name2);
      renderPlayer();
    }
  
    // function that renders to the DOM
    function renderPlayer() {
      var player = window.localStorage.getItem('currentPlayer');
      var playerTag = $('<h3/>').text(player);
      $('.player-info').empty();
      $('.player-info').append(playerTag);

      var player = window.localStorage.getItem('currentPlayerr');
      var playerTag = $('<h3/>').text(player);
      $('.player-infoo').empty();
      $('.player-infoo').append(playerTag);


     
    }
  
    renderPlayer();




 // end


  var player1="x"; // X just put empty
   var player2="o"; // O just put empty
 
   var currentTurn = 1;
   var movesMade=0;
 
  //  var box = $(".box");
 //   console.log(box);
 // console.log("ready!");
 
 $(".box").one('click', function(){
   movesMade++;
 
   if(currentTurn === 1){
     $(this).text(player1);


    $(event.target).css("background", "url(Scr.png)");
    //  event.target.style.background = "#f3f3f3 url('Scr.png') no-repeat right top";
    
     currentTurn++;
   }else{
    $(this).text(player2);
    
    $(event.target).css("background", "url(sc.png)");
    //  event.target.style.background = "#f3f3f3 url('sc.png') no-repeat right top";
     currentTurn--;
   }

   winCheck()
  });


  var i = 0;
  
  function winCheck(){
    var zero = $('#zero');
    var one = $('#one');
    var two = $('#two');
    var three = $('#three');
    var four = $('#four');
    var five = $('#five');
    var six = $('#six');
    var seven = $('#seven');
    var eight = $('#eight');

    // console.log($('#zero'))
    if(zero.text() === player1 && one.text() === player1 && two.text() === player1 || 
    three.text() === player1 && four.text() === player1 && five.text() === player1 ||
    six.text() === player1 && seven.text() === player1 && eight.text() === player1 ){
      // alert ('the player1 is win');
      swal({
        title: 'Good job!',
        text: 'Player1 has Won.',
        imageUrl: 'https://media.giphy.com/media/xUPGcysZHzbcyoXWG4/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'End',
        audioControls:'Bart.mp3' ,
        animation: false
      });
      
    }
    
    if(two.text() === player1 && four.text() === player1 && six.text() === player1 || 
    zero.text() === player1 && four.text() === player1 && eight.text() === player1){
      // alert ('the player1 is win');
      swal({
        title: 'Good job!',
        text: 'Player1 has Won..',
        imageUrl: 'https://media.giphy.com/media/pHXhJbxIPg7fJnEcbq/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        audioUrl :'/code/wdi/project1/bom.WAV',
        imageAlt: 'Custom image',
        button: 'End',
        animation: false
      });
    }
    if(zero.text() === player1 && three.text() === player1 && six.text() === player1 || 
    one.text() === player1 && four.text() === player1 && seven.text() === player1 ||
    two.text() === player1 && five.text() === player1 && eight.text() === player1 ){
      // alert ('the player1 is win ');
      swal({
        title: 'Good job!',
        text: 'Player1 has Won.',
        imageUrl: 'https://media.giphy.com/media/7wc101HmzhkDm/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'End',
        animation: false
      });
    }
    if(zero.text() === player2 && one.text() === player2 && two.text() === player2 || 
    three.text() === player2 && four.text() === player2 && five.text() === player2 ||
    six.text() === player2 && seven.text() === player2 && eight.text() === player2 ){
      swal({
        title: 'Good job!',
        text: 'Player2 has Won.',
        imageUrl: 'https://media.giphy.com/media/26n79OaNx8sClwFby/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'End',
        animation: false
      });
    }
    if(two.text() === player2 && four.text() === player2 && six.text() === player2 || 
    zero.text() === player2 && four.text() === player2 && eight.text() === player2){
      // alert ('the player1 is win');
      swal({
        title: 'Good job!',
        text: ' Player2 has Won.',
        imageUrl: 'https://media.giphy.com/media/26n79OaNx8sClwFby/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'End',
        animation: false
      });
    }
    if(zero.text() === player2 && three.text() === player2 && six.text() === player2 || 
    one.text() === player2 && four.text() === player2&& seven.text() === player2 ||
    two.text() === player2 && five.text() === player2 && eight.text() === player2 ){
      // alert ('the player1 is win ');
      swal({
        title: 'Good job!',
        text: 'Player2 has Won.',
        imageUrl: 'https://media.giphy.com/media/26n79OaNx8sClwFby/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        button: 'End',
        animation: false
      });
    }
  
    
    i = i+1;
    console.log(i);
    if(i==9){
      swal({
        text: "it's a tie",
        imageUrl: 'https://media.giphy.com/media/26ufh9clS97q1cdcQ/giphy.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
      
      });
    }

  }
  
 
});