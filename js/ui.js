document.addEventListener('DOMContentLoaded', function(){
    // nav Menu
    const menus = document.querySelectorAll('.side-menu')
    M.Sidenav.init(menus, {edge:'right'})
    // nav recipe form
    const forms = document.querySelectorAll('.side-form')
    M.Sidenav.init(forms, {edge:'left'})
})