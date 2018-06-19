
var today = new Date()

/// Test Inputs
// input 1:
var taskArrayWater = ["weekly", "thursday"]
// output 1:
// [Thursday June 21 Date object, June 28 Date object, July 5 date object, July 12]
// input 2:
var taskArrayFert = ["Once a month", 100]
// output 2:
// [Wednesday, July 18th]
// input 3:
 var taskArrayWater = ["Every other week","saturday"]

// use this with index of
var weekdayArray=["sunday", "monday","tuesday",
"wednesday","thursday","friday","saturday"]

Plant.prototype.makeSchedule = function(taskKey) {
  var finalDays = []
  var ddToday = today.getDate()
  var daysLater = 28
  var fourWeeksLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysLater)
  console.log(taskKey)
  // account for weekly tasks
  if (taskArrayWater[0] === "weekly") {
    var firstDay = new Date()
    var dayOfWeek = firstDay.getDay()
    while(firstDay.getDay() !== weekdayArray.indexOf(taskKey[0])){
      firstDay.setDate(firstDay.getDate() + 1)
    }
    finalDays.push(firstDay)
    finalDays.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 7))
    finalDays.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 14))
    finalDays.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 21))
  return finalDays
  } else if (taskKey[0] === "Every other week"){
    var firstDay = new Date()
    var dayOfWeek = firstDay.getDay()
    while(firstDay.getDay() !== weekdayArray.indexOf(taskKey[1])){
      firstDay.setDate(firstDay.getDate() + 1)
    }
    finalDays.push(firstDay)
    finalDays.push(new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 14))
    return finalDays

  } else if (taskKey[0] === "Once a month"){
    var firstDay = new Date()
    while(firstDay < fourWeeksLater) {
      console.log(firstDay)
      if (firstDay.getDate() === taskKey[1]) {
      finalDays.push(firstDay)
      return finalDays
      } else {
        firstDay = new Date (firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 1)
      }
    }
  }
}

var allPlantTemplates = []

$(function(){
  document.getElementById("selectPlant").onchange = function(){
    var plantName = $("#selectPlant :selected").text()
    console.log(plantName)
    for(plant = 0; plant < allPlantTemplates.length; ++plant){
      if(plantName === allPlantTemplates[plant].commonName){
        var sunlight = allPlantTemplates[plant].sunlight
        var hardiness = allPlantTemplates[plant].hardiness
        var waterFrequency = allPlantTemplates[plant].water[0]
        var pruningFrequency = allPlantTemplates[plant].pruning[0]
        var fertilizingFrequency = allPlantTemplates[plant].fertilizing[0]
       $("#sunlightSelection").val(sunlight);
       $("#hardinessSelection").val(hardiness);
       $("#waterSelection").val(waterFrequency);
       $("#pruningSelection").val(pruningFrequency);
       $("#fertilizingSelection").val(fertilizingFrequency);
      }
    }
  };
    document.getElementById("waterSelection").onchange = function(){
    var monthSelection = $("#waterSelection :selected").text()
    if (monthSelection === "Once a month") {
      $("#waterWeekdaySelection").hide();
      $("#waterMonthSelection").show();
      console.log("in the if section")
    } else {
      $("#waterMonthSelection").hide();
      $("#waterWeekdaySelection").show();
    }
  };
});



function Plant(commonName, sunlight, hardiness, water, pruning, fertilizing){
  this.commonName = commonName
  this.sunlight = sunlight
  this.hardiness = hardiness
  this.water = water
  this.pruning = pruning
  this.fertilizing = fertilizing
}

var spider = new Plant ("Spider Plant", "Part Sun", "Very Tolerant", ["Every other week", "thursday"], ["Once a month"], ["Every other week"])
allPlantTemplates.push(spider)


spider.makeSchedule(spider.water)

// //test user input
// var spidey = new Plant ("spider", "full", ["weekly"])
// spidey.nickname = "spidey"
// spidey.location = "next to window"



 // pruning, rotating, misting, fertilizing, location
