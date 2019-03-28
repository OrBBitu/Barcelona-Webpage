window.onload=function()
{
	
	let x = document.getElementById("logheaza");
	x.onclick=function()
	{
		let text1=document.createElement("input");
		text1.setAttribute("type", "text");
		text1.setAttribute("id", "cutie1");
		
		let text2=document.createElement("input");
		text2.setAttribute("type", "password");
		text2.setAttribute("id", "cutie2");
		
		let logbut=document.createElement("input");
		logbut.setAttribute("type", "button");
		logbut.setAttribute("id", "logbut");
		logbut.value="Log In";
		
		let zone=document.getElementById("log_area");
		zone.appendChild(text1);
		zone.appendChild(text2);
		zone.appendChild(logbut);
		
		let sterg=document.getElementById("logheaza");
		zone.removeChild(sterg);
	
		logbut.onclick=function()
		{
			alert("Ai fost logat!");
		}
	}	
	
	
}