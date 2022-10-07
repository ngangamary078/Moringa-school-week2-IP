var CC, YY, MM, DD, d, dayValue;

const dayWeekNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];

const maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

const femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var Century = 19;
var year =1989;
var month =12;
var day =5;
var gender = 'm';

function calculatorNameAndDay(Century, year, month, day, geder){
  var idexOfTheDay =math.round((((Century/4) -2*Century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + Date ) % 7)

  var dayTheUserWasBorn = DAYS_OF_THE_WEEK [idexOfTheDay]
  varname = null;
  if (gender === 'm'){
    MALE_NAMES
  }else if (geder === 'f'){
    name = FEMALE_NAME [idexOfTheDay];
  }
  
  else{
    alert("Invalid gender");
  }
  
  var list = [dayTheUserWasBorn, name];
  return list;




}

function JSmain(){
var userInputyear =parseInt(prompt("Enter the year"));
var userInputmonth =parseInt(prompt("Enter the month"));
var userInputday =parseInt(prompt("Enter the day"));
var userInputgender =parseInt("Enter the gender");
var userInputCentury =parseInt( UserIputYear.toString().substring(0, 2));
var output = calcuteNameAndDay(userInputCentury, userInputyear, userInputmonth, userInputday, userInputgender);
var outputElement = document.getElementById("output");
outputElement.innerHTML = "You were born on: "+ output[0] +".Your Akan name is:"+ output[1];

outputElement.classList.add("akan.name");
}

