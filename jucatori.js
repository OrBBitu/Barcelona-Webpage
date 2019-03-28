function changepuyol ()
{
	let pozapuyol=document.getElementById("puyol");
	pozapuyol.src="puyol2.jpg";
}

function changeronaldinho ()
{
	let pozaronaldinho=document.getElementById("ronaldinho");
	pozaronaldinho.src="ronaldinho2.jpg";
}

function changeiniesta ()
{
	let pozainiesta=document.getElementById("iniesta");
	pozainiesta.src="iniesta2.jpg";
}

function changexavi ()
{
	let pozaxavi=document.getElementById("xavi");
	pozaxavi.src="xavi2.jpg";
	pozaxavi.style.width="670px";
}

function changemessi ()
{
	let pozamessi=document.getElementById("messi");
	pozamessi.src="messi2.jpg";
}


window.onload=function()
{
	
	let x = document.getElementById("logheaza");
	localStorage.setItem("ID", "12345");
	
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
			let d = new Date();
			alert("Ai fost logat la data de " + d + "cu ID-ul " + localStorage.getItem("ID"));
			
		}
		
	}

	let p1=document.getElementById("puyol");
	p1.onclick=changepuyol;
	
	let p2=document.getElementById("ronaldinho");
	p2.onclick=changeronaldinho;
	
	let p3=document.getElementById("iniesta");
	p3.onclick=changeiniesta;
	
	let p4=document.getElementById("xavi");
	p4.onclick=changexavi;

	let p5=document.getElementById("messi");
	p5.onclick=changemessi;
	
	let dropzone = document.getElementById("dropzone");
	let i1 = document.getElementById("messi2");
	let i2 = document.getElementById("ronaldinho2");
	let i3 = document.getElementById("xavi2");
	let i4 = document.getElementById("iniesta2");
	let i5 = document.getElementById("puyol2");
	
	var tr;
	
	i1.ondragstart = function()
	{
		tr=i1;
	}
	i2.ondragstart = function()
	{
		tr=i2;
	}
	i3.ondragstart = function()
	{
		tr=i3;
	}
	i4.ondragstart = function()
	{
		tr=i4;
	}
	i5.ondragstart = function()
	{
		tr=i5;
	}
	
	dropzone.ondragover = function(e)
	{
		e.preventDefault();
	}
	
	dropzone.ondrop = function(e)
	{
		e.preventDefault();
		dropzone.appendChild(tr);
		alert(getComputedStyle(tr, null).getPropertyValue("width"));
	}
	
	let radlist = document.getElementsByClassName("rad");
	let str1 = "Alege";
	let str2 = " acum!";
	let jucatori = ["Messi", "Ronaldinho", "Xavi", "Iniesta", "Puyol"]
	
	let q = document.getElementById("question");
	q.onclick = function()
	{
		
		
		q.innerHTML = str1.concat(str2);
		alert("Accesez butoanele radio care fac parte din clasa " + radlist[0].className);
		
		for(i = 0; i < radlist.length; i++)
	{
			
			if(radlist[i].checked == true)
			{
				if(i==0){
					i1.style.border = "2px solid magenta"; 
					alert("L-ati ales pe " + jucatori[i]);
					window.open("https://en.wikipedia.org/wiki/Lionel_Messi");
					}
				if(i==1){
					i2.style.border = "2px solid magenta"; 
					alert("L-ati ales pe " + jucatori[i]);
					window.open("https://en.wikipedia.org/wiki/Ronaldinho");
					}
				if(i==2){
					i3.style.border = "2px solid magenta"; 
					alert("L-ati ales pe " + jucatori[i]);
					window.open("https://en.wikipedia.org/wiki/Xavi");
					
					}
				if(i==3){
					i4.style.border = "2px solid magenta"; 
					alert("L-ati ales pe " + jucatori[i]);
					window.open("https://en.wikipedia.org/wiki/Andr%C3%A9s_Iniesta");
					
					}
				if(i==4){
					i5.style.border = "2px solid magenta"; 
					alert("L-ati ales pe " + jucatori[i]);
					window.open("https://en.wikipedia.org/wiki/Carles_Puyol");
					
					}
			}
			else 
			{
				if(i==0)i1.style.border = "none";
				if(i==1)i2.style.border = "none";
				if(i==2)i3.style.border = "none";
				if(i==3)i4.style.border = "none";
				if(i==4)i5.style.border = "none";
			}
		
	}
	}
	
	let keypress = document.getElementById("keypressed");
	document.body.onkeypress=function(ev)
	{
		
		keypress.value = ev.key;
	}
	
	document.body.onmousemove=function(ev)
	{
		var b = document.getElementById("bubble");
		b.style.left = ev.pageX + 2 + "px";
		b.style.top = ev.pageY + 2 + "px";
	}
	
	let logoarea = document.getElementById("logoarea");
	let body = document.body;
	logoarea.addEventListener("click", function(ev)
	{
		alert("body" + ev.target + ev.currentTarget);	
	}, true);
	
	logo.onclick = function()
	{
		alert("logo");
	}
	
	let fereastra = this;
	let inchide = document.getElementById("close");
	inchide.onclick = function()
	{
		fereastra.close();
	}
	
}