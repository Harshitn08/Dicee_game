function myFunction() {
    document.querySelector("h1").classList.toggle("p2");
    var randomVar1 = Math.floor(Math.random()*6) + 1;
    var randomVar2 = Math.floor(Math.random()*6) + 1;


    var img1 = document.getElementsByClassName("img1")[0];
    img1.setAttribute("src","./dice" + randomVar1 + ".png");

    var img2 = document.getElementsByClassName("img2")[0];
    img2.setAttribute("src","./dice" + randomVar2 + ".png");

    var heading = document.getElementById("heading");


    if(randomVar1 > randomVar2) {
        heading.textContent = "Player 1 Wins";
        heading.style.color = "red";
    }

    else if (randomVar1 < randomVar2) {
        heading.textContent = "Player 2 Wins";
        heading.style.color = "blue";
    }

    else {
        heading.textContent = "It's A Draw";
        heading.style.color = "white";
    }
}
