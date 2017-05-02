$(function() {
  $("button").on('click', function(event){
    event.preventDefault();
    var buttonSelected = $(this).text();

    var cardNumbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    var cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];

    if(buttonSelected === "Yes!") {
      cardSuits.forEach(function(suit) {
        cardNumbers.forEach(function(number) {
          $("ul").append("<li>" + number +" of " + suit + "</li>");
        });
      });
      $(".output").hide();
      $("#yes").show();
    }
    else if (buttonSelected === "No!") {
      cardSuits.forEach(function(suit) {
        cardNumbers.forEach(function(number) {
          $("ul").append("<li>" + number +" of " + suit + "</li>");
        });
      });
      $(".output").hide();
      $("#no").show();
    }
  });
});
