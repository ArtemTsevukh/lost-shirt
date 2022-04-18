(function () {
    const openingBtn = document.querySelector('.sidebar__hamburger');

    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');
    
    openingBtn.addEventListener('click', function() { 
        sidebar.classList.add('sidebar--opened');
    });
    
    closingBtn.addEventListener('click', function() {
     sidebar.classList.remove('sidebar--opened');
    });
}());

/*openingBtn.addEventListener('click', openSidebar);

function openSidebar() {
    sidebar.classList.add('sidebar--opened');
}

function testFun(arg) {
    console.log(arg);
}

testFun('1,2,3'); */

