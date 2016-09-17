'use strict'

$(function() {

  var turn = 0;

  $('th').click(function() {
    if ($(this).text() === '' ) {
      if ( turn % 2 === 0 ){
        $(this).text('X');
         $(this).addClass('x');
      } else {
        $(this).text('O');
         $(this).addClass('o');
      }
      turn ++;
    } else {
      alert("Choose an empty square!");
   }
   if (turn >= 5) {
   window.setTimeout(checkWinner, 10, $(this).text());
  }
  //  checkWinner()
 });

    function checkWinner() {
 if ( $('#1').text() === 'X' && $('#2').text() === 'X' && $('#3').text() === 'X' ) {
   alert("X WINS!");
   location.reload();
   }
 else if ( $('#1').text() === 'O' && $('#2').text() === 'O' && $('#3').text() === 'O' ) {
   alert("O WINS!");
   location.reload();
   }
 else if ( $('#4').text() === 'X' && $('#5').text() === 'X' && $('#6').text() === 'X' ) {
   alert("X WINS!");
   location.reload();
   }
 else if ( $('#4').text() === 'O' && $('#5').text() === 'O' && $('#6').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
   }
 else if ( $('#7').text() === 'X' && $('#8').text() === 'X' && $('#9').text() === 'X' ) {
  alert("X WINS!");
  location.reload();
   }
 else if ( $('#7').text() === 'O' && $('#8').text() === 'O' && $('#9').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
else if ( $('#1').text() === 'X' && $('#5').text() === 'X' && $('#9').text() === 'X' ) {
  alert("X WINS!");
  location.reload();
  }
else if ( $('#1').text() === 'O' && $('#5').text() === 'O' && $('#9').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
else if ( $('#3').text() === 'X' && $('#5').text() === 'X' && $('#7').text() === 'X' ) {
    alert("X WINS!");
    location.reload();
  }
else if ( $('#3').text() === 'O' && $('#5').text() === 'O' && $('#7').text() === 'O' ) {
    alert("O WINS!");
    location.reload();
    }
else if ( $('#1').text() === 'O' && $('#5').text() === 'O' && $('#9').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
else if ( $('#1').text() === 'X' && $('#5').text() === 'X' && $('#9').text() === 'X' ) {
    alert("X WINS!");
    location.reload();
    }
else if ( $('#1').text() === 'O' && $('#4').text() === 'O' && $('#7').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
else if ( $('#1').text() === 'X' && $('#4').text() === 'X' && $('#7').text() === 'X' ) {
  alert("X WINS!");
  location.reload();
  }
else if ( $('#2').text() === 'O' && $('#5').text() === 'O' && $('#8').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
else if ( $('#2').text() === 'X' && $('#5').text() === 'X' && $('#8').text() === 'X' ) {
  alert("X WINS!");
  location.reload();
  }
else if ( $('#3').text() === 'X' && $('#6').text() === 'X' && $('#9').text() === 'X' ) {
  alert("X WINS!");
  location.reload();
  }
else if ( $('#3').text() === 'O' && $('#6').text() === 'O' && $('#9').text() === 'O' ) {
  alert("O WINS!");
  location.reload();
  }
}



});



//   markSquare(this)
// });
// var self = $(this);
//
// function markSquare(th) {
