function ScrollFunction() {

    var header = document.getElementById("header");
    var section = document.documentElement.section;

    if (2 * document.documentElement.clientHeight <= document.getElementById("container").scrollTop && document.getElementById("container").scrollTop < 3*document.documentElement.clientHeight){
        if (header.className == "topnav") {
            document.getElementsByClassName("topnav")[0].style.backgroundColor = '#385878';
        }
        else if (header.className == "topnav responsive") {
            document.getElementsByClassName("topnav responsive")[0].style.backgroundColor = '#385878';
            //document.getElementsById("topnavUL").style.backgroundColor = 'rgb(33, 52, 69)';
        }
    }
    if (3 * document.documentElement.clientHeight <= document.getElementById("container").scrollTop) {
        if (header.className == "topnav") {
            document.getElementsByClassName("topnav")[0].style.backgroundColor = '#ACC2D7';
        }
        else if (header.className == "topnav responsive") {
            document.getElementsByClassName("topnav responsive")[0].style.backgroundColor = '#ACC2D7';
            //document.getElementsById("topnavUL").style.backgroundColor = 'rgb(172, 194, 215)';
        }
    }
    if (2 * document.documentElement.clientHeight > document.getElementById("container").scrollTop) {
        if (header.className == "topnav") {
            document.getElementsByClassName("topnav")[0].style.backgroundColor = 'transparent';
        }
        else if (header.className == "topnav responsive") {
            document.getElementsByClassName("topnav responsive")[0].style.backgroundColor = '#223444';
            //document.getElementById("topnavUL").style.backgroundColor = 'rgb(56, 88, 120)'
        }
    }
}

function LoaderFunction() {
    var myVar = setTimeout(showPage, 0);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("container").style.display = "block";
}



function HamburgerFunction() {
    var x = document.getElementById("header");
    if (x.className == "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
