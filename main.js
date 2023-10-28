Webcam.set({
Width:350,
height:300,
image_format:'Png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function TakeSnapshot(){
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'"/>';
});
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/087Q6ZV2_/model.json',modelloaded);
function modelloaded(){
console.log("modelloaded");
}
function check(){
img=document.getElementById("capture_image");
classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
document.getElementById("resultobjectname").innerHTML=results[0].label;
document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
