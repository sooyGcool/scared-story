


document.addEventListener("DOMContentLoaded", function() {

    Swal.fire({

        allowOutsideClick: false,
        allowEscapeKey: false,
        showCancelButton: false,
        confirmButtonText: "Play",
        customClass: {
            popup: 'alert',
            confirmButton: "play",
        }

    });

    const playButton = document.querySelector('.play');

    playButton.addEventListener('click', function() {
        audio.play();
        audio.loop = true;
    });
});


/*effects sounds*/ 

const audio = new Audio("./cancion-triste-1502.mp3");
const click = new Audio("./click-button-140881.mp3");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyOne = document.getElementById("twenty-one");
const twentyTwo = document.getElementById("twenty-two");
const twentyThree = document.getElementById("twenty-three");
const twentyFour = document.getElementById("twenty-four");
const twentyFive = document.getElementById("twenty-five");

const text26 = document.getElementById("text-26");
const text27 = document.getElementById("text-27");
const text28 = document.getElementById("text-28");
const text29  = document.getElementById("text-29");
const text30 = document.getElementById("text-30");
const text31 = document.getElementById("text-31");
const text32 = document.getElementById("text-32");
const text33 = document.getElementById("text-33");
const text34 = document.getElementById("text-34");
const text35 = document.getElementById("text-35");
const text36 = document.getElementById("text-36");
const text37 = document.getElementById("text-37");
const text38 = document.getElementById("text-38");
const text39 = document.getElementById("text-39");
const text40 = document.getElementById("text-40");
const text41 = document.getElementById("text-41");
const text42= document.getElementById("text-42");
const text43 = document.getElementById("text-43");
const text44 = document.getElementById("text-44");
const text45 = document.getElementById("text-45");
const text46 = document.getElementById("text-46");
const text47 = document.getElementById("text-47");
const text48 = document.getElementById("text-48");
const text49 = document.getElementById("text-49");
const text50 = document.getElementById("text-50");
const text51 = document.getElementById("text-51");
const text52 = document.getElementById("text-52");
const text53 = document.getElementById("text-53");
const text54 = document.getElementById("text-54");
const text55 = document.getElementById("text-55");
const text56 = document.getElementById("text-56");
const text57 = document.getElementById("text-57");
const text58 = document.getElementById("text-58");
const text59 = document.getElementById("text-59");
const text60 = document.getElementById("text-60");
const text61 = document.getElementById("text-61");
const text62 = document.getElementById("text-62");
const text63 = document.getElementById("text-63");


const end = document.getElementById("end");




const press = document.getElementById("press");
const story = [first, second, third, fourth, fifth, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, text26, text27, text28, text29, text30, text31, text32, text33, text34, text35,text36,text37,text38,text39,text40,text41,text42,text43,text44,text45,text46,text47,text48,text49,text50,text51,text52,text53,text54,text55,text56,text57,text58,text59,text60,text61,text62,text63,end];
const scared = new Audio("./creepy-ambient-7539.mp3");

let i = 0;

press.addEventListener("click", function(){
    click.play();
    if (i < story.length) {
        if (i > 0) {
            story[i - 1].style.display = "none";
        }
        story[i].style.display = "block";
        i++;
    }
    if(story[i - 1] === end && end.style.display === "block") {
        /*
        swal.fire({
            title: "end",
            button: false,
            customClass: {
                container: "end-alert",
                title: "end-title"
            }
        });
        */

        audio.pause();
        scared.play();

        setTimeout(() => {
            scared.pause();
        }, 3500);

       setTimeout(() => {
        window.close();
       }, 4000);
    }
});
