const dropdownEl = document.getElementById('mydropdown');
const burguerDropdownEl = document.getElementById('burguerDropdown');
const burguerEl = document.getElementById('burguerToggle');
const burguerMenu = document.getElementById('burguerMenu');
const burguerElDiv = document.getElementById('burguerToggleDiv');
let active = false;

dropdownEl.addEventListener('click', toggleActive);
burguerDropdownEl.addEventListener('click', toggleActive1);
document.addEventListener('click', documentClick);
burguerEl.addEventListener('click', burguerToggleActive);

function toggleActive() {
    dropdownEl.classList.toggle('active');
}

function toggleActive1(e) {
    e.target.classList.toggle('active');
    const burguerSubmenuEl = document.getElementById('burguerSubmenu');

    burguerSubmenuEl.classList.toggle('active');
}

function documentClick(e) {
    if(e.target.id != 'mydropdown')
        dropdownEl.classList.remove('active');

    if(e.target.id != 'burguerToggle' && e.target.id != 'burguerMenu' && e.target.id != 'burguerDropdown') {
        burguerMenu.classList.remove('active');
        burguerElDiv.classList.remove('active');

        setTimeout(() => {
            burguerEl.classList.remove('bxs-x-circle');
            burguerEl.classList.add('bx-menu');
        }, 200);

        active = false;
    }
}

function burguerToggleActive() {
    burguerElDiv.classList.toggle('active');

    setTimeout(() => {
        !active ? (
            burguerEl.classList.remove('bx-menu'),
            burguerEl.classList.add('bxs-x-circle'),
            active = true
        ) : (
            burguerEl.classList.add('bx-menu'),
            burguerEl.classList.remove('bxs-x-circle'),
            active = false
        );
    }, 200);
   
    burguerMenu.classList.toggle('active');
}