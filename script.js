const boom = document.getElementById("boom"); 
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat"); 
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat"); 
const ride = document.getElementById("ride");
const snare = document.getElementById("snare"); 
const tink = document.getElementById("tink");
const tom = document.getElementById("tom"); 

const beat1 = document.getElementById("beat1");
const beat2 = document.getElementById("beat2");
const beat3 = document.getElementById("beat3");
const beat4 = document.getElementById("beat4");
const beat5 = document.getElementById("beat5");
const beat6 = document.getElementById("beat6");
const beat7 = document.getElementById("beat7");
const beat8 = document.getElementById("beat8");
const beat9 = document.getElementById("beat9");

let wav = [];
wav[1]="./sounds/boom.wav";
wav[2]="./sounds/clap.wav";
wav[3]="./sounds/hihat.wav";
wav[4]="./sounds/kick.wav";
wav[5]="./sounds/openhat.wav";
wav[6]="./sounds/ride.wav";
wav[7]="./sounds/snare.wav";
wav[8]="./sounds/tink.wav";
wav[9]="./sounds/tom.wav";

function makeSound(sound) {

    const playWav = new Audio(wav[sound]);

    playWav.play();
}

document.addEventListener("keypress", (evt) => {
    document.innerHTML = `${evt.key}`;
    makeSound(evt.key);

    if(evt.key == 1) {
    //    boom.play()
       beat1.style.backgroundColor = "#7FFF00";
        // onkeyup = () => {
        //     beat1.style.backgroundColor = "";
        // }
    }
    else if(evt.key == 2) {
        // clap.play();
        beat2.style.backgroundColor = "#DC143C";
        // onkeyup = () => {
        //     beat2.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 3) {
        // hihat.play();
        beat3.style.backgroundColor = "#A9A9A9";
        // onkeyup = () => {
        //     beat3.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 4) {
        // kick.play();
        beat4.style.backgroundColor = "#FF7F50";
        // onkeyup = () => {
        //     beat4.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 5) {
        // openhat.play();
        beat5.style.backgroundColor = "#FF1493";
        // onkeyup = () => {
        //     beat5.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 6) {
        // ride.play();
        beat6.style.backgroundColor = "#FFD700";
        // onkeyup = () => {
        //     beat6.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 7) {
        // snare.play();
        beat7.style.backgroundColor = "#FFD700";
        // onkeyup = () => {
        //     beat7.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 8) {
        // tink.play();
        beat8.style.backgroundColor = "#FF4500";
        // onkeyup = () => {
        //     beat8.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 9) {
        // tom.play();
        beat9.style.backgroundColor = "#FF5A8A";
        // onkeyup = () => {
        //     beat9.style.backgroundColor = "";
        // }
    }
    else {
        alert("That ain't no beat!")
    }
});

document.addEventListener("keyup", (evt) => {
    document.innerHTML = `${evt.key}`;

    if(evt.key == 1) {
        // onkeyup = () => {
        beat1.style.backgroundColor = "";
        // }
    }
    else if(evt.key == 2) {
        // onkeyup = () => {
        beat2.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 3) {
        // onkeyup = () => {
        beat3.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 4) {
        // onkeyup = () => {
        beat4.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 5) {
        // onkeyup = () => {
        beat5.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 6) {
        // onkeyup = () => {
        beat6.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 7) {
        // onkeyup = () => {
        beat7.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 8) {
        // onkeyup = () => {
        beat8.style.backgroundColor = "";
        // }
    }
    else if (evt.key == 9) {
        // onkeyup = () => {
        beat9.style.backgroundColor = "";
        // }
    }
    else {
        alert("That ain't no beat!")
    }
});

document.addEventListener("click", (evt) => {
    document.getElementsByTagName("div").innerHTML = onclick.play();
});
