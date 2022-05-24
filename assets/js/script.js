const btn_sidebar = document.querySelectorAll('.header_sidebar_first #title_sidebar');
const sectionsSidebar = document.querySelectorAll('.sctions_sidebar');

btn_sidebar.forEach((item, index) => {

    item.addEventListener('click', () => {

        btn_sidebar.forEach((item2) => {

            item2.classList.remove('title-scale-post-default');
            item2.classList.add('title_sidebar_first');

        });

        btn_sidebar[index].classList.remove('title_sidebar_first');
        btn_sidebar[index].classList.add('title-scale-post-default');

        let t_head = btn_sidebar[index].getAttribute('data-title');

        console.log(t_head);

        sectionsSidebar.forEach((item) => {

            item.classList.remove('sctions_sidebar_active');

        });

        sectionsSidebar[index].classList.add('sctions_sidebar_active');

    });

});

const btn_toggle = document.getElementById('btn_toggle');
const menu_over = document.getElementById('menu_over');
const menu_sidebar = document.getElementById('menu_sidebar');
const close_menu_full = document.getElementById('close_menu_full');

btn_toggle.addEventListener('click', function(){

    menu_over.classList.add('menu_over_active');
    setTimeout(function(){
        menu_sidebar.classList.add('menu_sidebar_open');

    }, 100)

});

close_menu_full.addEventListener('click', function(){

    menu_sidebar.classList.remove('menu_sidebar_open');
    
    setTimeout(function(){
        menu_over.classList.remove('menu_over_active');
        menu_over.classList.add('close_over_menu');
    }, 100);

    setTimeout(function(){
        menu_over.classList.remove('close_over_menu');

    }, 200);

});

menu_over.addEventListener('click', function(){

    menu_sidebar.classList.remove('menu_sidebar_open');
    
    setTimeout(function(){
        menu_over.classList.remove('menu_over_active');
        menu_over.classList.add('close_over_menu');
    }, 100);

    setTimeout(function(){
        menu_over.classList.remove('close_over_menu');

    }, 200);

});

const open_search = document.getElementById('open_search');
const search_over = document.querySelector('.search_over');
const btn_slose_search = document.getElementById('btn_slose_search');

open_search.addEventListener('click', () => {

    search_over.classList.add('open_search');

});

btn_slose_search.addEventListener('click', () => {

    search_over.classList.remove('open_search');

});