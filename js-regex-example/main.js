// Autocomplete suggestions
document.getElementById('input').addEventListener('input', (e) => {
    printValues(e.target.value)
})

function printValues(inputData) {
    let re = /(\w+)/g;
    let arr = inputData.match(re)
    result = ""
    for (var i = 0; i < arr.length; i++) {
        if (i == 3) {
            break
        }
        result += "#" + arr[i] + " ";
    }
    console.log(result)
}