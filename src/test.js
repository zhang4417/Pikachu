import string from './css.js'

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