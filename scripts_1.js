function execute()
{
	var n = prompt("How many queens?",0);
	if(n >= 8)
		document.getElementById("demo").innerHTML = "Cannot place "+n+" number of queens in that board.";

}