var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {

   if(($("name").value=="") || ($("score").value=="") || (100<$("score").value || 0>$("score").value)){	
	alert("You must enter a name and a valid score");
	return false;
   }
   else{
	  names.push($("name").value);
	  scores.push($("score").value);
   }
   
};


var Results = function () {
  var sum = 0;
  var high=0;
  var name;
  var j;
  const parent = document.getElementById("results")
	while (parent.firstChild) {
    parent.firstChild.remove()
}
for( var i = 0; i < scores.length; i++ ){
	
    j = parseInt(scores[i],10);
    sum += j;
    if (j>high) high=j; 
	if(scores[i]==high) name=names[i];
}
var avg = sum/scores.length;

    var h2Node = document.createElement("h2");
    var h2TextNode = document.createTextNode("Results");
    h2Node.appendChild(h2TextNode);
    var avgNode = document.createElement("p");
    var avgTextNode = document.createTextNode("Average Score = " + avg);
    avgNode.appendChild(avgTextNode);
    var highestNode = document.createElement("p");
	var highestTextNode = document.createTextNode("High Score = " + name + " with a score of " + high );
    highestNode.appendChild(highestTextNode);
	document.getElementById("results").appendChild(h2Node)
	document.getElementById("results").appendChild(avgNode)
	document.getElementById("results").appendChild(highestNode)
	
    
};

var displayResults = function () {
    Results();
	

};

var displayScores = function () {
	const parent = document.getElementById("scores_table")
	while (parent.firstChild) {
    parent.firstChild.remove()
}
    var table = $("scores_table");

	
    for (i = 0; i < scores.length; i++){
		var row2 = table.insertRow(0);
        var textNode = document.createTextNode(names[i]);
        var cellNode = row2.insertCell(-1);
        cellNode.appendChild(textNode);
        var scoreNode = document.createTextNode(scores[i]);
        var cellNode2 = row2.insertCell(-1);
        cellNode2.appendChild(scoreNode);
    } 
	
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = "<b>Name</b>";
	
	var cell2 = row.insertCell(1);
	cell2.innerHTML = "<b>Score</b>";
	
	var row1 = table.insertRow(0);
	var cell1 = row1.insertCell(0);
    var h2Node = document.createElement("h2");
    var h2TextNode = document.createTextNode("Scores");
	h2Node.appendChild(h2TextNode);
	cell1.appendChild(h2Node);
	
	
};

window.onload = function () {

    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};