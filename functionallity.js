const car1="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"
const car2="https://tesla-cdn.thron.com/delivery/public/image/tesla/8fa80996-ac5c-4cef-9534-a61a9457bfb3/bvlatuR/std/2880x1800/M3-Hero-LHD-US-D"
const car3="https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop"
const car4="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"

document.getElementById('model-S').onclick=()=>{
    document.querySelector('.container').style.backgroundImage=`url(${car1})`;
    document.querySelector('.container').style.transition='all 1s ease-in-out';
    document.getElementById('car-pickup-time-acutal-data').innerHTML='1.99s';
    document.getElementById('car-max-speed-acutal-data').innerHTML='200 mph';
    document.getElementById('car-max-range-acutal-data').innerHTML='396 mi';
    document.getElementById('model-name').innerHTML='Model S';

    document.getElementById("boldLinePart1").style.height='50%';
    document.getElementById("boldLinePart2").style.height='150%';
    document.getElementById("boldLinePart3").style.height='50%';
    document.getElementById("boldLinePart4").style.height='50%';

    document.getElementById("boldLinePart1").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart2").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart3").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart4").style.transition="height 0.3s ease-in-out";
};
document.getElementById('model-3').onclick=()=>{
    document.querySelector('.container').style.backgroundImage=`url(${car2})`;
    document.querySelector('.container').style.transition='all 1s ease-in-out';
    document.getElementById('car-pickup-time-acutal-data').innerHTML='3.1s';
    document.getElementById('car-max-speed-acutal-data').innerHTML='162 mph';
    document.getElementById('car-max-range-acutal-data').innerHTML='358 mi';
    document.getElementById('model-name').innerHTML='Model 3';

    document.getElementById("boldLinePart1").style.height='150%';
    document.getElementById("boldLinePart2").style.height='50%';
    document.getElementById("boldLinePart3").style.height='50%';
    document.getElementById("boldLinePart4").style.height='50%';

    document.getElementById("boldLinePart1").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart2").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart3").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart4").style.transition="height 0.3s ease-in-out";
};
document.getElementById('model-X').onclick=()=>{
    document.querySelector('.container').style.backgroundImage=`url(${car3})`;
    document.querySelector('.container').style.transition='all 1s ease-in-out';
    document.getElementById('car-pickup-time-acutal-data').innerHTML='2.5s';
    document.getElementById('car-max-speed-acutal-data').innerHTML='155 mph';
    document.getElementById('car-max-range-acutal-data').innerHTML='333 mi';
    document.getElementById('model-name').innerHTML='Model X';

    document.getElementById("boldLinePart1").style.height='50%';
    document.getElementById("boldLinePart2").style.height='50%';
    document.getElementById("boldLinePart3").style.height='150%';
    document.getElementById("boldLinePart4").style.height='50%';

    document.getElementById("boldLinePart1").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart2").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart3").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart4").style.transition="height 0.3s ease-in-out";
};
document.getElementById('model-Y').onclick=()=>{
    document.querySelector('.container').style.backgroundImage=`url(${car4})`;
    document.querySelector('.container').style.transition='all 1s ease-in-out';
    document.getElementById('car-pickup-time-acutal-data').innerHTML='5.3s';
    document.getElementById('car-max-speed-acutal-data').innerHTML='135 mph';
    document.getElementById('car-max-range-acutal-data').innerHTML='303 mi';
    document.getElementById('model-name').innerHTML='Model Y';

    document.getElementById("boldLinePart1").style.height='50%';
    document.getElementById("boldLinePart2").style.height='50%';
    document.getElementById("boldLinePart3").style.height='50%';
    document.getElementById("boldLinePart4").style.height='150%';

    document.getElementById("boldLinePart1").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart2").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart3").style.transition="height 0.3s ease-in-out";
    document.getElementById("boldLinePart4").style.transition="height 0.3s ease-in-out";
};