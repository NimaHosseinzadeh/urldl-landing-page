// Get Elements
const headerLogo       = document.getElementById('headerLogo');
const hamburger        = document.getElementById('hamburger');
const headerNavigation = document.getElementById('headerNavigation');
const headerClose      = document.getElementById('headerClose');
const headerMenu       = document.getElementById('headerMenu');
const heroPicture      = document.getElementById('heroPicture');

// Create Logo
const logo = {
    src       : 'assets/images/logo.png' ,
    className : 'header__logo-img' ,
    alt       : 'آدرس دانلود'
};

// Render Logo
headerLogo.innerHTML = 
`<img
    src="${logo.src}"
    class="${logo.className}"
    alt="${logo.alt}"
/>`;

// Create Menu
const menu = [
    {id : 1 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'ثبت لینک'} ,
    {id : 2 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'ویژگی ها'} ,
    {id : 3 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'آمار'} ,
    {id : 4 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'سوالات متداول'} ,
    {id : 5 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'قوانین'} ,
    {id : 6 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'ورود'} ,
    {id : 7 , className : 'header__menu-item', classNameLink : 'header__menu-link', href : '#', title: 'ثبت نام'} 
];

// Render Menu Items
const menuItems = menu.map(itemMenu => `
<li class="${itemMenu.className}">
    <a class="${itemMenu.classNameLink}" href="${itemMenu.href}">${itemMenu.title}</a>
</li>
`).join('');
headerMenu.innerHTML = menuItems;

// Open Navigation Menu
hamburger.addEventListener('click' , () => {
    headerNavigation.classList.add('active');
    hamburger.setAttribute("aria-expanded", "true");
});

// Close Navigation Menu
headerClose.addEventListener('click' , () => {
    headerNavigation.classList.remove('active');
    hamburger.setAttribute("aria-expanded", "false");
});

// Create Hero Picture
const heroPictureData = {
    src : 'assets/images/pic1.png' ,
    alt : 'نیم بها کردن لینک دانلود'
};

heroPicture.src = heroPictureData.src;
heroPicture.alt = heroPictureData.alt;