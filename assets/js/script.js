function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(() => {
        hours = parseInt((timer /3600)%24, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = hours + ":" + minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = () => {
    var duration = 24 * 60 * 60; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

function controlLayer(layerover) { 
    let opacity = document.querySelector

    if(document.getElementById(layerover).style.visibility == "hidden" ) { 
        document.getElementById(layerover).style.opacity = 0;
        setTimeout(() => {
            document.getElementById(layerover).style.visibility = "visible"; 
            document.getElementById(layerover).style.opacity = 1;
        }, 200);
    } else { 
        document.getElementById(layerover).style.opacity = 0;
        setTimeout(() => {
            document.getElementById(layerover).style.visibility = "visible";
            document.getElementById(layerover).style.opacity = 1;
        }, 200);
    } 
    if(document.querySelector('.container-bottom').style.display == 'none') {
        document.querySelector('.container-bottom').style.opacity = 0;
        document.querySelector('.container-author').style.opacity = 0;
        document.querySelector('.container-contents').style.opacity = 0;
        document.querySelector('.container-comments').style.opacity = 0;

        document.querySelector('.container-bottom').style.display = 'flex'; 
        document.querySelector('.container-author').style.display = 'flex'; 
        document.querySelector('.container-contents').style.display = 'flex'; 
        document.querySelector('.container-comments').style.display = 'flex';

        setTimeout(() => {
            document.querySelector('.container-bottom').style.opacity = 1;
            document.querySelector('.container-author').style.opacity = 1;
            document.querySelector('.container-contents').style.opacity = 1;
            document.querySelector('.container-comments').style.opacity = 1;
        }, 200);
    } else {
        document.querySelector('.container-bottom').style.opacity = 0;
        document.querySelector('.container-author').style.opacity = 0;
        document.querySelector('.container-contents').style.opacity = 0;
        document.querySelector('.container-comments').style.opacity = 0;

        document.querySelector('.container-bottom').style.display = 'flex'; 
        document.querySelector('.container-author').style.display = 'flex'; 
        document.querySelector('.container-contents').style.display = 'flex'; 
        document.querySelector('.container-comments').style.display = 'flex';

        setTimeout(() => {
            document.querySelector('.container-bottom').style.opacity = 1;
            document.querySelector('.container-author').style.opacity = 1;
            document.querySelector('.container-contents').style.opacity = 1;
            document.querySelector('.container-comments').style.opacity = 1;
        }, 200); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        controlLayer('layerover');
    }, 15000);
});

document.querySelectorAll('.module-box').forEach((event) => {
    event.addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.module-box');
        if(key.querySelector('.list').classList.contains('active')) {

            key.querySelector('.list').style.opacity = 0;
            key.querySelector('.module-box-title img:first-child').style.opacity = 0;
            key.querySelector('.module-box-title img:nth-child(2)').style.opacity = 0;

            key.querySelector('.list').classList.remove('active');
            key.querySelector('.module-box-title img:first-child').style.display = 'flex';
            key.querySelector('.module-box-title img:nth-child(2)').style.display = 'none';

            setTimeout(() => {
                key.querySelector('.list').style.opacity = 1;
                key.querySelector('.module-box-title img:first-child').style.opacity = 1;
                key.querySelector('.module-box-title img:nth-child(2)').style.opacity = 1;
            }, 200); 
        } else {
            key.querySelector('.list').style.opacity = 0;
            key.querySelector('.module-box-title img:first-child').style.opacity = 0;
            key.querySelector('.module-box-title img:nth-child(2)').style.opacity = 0;

            key.querySelector('.list').classList.add('active');
            key.querySelector('.module-box-title img:first-child').style.display = 'none';
            key.querySelector('.module-box-title img:nth-child(2)').style.display = 'flex';

            setTimeout(() => {
                key.querySelector('.list').style.opacity = 1;
                key.querySelector('.module-box-title img:first-child').style.opacity = 1;
                key.querySelector('.module-box-title img:nth-child(2)').style.opacity = 1;
            }, 200); 
        }
    })
})