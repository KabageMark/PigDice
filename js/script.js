var totalPoints1=0;
var totalPoints2=0;

var points1 = function(playerscore){
  if(playerscore === 6){

  return (totalPoints1 += 1);
  }else{
  return 0;
 }
}
var points2 = function(playerscore){
  if(playerscore === 6){

  return (totalPoints2 += 1);
  }else{
  return 0;
 }
}
// var compare = function(player1score,player2score){
//   if (totalPoints1 = 5);
//   alert("player 1 is winner")
// }else if{
//   (totalPoints12 = 5);
//   alert("player 2 is winner")
// }


$(document).ready(function(){
  $("button#play1").click(function(){
      event.preventDefault();
    var username1 = $("input#player1").val();
    $(".user1").text(username1);
  });
  $("button#play2").click(function(){
    var username2 = $("input#player2").val();
    $(".user2").text(username2);
  });
  $("button#rolldice1").click(function(){
    var player1score = Math.floor((Math.random() * 6) + 1)
    var scorepoints1 = points1(player1score)

    $(".score1").text(player1score);
    $(".points1").text("score:" + totalPoints1);
  });
  $("button#rolldice2").click(function(){
    var player2score = Math.floor((Math.random() * 6) + 1)
    var scorepoints2 = points2(player2score);

    $(".score2").text(player2score);
    $(".points2").text("score:" + totalPoints2);
  });
  $("button#hold1").click(function(){
    $("button#rolldice1").toggle();
  });
  $("button#hold2").click(function(){
    $("button#rolldice2").toggle();
  });
});
