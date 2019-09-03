document.addEventListener('DOMContentLoaded', function (event) {
//-------------------------------------------------------------------------------------------//
   //Variables
   let menuBurger = document.querySelector('.burgerMenu');
   let bar1BurgerMenu = document.querySelector('.bar1');
   let bar3BurgerMenu = document.querySelector('.bar3');
   let asideMenu = document.querySelector('.asideMenu');
   let socialMediaIcons = document.querySelector('.socialMedia');
   let backgroundBlur = document.querySelector('.blur');

   //EventListener on BurgerMenu
    menuBurger.addEventListener('click', function (event) {
        //Put the change class on Burger Button
        this.classList.toggle("change");
        //Show asideMenu
        if(asideMenu.style.display =='block') {
            asideMenu.style.display ='none';
        } else {
            asideMenu.style.display ='block';
        }
        //Check for SocialMedia Icons
        if(socialMediaIcons.style.display =='none') {
            socialMediaIcons.style.display ='block';
        } else {
            socialMediaIcons.style.display ='none';
        }
        //Put the blur effect on background
        backgroundBlur.classList.toggle('background');
        asideMenu.style.position = 'relative';
        //Color for BurgerMenu Button
        if( bar1BurgerMenu.style.backgroundColor =="rgb(0, 191, 255)" &&
            bar3BurgerMenu.style.backgroundColor =="rgb(0, 191, 255)"){
            bar1BurgerMenu.style.backgroundColor ="#000";
            bar3BurgerMenu.style.backgroundColor ="#000";
        } else {
            bar1BurgerMenu.style.backgroundColor ="rgb(0, 191, 255)";
            bar3BurgerMenu.style.backgroundColor ="rgb(0, 191, 255)";
        }
        });
    //Event Listener on Profile Button
    let profilePage= document.getElementById('memberProfile');
    let profileButton = document.querySelector('nav ul a');
    profileButton.addEventListener('click', function (event) {
       if(profilePage.style.display=='block')
        {
            profilePage.style.display ='none';
            socialMediaIcons.style.display='block';
       } else {
           profilePage.style.display = 'block';
           socialMediaIcons.style.display = 'none';
       }
    });
    //Event Listener on Trainer Button from asideMenu
    let trainersButton = document.getElementById('trainers');
    let trainersList = document.getElementById('trainersL');
    trainersButton.addEventListener('click', function (event) {
        if(trainersList.style.display =='block'){
            trainersList.style.display='none';
        } else {
            trainersList.style.display = 'block';
        }
    });
    //EventListener on Nutrition Button form asideMenu
    let nutritionButton = document.getElementById('nutrition');
    let nutritionList = document.getElementById('nutritionL');
    nutritionButton.addEventListener('click', function (event) {
        if(nutritionList.style.display =='block'){
            nutritionList.style.display='none';
        } else {
            nutritionList.style.display = 'block';
        }
    });

    //EventListener on Messages Button form asideMenu
    let messagesButton = document.getElementById('messages');
    let messagesList = document.getElementById('messagesL');
    messagesButton.addEventListener('click', function (event) {
        if(messagesList.style.display =='block'){
            messagesList.style.display='none';
        } else {
            messagesList.style.display = 'block';
        }
    });



//----------------------------------------------------------------------------------------//
});