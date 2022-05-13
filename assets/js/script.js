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