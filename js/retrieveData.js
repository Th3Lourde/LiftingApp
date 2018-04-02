


// Gets max data from the webpage
function getMaxData(){
  // Bench, Squat, Deadlift
  var maxData = [];
  var liftMax = 0;

  liftMax = $('#benchMax').val();
  maxData[0] = liftMax;

  liftMax = $('#bsMax').val();
  maxData[1] = liftMax;

  liftMax = $('#dlMax').val();
  maxData[2] = liftMax;

  // for (var i = 0; i < maxData.length; i++) {
  //   alert(maxData[i]);
  // }
  return maxData
}

function getAccessoryData(){
  var accessoryExercises = [];
  var value;
  // Gets the back data
  value = $('#back').val();
  if(value == 1){
    accessoryExercises[0] = "Dumbell Row";
  }else if (value == 2) {
    accessoryExercises[0] = "Weighted Pull-Ups";
  } else if (value == 3) {
    accessoryExercises[0] = "Pulldowns";
  } else if (value == 4) {
    accessoryExercises[0] = "Machine Rows";
  } else if (value == 0) {
    accessoryExercises[0] = "None";
  }

  value = $('#shoulder').val();
  if(value == 1){
    accessoryExercises[1] = "Seated Dumbell OH Press";
  }else if (value == 2) {
    accessoryExercises[1] = "Standing D.O.P";
  } else if (value == 3) {
    accessoryExercises[1] = "Military Press";
  } else if (value == 4) {
    accessoryExercises[1] = "Lateral Dumbell Raises";
  } else if (value == 0) {
    accessoryExercises[1] = "None";
  }

  value = $('#bicep').val();
  if(value == 1){
    accessoryExercises[2] = "Dumbell Curl";
  }else if (value == 2) {
    accessoryExercises[2] = "Barbell Curl";
  } else if (value == 3) {
    accessoryExercises[2] = "Dumbell Hammer Curl";
  } else if (value == 4) {
    accessoryExercises[2] = "Pulleys/Machines";
  } else if (value == 0) {
    accessoryExercises[2] = "None";
  }

  value = $('#leg1').val();
  if(value == 1){
    accessoryExercises[3] = "Calf Raises On Leg Press";
  }else if (value == 2) {
    accessoryExercises[3] = "Any form of calf raise";
  } else if (value == 3) {
    accessoryExercises[3] = "Leg Curl";
  } else if (value == 4) {
    accessoryExercises[3] = "Leg Extension";
  } else if (value == 0) {
    accessoryExercises[3] = "None";
  }

  value = $('#leg2').val();
  if(value == 1){
    accessoryExercises[4] = "Box Jumps";
  }else if (value == 2) {
    accessoryExercises[4] = "Powercleans";
  } else if (value == 3) {
    accessoryExercises[4] = "Jump Squats";
  } else if (value == 4) {
    accessoryExercises[4] = "Med Ball Throws";
  } else if (value == 0) {
    accessoryExercises[4] = "None";
  }

  // for (var i = 0; i < accessoryExercises.length; i++) {
  //   console.log(accessoryExercises[i]);
  // }
  return accessoryExercises;
}

function getExtraData(){
  var extraData = []
  var data;
  data = $('#weightUnit').val()
  if (data == 1){
    extraData[0] = 'Kg';
  } else if (data == 2) {
    extraData[0] = 'Lbs';
  }

  extraData[1] = $('#date').val();

  return extraData;
}



$("#sync-submit").click(function() {
  // Get the max info of the user
  // 0 = bench, 1 = bs, 2 = dl
  var maxData = []
  maxData = getMaxData();

  // Get accessory exercise
  var accessoryExercises = []
  accessoryExercises = getAccessoryData();

  var extraData = [];
  extraData = getExtraData();

  userData = []
  userData[0] = maxData;
  userData[1] = accessoryExercises;
  userData[2] = extraData;

  $global_user_data = userData;


  //Data from User
  // Store it in the local storage
  localStorage.setItem('selected', userData );




  window.location = "C:/Users/elour/Desktop/petProjects/LiftingApp/docs/week1.html";
});







// Space Holder
