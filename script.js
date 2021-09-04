const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');

const colors = {
    red: '00',
    green: '00',
    blue: '00'
}

redInput.addEventListener('input', handleInput('red'));
greenInput.addEventListener('input', handleInput('green'));
blueInput.addEventListener('input', handleInput('blue'));

console.log(redInput);

function handleInput(colorName) {
    return function(e) {
        colors[colorName] = e.target.value;
        document.body.style.backgroundColor = `#${colors.red}${colors.green}${colors.blue}`;
    }
}