var inputOneIsOn = false; 
var inputTwoIsOn = false;


function toggleImage() {
   var img1 = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
   var img2 = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

  
function toggleImage2() {
   var img1 = "https://www.iconsdb.com/icons/preview/red/button-off-xxl.png";
   var img2 = "https://www.iconsdb.com/icons/preview/green/button-on-xxl.png";
  
   
   var imgElement = document.getElementById('toggleImage2');


   imgElement.src = (imgElement.src === img1)? img2 : img1;
   
   
}

    function toggleInputOne() { 
            inputOneIsOn = !inputOneIsOn; 
            
        } 

    function toggleInputTwo() { 
            inputTwoIsOn = !inputTwoIsOn; 
              
           
        } 



function and(){
    var a = inputOneIsOn;
    var b = inputTwoIsOn;
    
	  
            console.log('Input one is on: ', 
                                inputOneIsOn); 
								
	        console.log('Input two is on: ', 
                                inputTwoIsOn); 
	
    
    if(inputOneIsOn&&inputTwoIsOn)
        document.getElementById('andGate').src='Project/2and2on.png';
    else if (!inputOneIsOn && inputTwoIsOn) 
        document.getElementById('andGate').src='Project/2andoffon.PNG';
	else if (inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='Project/2andonoff.PNG';
	else if (!inputOneIsOn && !inputTwoIsOn) 
        document.getElementById('andGate').src='Project/2and2off.PNG';
	}
