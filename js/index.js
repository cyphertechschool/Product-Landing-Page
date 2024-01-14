const collapsedIconFirst = document.getElementById('collapsed-icon-1');
const collapsedIconLast = document.getElementById('collapsed-icon-2');
const collapsedFirst = document.getElementById('collapsed-1');
const collapsedLast = document.getElementById('collapsed-2');


collapsedIconFirst.addEventListener('click', function () {
    var collapse = collapsedFirst.classList.toggle('collapsed');
    helper(collapse, collapsedIconFirst);
});

collapsedIconLast.addEventListener('click', function () {
    var collapse = collapsedFirst.classList.toggle('collapsed');
    helper(collapse, collapsedIconLast);
});


const helper = (collapse, collapsedIcon) => {
    if (collapse === true) {
        collapsedIcon.classList.add('fa-arrow-up');
    } else {
        collapsedIcon.classList.remove('fa-arrow-up');
    }
};