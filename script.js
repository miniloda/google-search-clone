let input = document.querySelector('input');
let removeButton = document.getElementsByClassName('remove')[0];
input.addEventListener('keyup', function() {
    if (input.value.length > 0) {
        removeButton.style.display= "block";
    } else{
        removeButton.style.display= "none";
    }
    return true;
});

removeButton.addEventListener('click', function() {
    input.value = '';
    removeButton.style.display= "none";
});