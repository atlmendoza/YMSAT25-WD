//names of the image files
var links = new Array();
links[0]={section:"9Cs",title:"ArtWalli",desc:"Our website, ArtWalli, is an interactive website where users can either draw, design, or download their very own wallpapers.",url:"https://pih-rah-tees.github.io/wdprojcesiumpanistetangco/public",icon:"cs2328.png",by:"panis&tetangco"}
links[1]={section:"9Cs",title:"CipherMania",desc:"Learn more about our inspirations behind this website and the concept of ciphers too! With these, inspire an interest in encrypted and decrypted communication!",url:"https://sarbuyco.github.io/Ciphermania/public",icon:"cs0711.png",by:"buyco&cruz"}
links[2]={section:"9Cs",title:"Mindless Motivation",desc:"Mindless Motivation is a mental health website where struggling students can open as a source for emotions.",url:"https://typical-pentagonal-vessel.glitch.me/",icon:"mindless.png",by:"angeles&esguerra"}
links[3]={section:"9Cs",title:"Aklatan-Mo: Aklatan-Ko",desc:"Your gateway to a world of literature. Start reading our collection of top-rated books across various genres, from classics to bestsellers.",url:"https://geroge-real.github.io/AMAKcs/public/",icon:"aklatan.png",by:"froyalde&adriano"}
links[4]={section:"9Cs",title:"Cherry On Top",desc:"Cherry on Top is an interactive game where users can decorate and display their own sweet treat.",url:"https://cs3-proj-cesium-luz-triguero.glitch.me/homepage.html",icon:"cherryontop.jpg",by:"luz&triguero"}
links[5]={section:"9Cs",title:"FitFormula",desc:"FitFormula,  is designed to help users start and go through their excercise and fitness experience by providing calculation tools,  plans according to the user's fitness situation, and other pages.",url:"https://elijahandrei.github.io/Q3DimayugaMasangkayProject/public/index.html",icon:"cs1219.png",by:"dimayuga&msangkay"}
links[6]={section:"9Cs",title:"Music from Mars",desc:"All about Bruno Mars and his music", url:"https://ralffytulfo.github.io/wdprojsectionsanjoseandmendozav1/public/index.html",icon:"cs2127.png",by:"sanjose&mendoza"}
links[7]={section:"9Cs",title:"Solidarity Network",desc:"Our website effectively aids the extension of monetary donations to the innocent victims of war, by compiling all their respective donation links into one webpage, allowing for a more convenient transaction.", url:"https://aypltra.github.io/solidarity-nework/public/",icon:"cs0322.png",by:"alcantara&moritcho"}
links[8]={section:"9Sr",title:"SPARC",
	desc:"SPARChives is the online platform of SPARC used to store and access reviewers, mock tests, and other resources of SPARC.", 
	url:"https://mathematicalcoder.github.io/sparchives/public/",icon:"sr-kaiser-sparc.png",by:"Kaiser&Schiel"}
links[9]={section:"9Sr",title:"Body Blueprint",
		desc:"The purpose of this website is to map the body and navigate body parts to find out the most efficient way to train them by setting out a body map and by clicking one body part and show the most efficient ways to train them.", 
		url:"sr-rahon-body_blueprint/",icon:"sr-rahon-body.png",by:"Rahon&Leona"}
links[10]={section:"9Li",title:"Calm Quest",
	desc:" CalmQuest is a website that aims to allow users to understand and improve through various available resources.", 
	url:"li-lucas_johann-calm_quest/",icon:"li-lucas_johann-calm_quest.png",by:"Lucas&Johann"}
links[11]={section:"9Li",title:"Modern Family",
	desc:"With its witty storytelling and lovable characters, Modern Family became a critically acclaimed series that resonated with audiences worldwide", 
	url:"li-rio_zach-modern_fam/",icon:"li-rio_zach-modern_fam.png",by:"Rio&Zach"}
links[12]={section:"9Na",title:"Sinag ng Kalayaan",
	desc:"Sinag ng Kalayaan: The Next Step is a thrilling interactive game that brings life the dramatic choices and consequences of the Spanish Colonial Era. ", 
	url:"na-cara_rheena-sinag_kalayaan/",icon:"na-cara_rheena-sinag_kalayaan.png",by:"Cara&Rheena"}
links[13]={section:"9Na",title:"Sinag ng Kalayaan",
	desc:"kanlungan is a safe space "shelter" dedicated for people who might be lost in their pathway of life. adorned in charming digital artwork and led by the fictional shapeshifting cat, Miskonasia, the website holds several little ephemeras in the daily — helpful quotes for the day with an originally written poem in the side, a post-it note station as fleeting as you allow it to be, and a bit of an 'achievements' section dictated by the amount of days you log in. ", 
	url:"li-rio_zach-modern_fam/",icon:"na-cara_rheena-sinag_kalayaan.png",by:"Cara&Rheena"}



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
	
