var CC, YY, MM, DD, d, dayValue;

var dayWeekNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var Century = 19;
var year =1989;
var month =12;
var day =5;
var gender = 'm'
var idexOfTheDay = ( ( (Century/4) -2*Century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + Date ) % 7

var idexOfTheDay = math.round(idexOfTheDay)
var dayTheUserWasBorn = DAYS_OF_THE_WEEK [idexOfTheDay]

if (gender === 'm'){
  MALE_NAMES
}else if (geder === 'f'){
  name = FEMALE_NAME [idexOfTheDay];
}

else{
  alert("Invalid gender");
}
console.log(dayTheUserWasBorn);
console.log(name);
var List =[dayTheUserWasBorn, name];
return List;


var userInputyear =parseInt(prompt("Enter the year"));
var userInputmonth =parseInt(prompt("Enter the month"));
var userInputday =parseInt(prompt("Enter the day"));
var userInputgender =parseInt(prompt("Enter the gender"));
var userInputCentury -parseInt( UserIputYear.toString().substring(0,2));

var output =calculatorNameAndDay(userInputCentury, userInputyear, userInputmonth, userInputday, userInputgender);
console.log(output);



function validate() {

  var genders = document.getElementsByName("gender");

  if( 
    document.myForm.year.value == "" || 
    document.myForm.year.value.length !=4 || 
    document.myForm.year.value >2100 || 
    document.myForm.year.value <=1900
    ) {

     alert( "Please provide a valid year of birth! eg 2019" );

     document.myForm.year.focus() ;

     return false;

  }

  else if
  ( 
    document.myForm.month.value == "" || isNaN( document.myForm.month.value ) ||

  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){

     alert( "Please provide your month of birth! between 1 and 12" );

     document.myForm.month.focus() ;

     return false;

  }

  else if( 
  document.myForm.date.value == "" || isNaN( document.myForm.month.value ) ||
  document.myForm.month.value.length != 2|| 
  document.myForm.date.value > 31 || 
  document.myForm.date.value <= 0) {

     alert( "Please provide a valid date that you were born in!" );

     document.myForm.day.focus() ;

     return false;

  }

  else if(genders[0].checked==false && genders[1].checked==false ) {

      alert("You must select male or female");

      return false;

  }  

  else{

    return true ;

  }

 

}

 

function calculateDayValue(){

  year = document.getElementById("year").value;

  CC = parseInt(year.substring(0,2));

  YY = parseInt(year.substring(2,4));

  MM = parseInt(document.getElementById("month").value);

  DD = parseInt(document.getElementById("date").value);

  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;

  console.log(d);

  return (Math.floor(d));

}

 

function getGender(){

  var genders = document.getElementsByName("gender");

  if(genders[0].checked == true){

    var gender = "male";

  }

  else if(genders[1].checked == true){

    var gender = "female";

  }

  else{

    return false;

  }

  switch(gender){

    case "male":

      if (dayValue == 1){

        alert("You were born on " +dayWeekNames[0] + " and Your akan name is " +maleAkanNames[0]+"!");

      }

      else if(dayValue == 2){

        alert("You were born on "+dayWeekNames[1] + " and Your akan name is " +maleAkanNames[1]+"!");

      }

      else if(dayValue == 3){

        alert("You were born on " +dayWeekNames[2]+ " and Your akan name is " +maleAkanNames[2]+"!");

      }

      else if(dayValue == 4){

        alert("You were born on "+dayWeekNames[3] +  " and Your akan name is " +maleAkanNames[3]+"!");

      }

      else if(dayValue == 5){

        alert("You were born on "+dayWeekNames[4] +  " and Your akan name is " +maleAkanNames[4]+"!");

      }

      else if(dayValue == 6){

        alert("You were born on "+dayWeekNames[5] +  " and Your akan name is " +maleAkanNames[5]+"!");

      }

      else if(dayValue == -0){

        alert("You were born on "+dayWeekNames[6] + " and Your akan name is " +maleAkanNames[6]+"!");

      }

    break;

    case "female":

      if (dayValue == 1){

        alert("You were born on "+dayWeekNames[0] + " and Your akan name is  " +femaleAkanNames[0]+"!");

      }

      else if(dayValue == 2){

        alert("You were born on " +dayWeekNames[1] + " and Your akan name is " +femaleAkanNames[1]+"!");

      }

      else if(dayValue == 3){

        alert("You were born on " +dayWeekNames[2] + " and Your akan name is " +femaleAkanNames[2]+"!");

      }

      else if(dayValue == 4){

        alert("You were born on " +dayWeekNames[3] + " and Your akan name is " +femaleAkanNames[3]+"!");

      }

      else if(dayValue == 5){

        alert("You were born on " +dayWeekNames[4] + " and Your akan name is " +femaleAkanNames[4]+"!");

      }

      else if(dayValue == 6){

        alert("You were born on " +dayWeekNames[5] + " and Your akan name is " + femaleAkanNames[5]+"!");

      }else if(dayValue == -0){

        alert("You were born on " +dayWeekNames[6] + " and Your akan name is " +femaleAkanNames[6]+"!");

      }

    break

    default:

         

  }

}

function findName(){

  dayValue = calculateDayValue();

  getGender();

}
alert