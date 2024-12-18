function thisFunction(){
    let thisText = document.getElementById('CARD-NUMBER').value;
    document.getElementById('CardNumber').innerText = thisText;

    let doc = document.querySelector('.card-holder').value;
    document.querySelector('.card-holder-name').innerText = doc ;
}

function MyFunction(){
    let doc = document.querySelector('.card-holder').value;
    document.querySelector('.card-holder-name').innerText = doc ;
}

document.querySelector('.input-date').oninput = () =>{
    document.querySelector('.exp-month').innerText= document.querySelector('.input-date').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.back-input').value= document.querySelector('.cvv-input').value;
}
