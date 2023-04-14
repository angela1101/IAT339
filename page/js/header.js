window.onscroll = function () {
    var yheight = window.pageYOffset;
    if(yheight > 10){
        document.querySelector('header').style.background = '#DBA39A'
    }else {
        document.querySelector('header').style.background = '#F0DBDB'
    }
}
