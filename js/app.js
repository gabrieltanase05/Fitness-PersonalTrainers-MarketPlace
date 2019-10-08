//-------------------------------------------------------------------------------------------//
//JAVASCRIPT VANILLA FOR MEMBER-PAGE AND PROFILE-MEMBER//
   //Variables
   let menuBurger = document.querySelector('.burgerMenu');
   let bar1BurgerMenu = document.querySelector('.bar1');
   let bar3BurgerMenu = document.querySelector('.bar3');
   let asideMenu = document.querySelector('.articleAsideMenu');
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
    let profileButton = document.querySelector('.profileBtn');
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
            trainersButton.style.color = '#000';
        } else {
            trainersList.style.display = 'block';
            trainersButton.style.color = '#0bf';
            if ( nutritionList.style.display == 'block' ||
                messagesList.style.display == 'block') {
                nutritionList.style.display = 'none';
                nutritionButton.style.color = '#000';
                messagesList.style.display = 'none';
                messagesButton.style.color = '#000';
            }
        }
    });

    //EventListener on Trainers List Button from asideMenu
    let trainersListReact = document.querySelector('#trainersList');
    document.querySelector("#trainersL li").addEventListener('click', function (event) {
            trainersListReact.style.display = 'block';
            asideMenu.style.display = 'none';
            socialMediaIcons.style.display ='block';
            menuBurger.classList.remove("change");
            backgroundBlur.classList.remove('background');
            bar1BurgerMenu.style.backgroundColor ="#000";
            bar3BurgerMenu.style.backgroundColor ="#000";

    });
    //EventListener on Nutrition Button form asideMenu
    let nutritionButton = document.getElementById('nutrition');
    let nutritionList = document.getElementById('nutritionL');
    nutritionButton.addEventListener('click', function (event) {
        if(nutritionList.style.display =='block'){
            nutritionList.style.display='none';
            nutritionButton.style.color = '#000';
        } else {
            nutritionList.style.display = 'block';
            nutritionButton.style.color = '#0bf';
            if ( trainersList.style.display == 'block' ||
                messagesList.style.display == 'block') {
                trainersList.style.display = 'none';
                trainersButton.style.color = '#000';
                messagesList.style.display = 'none';
                messagesButton.style.color = '#000';
            }
        }
    });

    //EventListener on Messages Button form asideMenu
    let messagesButton = document.getElementById('messages');
    let messagesList = document.getElementById('messagesL');
    messagesButton.addEventListener('click', function (event) {
        if(messagesList.style.display =='block'){
            messagesList.style.display='none';
            messagesButton.style.color = '#000';
        } else {
            messagesList.style.display = 'block';
            messagesButton.style.color = '#0bf';
            if ( nutritionList.style.display == 'block' ||
                trainersList.style.display == 'block') {
                nutritionList.style.display = 'none';
                nutritionButton.style.color = '#000';
                trainersList.style.display = 'none';
                trainersButton.style.color = '#000';
            }
        }
    });

//----------------------------------------------------------------------------------------//
