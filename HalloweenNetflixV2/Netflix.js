function getFirstBanner() {
    document.getElementById("background").style.cssText = `background-image: url(../Images/NetflixBanner.png);   
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: luminosity;
    opacity: 0.65;
    filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.25));`;
    changeInfoOne();
 }

 function getSecondBanner() {
    document.getElementById("background").style.cssText = `background-image: url(../Images/NetflixBanner2.png);   
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: luminosity;
    opacity: 0.65;
    filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.25));`;
    changeInfoTwo()
 }

 function getThirdBanner() {
    document.getElementById("background").style.cssText = `background-image: url(../Images/NetflixBanner3.png);   
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: luminosity;
    opacity: 0.65;
    filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.25));`;
    changeInfoThird()
 }

 function getFourthBanner() {
    document.getElementById("background").style.cssText = `background-image: url(../Images/NetflixBanner4.png);   
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: luminosity;
    opacity: 0.65;
    filter: drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.25));`;
    changeInfoFourth()
 }

 function changeInfoOne() {
    document.getElementById("title").innerHTML = "The Man from toronto";
    document.getElementById("rating").innerHTML = "Rating 5.8 / 10"; 
    document.getElementById("time").innerHTML = "1h 50m";
    document.getElementById("release").innerHTML = "2022";
    document.getElementById("describeMe").innerHTML = "A case of mistaken identity arises after a screw-up sales consultant and the world's deadliest assassin--known only as The Man from Toronto--run into each other at a holiday rental. ";
 }

 function changeInfoTwo() {
    document.getElementById("title").innerHTML = "LOU";
    document.getElementById("rating").innerHTML = "Rating 6.1 / 10"; 
    document.getElementById("time").innerHTML = "1h 49m";
    document.getElementById("release").innerHTML = "2021";
    document.getElementById("describeMe").innerHTML = "Plot. In 1986, on an island in Washington, Lou, a loner living with her dog Jax, goes to the village to buy some supplies. She talks to the sheriff about her arthritis and he tells her a copper bracelet could help her condition. A mother, Hannah, plays hide-and-seek with her young daughter, Vee, outside their home.";
 }

 function changeInfoThird() {
    document.getElementById("title").innerHTML = "Athena";
    document.getElementById("rating").innerHTML = "Rating 6.8 / 10"; 
    document.getElementById("time").innerHTML = "1h 37m";
    document.getElementById("release").innerHTML = "2022";
    document.getElementById("describeMe").innerHTML = "Athena, also spelled Athene, in Greek religion, the city protectress, goddess of war, handicraft, and practical reason, identified by the Romans with Minerva. She was essentially urban and civilized, the antithesis in many respects of Artemis, goddess of the outdoors.";
 }

 function changeInfoFourth() {
    document.getElementById("title").innerHTML = "The Adam Project";
    document.getElementById("rating").innerHTML = "Rating 6.7 / 10"; 
    document.getElementById("time").innerHTML = "1h 46m";
    document.getElementById("release").innerHTML = "2022";
    document.getElementById("describeMe").innerHTML = "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future. After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.";
 }