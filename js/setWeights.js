
// Get it from the local storage
var selected = localStorage.getItem('selected');

// Example User Data
// Bench,
var selected = []
selected[0] = 205;
selected[1] = 345;
selected[2] = 405;
selected[3] = "Weighted Pullups";
selected[4] = "Military Press";
selected[5] = "Bicep Curl"
selected[6] = "None";
selected[7] = "Power Clean";

function makeBlack(myId){
  $(myId).css('background-color', 'black');
}

function makeWhite(myId){
  $(myId).css('background-color', 'white');
}


// Bench, Squat, Deadlift, Back, Shoulder, Bicep, Leg1
// Leg2, Kg/Lbs, Start Date

// Add parameter so can be either kgs or lbs
function liftingNumber(max, percent){
  var maxNum = parseInt(max);
  // alert(maxNum)
  return max * percent;
}

function week1Day1(){
  number = liftingNumber(selected[1], .80 );
  // alert(number);
  $('#day').text('Day 1');
  $('#description').text(' - Lower Body 80% of Max Squat, Deadlift');

  // Changes the name of the first list
  $('.excercise-1-name').text('Squat');
  // Changes the weight that will be lifted
  $('.excercise-1-1-weight').text(number);
  $('.excercise-1-2-weight').text(number);
  $('.excercise-1-3-weight').text(number);
  $('.excercise-1-4-weight').text(number);

  // Changes the rep scheme
  $('.excercise-1-1-reps').text('x6');
  $('.excercise-1-2-reps').text('x6');
  $('.excercise-1-3-reps').text('x6');
  $('.excercise-1-4-reps').text('x6');


  number = liftingNumber(selected[2], .80 );

  // Changes the name of the first list
  $('.excercise-2-name').text('Deadlift');
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(number);
  $('.excercise-2-2-weight').text(number);
  $('.excercise-2-3-weight').css('background-color', 'black');
  $('.excercise-2-4-weight').css('background-color', 'black');

  // Changes the rep scheme
  $('.excercise-2-1-reps').text('x6');
  $('.excercise-2-2-reps').text('x6');
  $('.excercise-2-3-reps').css('background-color', 'black');
  $('.excercise-2-4-reps').css('background-color', 'black');

  $('.excercise-3-name').text('Optional 1');
  // $('.excercise-4-name').text(selected[6]);
  $('.excercise-3-1-reps').text(' ');
  $('.excercise-3-2-reps').text(' ');
  makeBlack('.exercise-3-1-reps');
  $('.excercise-3-3-reps').text(' ');
  $('.excercise-3-4-reps').css('background-color', 'black');

  $('.excercise-4-name').text(selected[7]);
  // $('.excercise-4-name').text(selected[6]);
  $('.excercise-4-1-reps').text('x6');
  $('.excercise-4-2-reps').text('x6');
  $('.excercise-4-3-reps').text('x6');
  $('.excercise-4-4-reps').css('background-color', 'black');


  // Make exercise weight section black
  $('.excercise-3-4-weight').css('background-color', 'black');
  $('.excercise-4-4-weight').css('background-color', 'black');



  $('.workout-table').css('height','67.2vh');
  $('.workout-table').css('width','81vw');


  $('.excercise-1-2-weight').css("background-color","white");
  $('.excercise-1-2-reps').css("background-color","white");
  $('.excercise-1-3-weight').css("background-color","white");
  $('.excercise-1-3-reps').css("background-color","white");
  $('.excercise-1-4-weight').css("background-color","white");
  $('.excercise-1-4-reps').css("background-color","white");

}

function week1Day2(){
  var number;
  $('#description').text(' - Upper Body 50%, 67.5%, 70%, 75.5% of Max Bench');

  $('#day').text('Day 2');

  // alert(number);

  // Changes the name of the first list
  $('.excercise-1-name').text('Bench');
  number = Math.round(liftingNumber(selected[0], .50 ));
  // Changes the weight that will be lifted
  $('.excercise-1-1-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .675) );
  $('.excercise-1-2-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .75 ));
  $('.excercise-1-3-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .775) );
  $('.excercise-1-4-weight').text(number);


  // Changes the rep scheme
  $('.excercise-1-1-reps').text('x8');
  $('.excercise-1-2-reps').text('x8');
  $('.excercise-1-3-reps').text('x8');
  $('.excercise-1-4-reps').text('x8');

  // Changes the name of the first list
  // Back Accessory
  $('.excercise-2-name').text(selected[3]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-3-weight').css("background-color","white");
  $('.excercise-2-4-weight').text(" ");
  $('.excercise-2-4-weight').css("background-color","white");



  // Changes the rep scheme
  $('.excercise-2-1-reps').text('x12');
  $('.excercise-2-2-reps').text('x12');
  $('.excercise-2-3-reps').text('x8');
  $('.excercise-2-3-reps').css("background-color","white");
  $('.excercise-2-4-reps').text('x6');
  $('.excercise-2-4-reps').css("background-color","white");


  $('.excercise-3-name').text(selected[4]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-3-1-reps').text('x12');
  $('.excercise-3-2-reps').text('x12');
  $('.excercise-3-3-reps').text('x8');
  $('.excercise-3-4-reps').text('x6');


  $('.excercise-4-name').text(selected[5]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-4-1-reps').text('x12');
  $('.excercise-4-2-reps').text('x12');
  $('.excercise-4-3-reps').text('x8');
  $('.excercise-4-4-reps').text('x6');

  // Make some things not black
  $('.excercise-1-2-weight').css("background-color","white");
  $('.excercise-1-2-reps').css("background-color","white");
  $('.excercise-1-3-weight').css("background-color","white");
  $('.excercise-1-3-reps').css("background-color","white");
  $('.excercise-1-4-weight').css("background-color","white");
  $('.excercise-1-4-reps').css("background-color","white");

  $('.excercise-4-4-weight').css("background-color","white");
  $('.excercise-4-4-reps').css("background-color","white");
  $('.excercise-3-4-weight').css("background-color","white");
  $('.excercise-3-4-reps').css("background-color","white");

}

function week1Day3(){
  var number;

  $('#day').text('Day 3');
  $('#description').text(' - Upper Body 50%, 67.5%, 70%, 75.5% of Max Bench');

  // $('#description').text(' - Upper Body 80% of Max');

  // alert(number);

  number = Math.round(liftingNumber(selected[0], .50 ));
  // Changes the name of the first list
  $('.excercise-1-name').text('Bench');
  // Changes the weight that will be lifted
  number = Math.round(liftingNumber(selected[0], .50 ));
  $('.excercise-1-1-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .675 ));
  $('.excercise-1-2-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .75 ));
  $('.excercise-1-3-weight').text(number);
  number = Math.round(liftingNumber(selected[0], .775 ));
  $('.excercise-1-4-weight').text(number);


  // Changes the rep scheme
  $('.excercise-1-1-reps').text('x8');
  $('.excercise-1-2-reps').text('x8');
  $('.excercise-1-3-reps').text('x8');
  $('.excercise-1-4-reps').text('x8');

  // Changes the name of the first list
  // Back Accessory
  $('.excercise-2-name').text(selected[3]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");

  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-3-weight').css("background-color","white");
  $('.excercise-2-4-weight').text(" ");
  $('.excercise-2-4-weight').css("background-color","white");


  // Changes the rep scheme
  $('.excercise-2-1-reps').text('x12');
  $('.excercise-2-2-reps').text('x12');
  $('.excercise-2-3-reps').text('x8');
  $('.excercise-2-3-reps').css("background-color","white");
  $('.excercise-2-4-reps').text('x6');
  $('.excercise-2-4-reps').css("background-color","white");


  $('.excercise-3-name').text(selected[4]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-3-1-reps').text('x12');
  $('.excercise-3-2-reps').text('x12');
  $('.excercise-3-3-reps').text('x8');
  $('.excercise-3-4-reps').text('x6');


  $('.excercise-4-name').text(selected[5]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-4-1-reps').text('x12');
  $('.excercise-4-2-reps').text('x12');
  $('.excercise-4-3-reps').text('x8');
  $('.excercise-4-4-reps').text('x6');




  // Make some things not black
  $('.excercise-1-2-weight').css("background-color","white");
  $('.excercise-1-2-reps').css("background-color","white");
  $('.excercise-1-3-weight').css("background-color","white");
  $('.excercise-1-3-reps').css("background-color","white");
  $('.excercise-1-4-weight').css("background-color","white");
  $('.excercise-1-4-reps').css("background-color","white");

  $('.excercise-4-4-weight').css("background-color","white");
  $('.excercise-4-4-reps').css("background-color","white");
  $('.excercise-3-4-weight').css("background-color","white");
  $('.excercise-3-4-reps').css("background-color","white");


}

function week1Day4(){
  number = Math.round(liftingNumber(selected[1], .70 ));
  // alert(number);
  $('#day').text('Day 4');
  $('#description').text(' - Lower Body 70% Max of Squat, Deadlift');

  // Changes the name of the first list
  $('.excercise-1-name').text('Squat')
  // Changes the weight that will be lifted
  $('.excercise-1-1-weight').text(number);
  $('.excercise-1-2-weight').text(number);
  $('.excercise-1-3-weight').text(number);
  $('.excercise-1-4-weight').text(number);

  // Changes the rep scheme
  $('.excercise-1-1-reps').text('x8');
  $('.excercise-1-2-reps').text('x8');
  $('.excercise-1-3-reps').text('x8');

  $('.excercise-1-4-reps').text('x8');


  number = Math.round(liftingNumber(selected[2], .70 ));


  // Changes the name of the first list
  $('.excercise-2-name').text('Deadlift');
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(number);
  $('.excercise-2-2-weight').text(number);
  $('.excercise-2-3-weight').css("background-color","black");
  $('.excercise-2-4-weight').css("background-color","black");

  // Changes the rep scheme
  $('.excercise-2-1-reps').text('x8');
  $('.excercise-2-2-reps').text('x8');
  $('.excercise-2-3-reps').css("background-color","black");
  $('.excercise-2-4-reps').css("background-color","black");

  $('.excercise-3-name').text('Optional 1');
  // $('.excercise-4-name').text(selected[6]);
  $('.excercise-3-1-reps').text(' ');
  $('.excercise-3-2-reps').text(' ');
  $('.excercise-3-3-reps').text(' ');
  $('.excercise-3-4-reps').text(' ');

  $('.excercise-4-name').text(selected[7]);
  // $('.excercise-4-name').text(selected[6]);
  $('.excercise-4-1-reps').text('x8');
  $('.excercise-4-2-reps').text('x8');
  $('.excercise-4-3-reps').text('x8');
  $('.excercise-4-4-reps').text(' ');

  $('.workout-table').css('height','67.2vh');
  $('.workout-table').css('width','81vw');



  // Make some things not black
  $('.excercise-1-2-weight').css("background-color","white");
  $('.excercise-1-2-reps').css("background-color","white");
  $('.excercise-1-3-weight').css("background-color","white");
  $('.excercise-1-3-reps').css("background-color","white");
  $('.excercise-1-4-weight').css("background-color","white");
  $('.excercise-1-4-reps').css("background-color","white");

  $('.excercise-4-4-weight').css("background-color","black");
  $('.excercise-4-4-reps').css("background-color","black");
  $('.excercise-3-4-weight').css("background-color","black");
  $('.excercise-3-4-reps').css("background-color","black");


}

function week1Day5(){
  var number;
  number = liftingNumber(selected[0], .80 );

  $('#day').text('Day 5');
  $('#description').text(' - Upper Body 80% Max Reps Bench');

  // alert(number);

  // Changes the name of the first list
  $('.excercise-1-name').text('Bench');
  // Changes the weight that will be lifted
  $('.excercise-1-1-weight').text(number);
  $('.excercise-1-2-weight').css("background-color","black");
  $('.excercise-1-3-weight').css("background-color","black");
  $('.excercise-1-4-weight').css("background-color","black");


  // Changes the rep scheme
  $('.excercise-1-1-reps').text('MR');
  $('.excercise-1-2-reps').css("background-color","black");
  $('.excercise-1-3-reps').css("background-color","black");
  $('.excercise-1-4-reps').css("background-color","black");

  // Changes the name of the first list
  // Back Accessory
  $('.excercise-2-name').text(selected[3]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-2-1-reps').text('x12');
  $('.excercise-2-2-reps').text('x12');
  $('.excercise-2-3-reps').text('x8');
  $('.excercise-2-3-reps').css("background-color","white");
  $('.excercise-2-4-reps').text('x6');
  $('.excercise-2-4-reps').css("background-color","white");


  $('.excercise-3-name').text(selected[4]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-3-weight').css("background-color","white");
  $('.excercise-2-4-weight').text(" ");
  $('.excercise-2-4-weight').css("background-color","white");


  // Changes the rep scheme
  $('.excercise-3-1-reps').text('x12');
  $('.excercise-3-2-reps').text('x12');
  $('.excercise-3-3-reps').text('x8');
  $('.excercise-3-4-reps').text('x6');
  $('.excercise-3-4-reps').css("background-color","white");
  $('.excercise-4-4-reps').css("background-color","white");
  $('.excercise-3-4-weight').css("background-color","white");
  $('.excercise-4-4-weight').css("background-color","white");


  $('.excercise-4-name').text(selected[5]);
  // Changes the weight that will be lifted
  $('.excercise-2-1-weight').text(" ");
  $('.excercise-2-2-weight').text(" ");
  $('.excercise-2-3-weight').text(" ");
  $('.excercise-2-4-weight').text(" ");


  // Changes the rep scheme
  $('.excercise-4-1-reps').text('x12');
  $('.excercise-4-2-reps').text('x12');
  $('.excercise-4-3-reps').text('x8');
  $('.excercise-4-4-reps').text('x6');

}




function addData(){
  var week;
  var date;
  var number;
  week = $('#week').text();
  date = $('#day').text();
  if (week = 'Week 1:') {
    // Week 1 Reps/Sets
    if (date = 'Day 1') {
      //Add in Day one Data
      number = liftingNumber(selected[1], .80 )
      // alert(number);
      // Changes the weight that will be lifted
      $('.excercise-1-1-weight').text(number);
      $('.excercise-1-2-weight').text(number);
      $('.excercise-1-3-weight').text(number);
      $('.excercise-1-4-weight').text(number);

      // Changes the rep scheme
      $('.excercise-1-1-reps').text('x6');
      $('.excercise-1-2-reps').text('x6');
      $('.excercise-1-3-reps').text('x6');
      $('.excercise-1-4-reps').text('x6');

      week1Day1();
    } else if (date == 'Day 2') {
      alert("Week 1: Day 2");

      // Add in Day two
    }

  }


}






// Changes the data based
// upon what day it is

$('#showDayone').click(function(){
  // alert("Show Day One");
  week1Day1();
});

$('#showDaytwo').click(function(){
  // alert("Show Day Two");
  week1Day2();
});

$('#showDaythree').click(function(){
  // alert("Show Day Three");
  week1Day3();
});

$('#showDayfour').click(function(){
  // alert("Show Day Four");
  week1Day4();
});

$('#showDayfive').click(function(){
  // alert("Show Day Five");
  week1Day5();
});





$( document ).ready(function() {
    // alert( "ready!" );
    addData();
    // $('#weekDescription').text(' Muscular Conditioning ');

});
