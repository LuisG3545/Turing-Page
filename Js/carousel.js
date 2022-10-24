(function(){
    
    const slider = [...document.querySelectorAll('.client_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentClient = document.querySelector('.client_body--show').dataset.id;
        value = Number(currentClient);
        value+= add;


        slider[Number(currentClient)-1].classList.remove('client_body--show');
        if(value === slider.length+1 || value === 0){
            value = value === 0 ? slider.length  : 1;
        }

        slider[value-1].classList.add('client_body--show');

    }

})();