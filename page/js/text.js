let back_title = document.querySelector('.back_title')
let back_text = back_title.innerHTML.split('')
console.log(back_text);

function addText() {
    let text = ''
    let textIndex = 0
    setInterval(function () {
        if(textIndex >= back_text.length){
            text = ''
            textIndex = 0
            // text = text + back_text[textIndex]
            back_title.innerHTML = text
        }else {
            text = text + back_text[textIndex]
            textIndex = textIndex + 1
            back_title.innerHTML = text
        }
    },500)
}
addText()
