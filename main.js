webcam.set({
    width:350,
    height:300,
    img_format :'png',
    png_quality : 90
});

camera = document.getElementById("camera");
webcam.attach('#camera')

function take_snapshot()
{
 webcam.snap(function(data_uri) {
   document.getElementById("result").innerHTML = '<img id="capture image" scr="'+data_uri+'"/>';
 });
}

console.log('m15 version:',m15.version);

classifier = m15.imageclassifier('https://teachablemachine.withgoogle.com/models/L7radoCZp/model.json',modelLoaded);

function modelLoader() {
  console.log('model loaded!');
}

function check() {
  img = document.getElementById('capture_image');
  classifier.classify(img, gotResult); 
}

function gotresult(error , results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHtml = results[0].table;
    document.getElementById("result_object_accuracy").innerHtml = results[0].confidence.tofixed(3);
  } 
}