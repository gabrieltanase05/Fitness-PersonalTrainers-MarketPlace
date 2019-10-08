   ///---------------------------------------------------------------//
    //JAVASCRIPT FOR MEMBER REGISTER//
//EventListener on Member Register Button
    let memberButton = document.querySelector('.memberRegisterBtn');
    let cancelButton = document.getElementById('cancelMR');
    let registerMemberWindow = document.querySelector('.register');
    let section1 = document.getElementById("sectionOneVisitor");
    let section2 = document.getElementById("sectionTwoVisitor");
    let section3 = document.getElementById("sectionThirdVisitor");
    let section4 = document.getElementById("sectionFourVisitor");
    memberButton.addEventListener('click',function (event) {
        if(registerMemberWindow.style.display=='block'){
            registerMemberWindow.style.display='none'
        } else {
            registerMemberWindow.style.display='block'
            section1.style.display='none';
            section2.style.display='none';
            section3.style.display='none';
            section4.style.display='none';
        }
    });
    cancelButton.addEventListener('click',function (event) {
        if(registerMemberWindow.style.display=='none'){
            registerMemberWindow.style.display='block'
        } else {
            registerMemberWindow.style.display='none'
            section1.style.display='block';
            section2.style.display='block';
            section3.style.display='block';
            section4.style.display='block';
        }
    });
    //Login
    const loginBtn = document.getElementById('loginButton');
    const cancelBtn = document.querySelector('.cancelbtn');
    const loginMemberWindow = document.querySelector('.login');
    loginBtn.addEventListener('click', function (event) {
        if(loginMemberWindow.style.display == 'block'){
            loginMemberWindow.style.display = 'none';
        } else {
            loginMemberWindow.style.display = 'block';
            section1.style.display='none';
            section2.style.display='none';
            section3.style.display='none';
            section4.style.display='none';
        }
    });
   cancelBtn.addEventListener('click',function (event) {
       if(loginMemberWindow.style.display='block'){
           loginMemberWindow.style.display='none'
           section1.style.display='block';
           section2.style.display='block';
           section3.style.display='block';
           section4.style.display='block';
       }
   });

   //----------------------------------------------------------------//