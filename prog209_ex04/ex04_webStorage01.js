<script>
window.addEventListener("load",init);

function init(){
	if(typeof(Storage)!=="undefined"){
	
	display();
	
	var button=document.getElementById("button");
	button.addEventListener("click",saveInfo);
	}
	
	else{
	//old bowser	
	}
}

function saveInfo(){
	var city=document.getElementById("city").value;
	var comments=document.getElementById("comments").value;
	
	localStorage.setItem("cityName",city);
	localStorage.setItem("userComments",comments);
	
	
	display();
	
}

function display(){
	var rightBox=document.getElementById("useroutput");
	var theCity=localStorage.getItem("cityName");
	var theComments=localStorage.getItem("userComments");
	
	if(theComments==undefined){
		document.getElementById("useroutput").innerHTML="";
	}
	else{ document.getElementById("useroutput").innerHTML="OUTPUT  <hr /><br /><br />The City: "+theCity+"<br /><br />  The Weather: "+theComments;
	}
	
}

</script>
