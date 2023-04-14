var mark_img_img = document.querySelector('.mark_img_img')
var mark = document.querySelector('.mark')
function seeImg(e) {
    mark_img_img.src = e.src
    mark.style.display = 'block'
}
function closeImg() {
    mark.style.display = 'none'
}