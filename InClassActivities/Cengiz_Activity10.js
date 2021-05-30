$(function(){
    $("#birthday").datepicker();
});
var languages = [
    "Kotlin", 
    "Java", 
    "Dart",
    "C++",
    "GoLang",
    "SQL",
    "C#",
    "Python"
    ];
$("#languages").autocomplete({
    source: languages 
    });