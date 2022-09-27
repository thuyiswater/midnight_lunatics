var checkSuccess = false; 

function successCallback(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    alert("Latitude : " + lat + " Longitude: " + lng);
}
 
function onConfirm(status){
    // show the loading 
    var main = document.getElementById("main");
    main.style.visibility = "hidden";

    var loading = document.getElementById("lds");
    loading.style.visibility = "visible";

    document.getElementById("success").style.visibility = "hidden";
    document.getElementById("fail").style.visibility = "hidden";
    var delayInMilliseconds = 2000; //2 second
    setTimeout(function() {
        //your code to be executed after 2 second
        var main = document.getElementById("main");
        main.style.visibility = "visible";

        var loading = document.getElementById("lds");
        loading.style.visibility = "hidden";

        document.getElementById("success").style.visibility = "visible";
        document.getElementById("fail").style.visibility = "visible";

        if(status || checkSuccess){
            deleteCard1();
        }
      }, delayInMilliseconds);

    
}
function buyBtn1() {
    var x = document.getElementById("buy-btn-1");
    x.style.display = "block";
    var y = document.getElementById("card1");
    y.style.display = "block";
    if(checkSuccess){
        deleteCard1();
    }
}
function disbuyBtn1() {
    console.log("disbuyBtn2");

    var x = document.getElementById("buy-btn-1");
    x.style.display = "none";
    var y = document.getElementById("card1");
    y.style.display = "none";
    if(checkSuccess){
        deleteCard1();
    }
}
function buyBtn2() {
    console.log("disbuyBtn2");

    var x = document.getElementById("buy-btn-2");
    x.style.display = "block";
    var y = document.getElementById("card2");
    y.style.display = "block";
    if(checkSuccess){
        deleteCard1();
    }
}
function disbuyBtn2() {
    console.log("disbuyBtn2");

    var x = document.getElementById("buy-btn-2");
    x.style.display = "none";
    var y = document.getElementById("card2");
    y.style.display = "none";
    if(checkSuccess){
        deleteCard1();
    }
}
function buyBtn3() {
    console.log("buyBtn3");

    var x = document.getElementById("buy-btn-3");
    x.style.display = "block";
    var y = document.getElementById("card3");
    y.style.display = "block";
    if(checkSuccess){
        deleteCard1();
    }
}
function disbuyBtn3() {
    console.log("disbuyBtn3");
    var x = document.getElementById("buy-btn-3");
    x.style.display = "none";
    var y = document.getElementById("card3");
    y.style.display = "none";
    if(checkSuccess){
        deleteCard1();
    }
}

function deleteCard1() {
    console.log("hello");
    var x = document.getElementById("collapseOne");
    x.style.display = "none";
    checkSuccess = true; 
}