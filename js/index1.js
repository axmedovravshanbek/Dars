function clearCoor() {
// document.getElementById("infowindow").style.transform = "rotateX("+(angleY+5)+"deg) rotateY("+(-angleX-5)+"deg)";
// document.getElementById("a").innerHTML = 100*(x-ddd)/eee;
// document.getElementById("card").style.transform = "rotateY("+angleX+"grad)";
// document.getElementById("card").style.transform = "rotateX("+angleY+"grad)";
// document.getElementById("card").style.boxShadow = "red "+angleX+"px "+angleY+"px 5px";
// document.getElementById("card").style.transform = "rotate("+corner+"rad)";
// document.getElementById("imaga").style.backgroundPosition = "-"+(angleX+30)+"% -"+(angleY+50)+"%";
// document.getElementById("card").style.backgroundPosition = (angleX+60)+"% "+(angleY+90)+"%";
// document.getElementById("imaga").style.transform = "translate("+angleX+"px "+angleY+"px)";
    // document.getElementById("infomouse").innerHTML = "";
// let ddd = document.getElementById("ccc").offsetLeft;
// let eee = document.getElementById("ccc").offsetWidth;
// let corner = Math.atan(angleY/angleX)
// let coor = "X coords: " + x + ", Y coords: " + y;
// document.getElementById("infomouse").innerHTML ="mishka polojeniyasi: "+ coor;
}
let w = window.innerWidth;
let h = window.innerHeight;
if (w < 768){
document.getElementById("fullHeight").style.height = h + "px";
document.getElementById("hider").style.marginBottom = h + "px";
}
else {
    document.getElementById("fullHeight").style.height = 487 + "px";
    document.getElementById("hider").style.marginBottom = 487 + "px";
}
function showCoords(event) {

    let w = window.innerWidth;
    let h = window.innerHeight;
    let x = event.clientX;
    let y = event.clientY;
    let angleX = -(x / w) * 6;
    let angleY = -(y / h) * 6;
    // document.getElementById("infowindow").innerHTML = "ekran razmeri:"+ w +" v " + h;
    // document.getElementById("fullHeight").style.height = h + "px";
    // document.getElementById("hider").style.marginBottom = h + "px";
    // document.getElementById("infoanglex").innerHTML = angleX;
    if (w < 768){
        document.getElementById("fullHeight").style.height = h + "px";
        document.getElementById("hider").style.marginBottom = h + "px";
    }
    else {
        document.getElementById("fullHeight").style.height = 487 + "px";
        document.getElementById("hider").style.marginBottom = 487 + "px";
    }
    // document.getElementById("infoangley").innerHTML = angleY;
    // document.getElementById("kkk").style.transform = "rotateX("+(-angleY-15)+"deg) rotateY("+(-angleX-15)+"deg)";
// document.getElementById("infomouse").innerHTML = ddd;
    if (w > 768) {
        document.getElementById("kkk").style.transform = "rotateX(" + (angleY + 3) + "deg) rotateY(" + (-angleX - 3) + "deg)";
        document.getElementById("vader").style.transform = "rotateX(" + (-angleY - 3) + "deg) translateX(" + (-angleX * 3) + "px) translateY(" + (-angleY) + "px";
        document.getElementById("yoda").style.transform = "rotateX(" + (-angleY - 3) + "deg) translateX(" + (-angleX) + "px) translateY(" + (-angleY) + "px";
        // document.getElementById("yoda").style.transform = "translateX("+(-angleX)+"px)";
        document.getElementById("fire").style.transform = "translateX(" + (-angleX * 2) + "px) translateY(" + (angleY * 2) + "px";
        document.getElementById("sky").style.transform = "translateX(" + (angleX * 3) + "px)";
    }

}