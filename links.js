//names of the image files
var links = new Array();
links[0]={section:"9K",title:"ArtWalli",desc:"",url:"https://pih-rah-tees.github.io/wdprojcesiumpanistetangco/public",icon:"sample.png",by:"panis&tetangco"}
links[1]={section:"9Cs",title:"CipherMania",desc:"Learn more about our inspirations behind this website and the concept of ciphers too! With these, inspire an interest in encrypted and decrypted communication!",url:"https://sarbuyco.github.io/Ciphermania/public",icon:"cs0711.png",by:"buyco&cruz"}
links[2]={section:"9Cs",title:"Mindless Motivation",desc:"Mindless Motivation is a mental health website where struggling students can open as a source for emotions.",url:"https://typical-pentagonal-vessel.glitch.me/",icon:"mindless.png",by:"angeles&esguerra"}
links[3]={section:"9Cs",title:"Aklatan-Mo: Aklatan-Ko",desc:"Your gateway to a world of literature. Start reading our collection of top-rated books across various genres, from classics to bestsellers.",url:"https://geroge-real.github.io/AMAKcs/public/",icon:"aklatan.png",by:"froyalde&adriano"}
links[4]={section:"9Cs",title:"Cherry On Top",desc:"Cherry on Top is an interactive game where users can decorate and display their own sweet treat.",url:"https://cs3-proj-cesium-luz-triguero.glitch.me/homepage.html",icon:"cherryontop.jpg",by:"luz&triguero"}
links[5]={section:"9Cs",title:"FitFormula",desc:"FitFormula,  is designed to help users start and go through their excercise and fitness experience by providing calculation tools,  plans according to the user's fitness situation, and other pages.",url:"https://elijahandrei.github.io/Q3DimayugaMasangkayProject/public/index.html",icon:"cs1219ng",by:"dimayuga&msangkay"}


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
	
