
const input = document.getElementById('input');

function clickAlert() {
    alert('Hee hee, that tickles!');
}

function addingEventListener() {
    //
    alert('Hoo hoo, that tickles!');
    input.addEventListener('click', clickAlert);
}
