function create(event)
{
	let rand = Math.floor(Math.random()*1200);
	//let dim = Math.floor(Math.random()*50)+10;
	let dim = 50;
	let joculet = document.getElementById("joculet");
	let minge = document.createElement("IMG");
	minge.src = "ball.png";
	minge.setAttribute("id", "minge");
	minge.style.backgroundColor = "transparent";
	minge.style.border = "none";
	minge.style.left = rand + "px";
	minge.style.height = dim + "px";
	minge.style.width = "auto";
	joculet.appendChild(minge);
	
	minge.ynou=minge.y;
	minge.viteze=5;
	minge.t = setInterval(function()
	{
		minge.ynou++;
		minge.style.top=minge.ynou + "px";
		if(minge.ynou >= 520)clearInterval(minge.t);		
	}, minge.viteze);
	
	joculet.onclick = function()
	{
		joculet.style.backgroundImage="url('pitch2.jpg')";
	}
	
	
	minge.onclick = function(event)
	{
		event.stopPropagation();
		
		/*minge.h=parseInt(minge.style.height);
		console.log(minge.h);
		if(minge.h>40)
		{
			minge.h=minge.h-10;
			minge.style.height=minge.h+"px";
		}*/
		
		minge.style.zIndex = "-1" ;
	}
	
}

window.onload=function()
{
	
	setInterval(create, 1500);
	
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