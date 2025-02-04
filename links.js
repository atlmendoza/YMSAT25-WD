//names of the image files
var links = new Array();
links[0]={section:"9K",title:"Effects of Online and In-Person Classes to Students",url:"https://cs3qtr1projectestrella-lim.zacestrella.repl.co/htdocs/effectstoStudents.html",icon:"sample.png"}
links[1]={section:"9K",title:"Effects of Online and In-Person Classes to Students",url:"https://cs3qtr1projectestrella-lim.zacestrella.repl.co/htdocs/effectstoStudents.html",icon:"estralllim.png"}
links[2]={section:"9K",title:"Hybe Biy Group Guide",url:"https://cs3project.nia-angelaangel.repl.co/",icon:"hybe.png"}
links[3]={section:"9K",title:"Minecraft Guide",url:"https://sizzlingunfoldeddiscussion.lino-domingo-salvana.repl.co/index.html",icon:"minecraft.png"}
links[4]={section:"9Rb",title:"LOGIC - Learning Orientation and Gender Identities Campaign",url:"https://rballauigancanillas.alyssa-breannab.repl.co/",icon:"logic.png"}
links[5]={section:"9Rb",title:"Genshin Impact: Four Archons",url:"https://index.shawn-renfredre.repl.co/",icon:"genshin.png"}
links[6]={section:"9Rb",title:"Adele - A Celebrity Among Celebrities",url:"https://rbmuallilmarte.b2026sdmarte.repl.co/",icon:"adele.png"}
links[7]={section:"9Rb",title:"Earth's Breath",url:"https://rb20perezrb22ramoscs3project.christine-zoezo.repl.co/",icon:"earth.png"}
links[8]={section:"9Rb",title:"Game Hub",url:"https://rbrespiciotainohtml.lorenzo-manuelm.repl.co/",icon:"gamehub.png"}


function dispProj(){
	var x;
	var genNum=[];
	var numProj = Math.floor(Math.random() * links.length);
	for (let i=0;i<links.length;i++) {	
		// update list of used number
		genNum.push(numProj);
		// check if the generated random number is already used.	
		numProj = Math.floor(Math.random() * links.length)
		x = genNum.indexOf(numProj)
		if (genNum.length == links.length)
			break;
		while (x >= 0) {
			numProj = Math.floor(Math.random() * links.length)
			x = genNum.indexOf(numProj)
		}		
	}
  // construct content of the body
	var tobeDisp = ""
	for (let i=0;i<links.length;i++) {
	    tobeDisp +=	 
			'<div class="gallery">'+
			'<a target="_blank" href="' + links[genNum[i]].url +'">'+
			'<div> <img src="img\\'+links[genNum[i]].icon +'" /></div>'+
		   	'<div class="desc"><span>'+links[genNum[i]].title+'</span>'+
                        '<p>'+links[genNum[i]].title+'</p></div>'+
			'</a></div>'
	}
		
document.getElementById("pHolder").innerHTML = tobeDisp;
	let myVar = setTimeout(dispProj, 20000);
}
	
