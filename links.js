//names of the image files
var links = new Array();
links[0]={section:"9Cs",title:"ArtWalli",desc:"",url:"https://pih-rah-tees.github.io/wdprojcesiumpanistetangco/public",icon:"sample.png",by:"panis&tetangco"}


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
                        '<p>'+links[genNum[i]].desc+'</p></div>'+
			'</a></div>'
	}
		
document.getElementById("pHolder").innerHTML = tobeDisp;
	let myVar = setTimeout(dispProj, 20000);
}
	
