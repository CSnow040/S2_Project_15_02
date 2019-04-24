"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Caleb Snow
   Date:  4/19/19 
   
   Filename: dl_expense.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
//Loads in all of the needed information from the index to take the steps this javascript file has made
window.addEventListener("load", function () {
      var changingCells = document.querySelectorAll("table#travelExp input.sum");
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp
      }
      document.getElementById("submitButton").addEventListener("click", validateSummary);
})
// Creates a function that validates the summary input text box area which pops up a custom message when they have done something wrong
function validateSummary() {
      var summary = document.getElementById("summary");
      if (summary.validity.valueMissing) {
            summary.setCustomValidity("You must include a summary on your trip report");
      } else {
            summary.setCustomValidity("")
      }
}
// Creates a function that extracts the numeric value out of the sumfield variable and eventually it returns the sumTotal
function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName(sumClass);
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields[i].value);
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }


      }
      return sumTotal
}
//Makes the value of the table rows in the travelExp table changeable 
function calcExp() {
      var expTable = document.querySelectorAll("table#travelExp tbody tr")
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      //Tracks the input element totals of each column then takes it to the 2nd decimal point
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      document.getElementById("expTotal").value = formatUSCurrency(calcClass("sum"));


}




function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}









function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}