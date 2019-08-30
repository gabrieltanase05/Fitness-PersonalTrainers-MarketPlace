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
       profilePage.style.display='block';
       menuBurger.style.display ='none;';
        socialMediaIcons.style.display='none';
    });



//----------------------------------------------------------------------------------------//
});