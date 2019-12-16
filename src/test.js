//import string from './css.js'
const string = `*{box-sizing: border-box;padding: 0;margin: 0;}
ul,ol{list-style:none;}
skin*::before,skin*::after{box-sizing:border-box}

.skin{
    position:relative;
    background:#ffe600;
    min-height:50vh;
}

.nose{
    background:black;
    width:20px;
    height:10px;
    position:absolute;
    top:85px;
    left:50%;
    margin-left:-10px;
    border-radius:20px/10px;
    z-index:9
}
.nose .nose-tip{
    border:10px solid ;
    border-color:black transparent transparent;
    position:absolute;
    width:0;
    height:0;
    top:5px;
}
@keyframes wave {
    0% { -webkit-transform:rotate(0deg); }
    33% { -webkit-transform:rotate(-15deg); }
    66% { -webkit-transform:rotate(15deg); }
    100% { -webkit-transform:rotate(0deg); }
}
.nose:hover{
    transform-origin:50% 100%;
    animation: wave 300ms infinite linear;
}
.eye{
    position:absolute;
    border:3px solid black;
    width:50px;
    height:50px;
    top:70px;
    left:50%;
    margin-left:-25px;
    border-radius:50%;
    background:#2e2e2e;
}
.eye::before{
    content:"";
    display:block;
    width:20px;
    height:20px;
    border:3px solid black;
    border-radius:50%;
    background:#ffffff;
    margin-left:3px;
}
.eye.left{
    transform: translateX(-100px)
}
.eye.right{
    transform:translateX(+100px)
}
.mouth{
    position:relative;
    width:180px;
    height:180px;
    left:50%;
    margin-left:-90px;
    top:130px;
    overflow:hidden;
}
.mouth>.upperLip{
    border:3px solid black;
    position:absolute;
    width:90px;
    height:60px;
    left:50%;
    margin-left:-45px;
    top:-30px;
    background:#ffe600;
    border-radius:0 0 0  80px/30px;
    border-color:transparent transparent black black;
    z-index:1;
}
.mouth>.upperLip::before{
    content:"";
    display:block;
    border:none;
    width:6px; height:30px;
    background:#ffe600;
    position:absolute;
    left:-3px;
    top:-3px;
}
.mouth>.upperLip.left{
    transform: translateX(-51px) rotate(-30deg);
}
.mouth>.upperLip.right{
    transform: translateX(51px) rotate(30deg) rotateY(180deg) ;
}


.mouth .downLip{
    border:3px solid black;
    position:absolute;
    width:140px;
    height:500px;
    bottom:0;
    margin-left:20px;
    border-radius:70px/250px ;
    background:#9b000a;
    overflow:hidden;

}
.mouth .downLip .tongue{
    position:absolute;
    width:120px;
    height:600px;
    margin-left:10px;
    top:360px;
    border-radius:500px/400px;
    background:#ff485f;
}
 .face{
    border: 2px solid black;
    position:absolute;
    width:88px;
    height:88px;
    left:50%;
    margin-left:-44px;
    border-radius:50%;
    background:#ff0000;
}
.face.left{
    transform:translateX(-150px)
}
.face.right{
    transform:translateX(150px)
}
/*摸我鼻子*/
`
let player = {
    n: 1,
    time: 100,
    interval: undefined,
    init: () => {
        btnPlay.onclick = player.play,
            btnPause.onclick = player.pause,
            btnSlow.onclick = player.slow,
            btnMedium.onclick = player.medium,
            btnFast.onclick = player.fast
    },
    run: () => {
        player.n += 1
        console.log(player.n)
        if (player.n > string.length) {
            clearInterval(player.interval)
        }
        topHalf.innerText = string.substring(0, player.n)
        amt.innerHTML = string.substring(0, player.n)
        topHalf.scrollTop = topHalf.scrollHeight
    },
    play: () => {
        player.interval = setInterval(player.run, player.time)
    },
    pause: () => {
        clearInterval(player.interval)
    },
    slow: () => {
        player.time = 300
        player.pause()
        player.play()
    },
    medium: () => {
        player.time = 100
        player.pause()
        player.play()
    },
    fast: () => {
        player.time = 0
        player.pause()
        player.play()
    }
}

player.play()
player.init()