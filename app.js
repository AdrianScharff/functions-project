const allLights = document.querySelectorAll('.tl');
let nextLight = '';
let currentLight = 'green';

/* const lightChangeConsole = () => {
        if (currentLight == 'green') {
            console.log(currentLight);
            currentLight = 'yellow';
        }
        else if (currentLight == 'yellow') {
            console.log(currentLight);
            currentLight = 'red';
        }
        else if (currentLight == 'red') {
            console.log(currentLight);
            currentLight = 'green';
        }
} */

/* const lightChangeAlert = () => {
        if (currentLight == 'green') {
            alert(currentLight);
            currentLight = 'yellow';
        }
        else if (currentLight == 'yellow') {
            alert(currentLight);
            currentLight = 'red';
        }
        else if (currentLight == 'red') {
            alert(currentLight);
            currentLight = 'green';
        }
} */

/* const lightChangeDoc = () => {
        if (currentLight == 'green') {
            document.write('<img src="./images/redtl-removebg-preview.png" class="tDoc">');
            currentLight = 'yellow';
        }
        else if (currentLight == 'yellow') {
            document.write('<img src="./images/greentl-removebg-preview.png" class="tDoc">');
            currentLight = 'red';
        }
        else if (currentLight == 'red') {
            document.write('<img src="./images/yellowtl-removebg-preview.png" class="tDoc">');
            currentLight = 'green';
        }
} */



const lightChangeImg = () => {
    for(let i = 0; i < allLights.length; i++) {
        if(allLights[i].classList.contains('green') && allLights[i].classList.contains('showLight')) {
            nextLight = 'yellow';
            console.log("yes I know I'm yellow");
        }
        else if(allLights[i].classList.contains('yellow') && allLights[i].classList.contains('showLight')) {
            nextLight = 'red';
            console.log("yes I know I'm red");
        }
        else if (allLights[i].classList.contains('red') && allLights[i].classList.contains('showLight')) {
            nextLight = 'green';
            console.log("yes I know I'm green");
        }
    }
    for(let j = 0; j < allLights.length; j++) {
        allLights[j].classList.remove('showLight');
    }
    const nextLightElement = document.querySelector(`.${nextLight}`);
    nextLightElement.classList.add('showLight')
}

const intervalId = setInterval(lightChangeImg, 1000);

setTimeout(() => {
    clearInterval(intervalId)
}, 5000);