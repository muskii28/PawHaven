// function func2(){
//     document.getElementById('btn2').classList.remove('dsp-none')
//     document.getElementById('btn2').classList.add('dsp');
//     document.getElementById('btn1').classList.remove('dsp');
//     document.getElementById('btn1').classList.add('dsp-none');
// }
// function func1(){
//     document.getElementById('btn1').classList.remove('dsp-none')
//     document.getElementById('btn1').classList.add('dsp');
//     document.getElementById('btn2').classList.remove('dsp');
//     document.getElementById('btn2').classList.add('dsp-none');
// }

function petFunc1(){
    document.getElementById('pet-btn1').classList.add('active-pet-btn')
    document.getElementById('pet-btn1').classList.remove('inactive-pet-btn')
    document.getElementById('pet-btn2').classList.add('inactive-pet-btn')
    document.getElementById('pet-btn2').classList.remove('active-pet-btn')
}
function petFunc2(){
    document.getElementById('pet-btn2').classList.add('active-pet-btn')
    document.getElementById('pet-btn2').classList.remove('inactive-pet-btn')
    document.getElementById('pet-btn1').classList.add('inactive-pet-btn')
    document.getElementById('pet-btn1').classList.remove('active-pet-btn')
}

const plus1 = document.getElementById('plus1');
function toggle1(){
    if(plus1.innerHTML === '+'){
        plus1.innerHTML = '-';
        document.getElementById('toggle-content1').classList.remove('toggle-content')
    }
    else{
        plus1.innerHTML= '+';
        document.getElementById('toggle-content1').classList.add('toggle-content')
    }
}

plus1.addEventListener('click' , toggle1)



const plus2 = document.getElementById('plus2');
function toggle2(){
    if(plus2.innerHTML === '+'){
        plus2.innerHTML = '-';
        document.getElementById('toggle-content2').classList.remove('toggle-content')
    }
    else{
        plus2.innerHTML= '+';
        document.getElementById('toggle-content2').classList.add('toggle-content')
    }
}

plus2.addEventListener('click' , toggle2)


const plus3 = document.getElementById('plus3');
function toggle3(){
    if(plus3.innerHTML === '+'){
        plus3.innerHTML = '-';
        document.getElementById('toggle-content3').classList.remove('toggle-content')
    }
    else{
        plus3.innerHTML= '+';
        document.getElementById('toggle-content3').classList.add('toggle-content')
    }
}

plus3.addEventListener('click' , toggle3)


const plus4 = document.getElementById('plus4');
function toggle4(){
    if(plus4.innerHTML === '+'){
        plus4.innerHTML = '-';
        document.getElementById('toggle-content4').classList.remove('toggle-content')
    }
    else{
        plus4.innerHTML= '+';
        document.getElementById('toggle-content4').classList.add('toggle-content')
    }
}

plus4.addEventListener('click' , toggle4)


const plus5 = document.getElementById('plus5');
function toggle5(){
    if(plus5.innerHTML === '+'){
        plus5.innerHTML = '-';
        document.getElementById('toggle-content5').classList.remove('toggle-content')
    }
    else{
        plus5.innerHTML= '+';
        document.getElementById('toggle-content5').classList.add('toggle-content')
    }
}

plus5.addEventListener('click' , toggle5)