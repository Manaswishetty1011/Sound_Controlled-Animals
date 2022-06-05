//https://teachablemachine.withgoogle.com/models/g2RF6_K3g/model.json

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/g2RF6_K3g/model.json", modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Accuracy -'+(results[0].confidence*100).toFixed(2) +"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'bark.gif';

    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';

    }
    else if (results[0].label == "Mooing") {
        img.src = 'moo.gif';}

    else if (results[0].label == "Roaring") {
            img.src = 'roar.gif';
}
    else{
      img.src = 'listen.gif';
    }
  }
}
