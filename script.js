var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {

        var input = document.querySelector('.input');
        var inputVal = input.innerHTML;
        var btnVal = this.getAttribute("data-value");

        if (btnVal == 'C') {
            input.innerHTML = '';
        }
        // If eval key is pressed
        else if (btnVal == '=') {
            if (inputVal)
                input.innerHTML = eval(inputVal);

        } else if (btnVal == '.') {
            input.innerHTML += btnVal;
            var decimalAdded = true;
        } else {
            input.innerHTML += btnVal;
        }
        e.preventDefault();
    }
}