document.addEventListener('DOMContentLoaded', function (event) {
    //JAVASCRIPT FOR TRAINER REGISTER//
    //EventListener on Trainer Register Button
    let trainerButton = document.querySelector('.trainerRegisterBtn');
    let cancelTrainerButton = document.getElementById('cancelTR');
    let registerTrainerWindow = document.querySelector('.registerTrainer');
    trainerButton.addEventListener('click',function (event) {
        if(registerTrainerWindow.style.display=='block'){
            registerTrainerWindow.style.display='none'
        } else {
            registerTrainerWindow.style.display='block'
            section1.style.display='none';
            section2.style.display='none';
            section3.style.display='none';
            section4.style.display='none';
        }
    });
    cancelTrainerButton.addEventListener('click',function (event) {
        if(registerTrainerWindow.style.display=='none'){
            registerTrainerWindow.style.display='block'
        } else {
            registerTrainerWindow.style.display='none'
            section1.style.display='block';
            section2.style.display='block';
            section3.style.display='block';
            section4.style.display='block';
        }
    });

});