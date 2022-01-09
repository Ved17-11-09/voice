

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true}) ;
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VKfu6IUtN/model.json'
    ,modelReady) ;
}


function modelReady() {
    Classifier.classify(gotResults) ;
}

function gotResults(errors,results) {
    if (errors) {
        console.log(errors) ;
    } 
    else{
        console.log(results) ;
        document.getElementById("result").innerHTML = "I CAN HEAR...." + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "ACCURACY...." + (results[0].confidence*100).toFixed(2)+"%" ;

        img = document.getElementById("train-1") ;
        img1 = document.getElementById("train-2") ;
        img2 = document.getElementById("train-3") ;
        img3 = document.getElementById("train-4") ;
        
    }
}