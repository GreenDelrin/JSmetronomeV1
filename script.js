let bpm = 100;

let metronomeInterval;
let playingMetronome = false;

updateBpmText = (_bpm) => {
    document.getElementById('bpm').innerHTML = _bpm;
}

const updateBpm = (_bpm) => {
    clearInterval(metronomeInterval);
    updateBpmText(_bpm);
    bpm = _bpm;
    if (playingMetronome) { playMetronome(); }
}


const playMetronome = () => {
    playingMetronome = true;
    document.getElementById('start').style.display = 'none';
    document.getElementById('stop').style.display = 'block';

    metronomeInterval = setInterval(function () {
        const click = new Audio('click.mp3')
        click.play()
    }, Math.round(60000 / bpm));
}

const stopMetronome = () => {
    playingMetronome = false;
    document.getElementById('start').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
    clearInterval(metronomeInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    updateBpmText(bpm);

    document.getElementById('bpm-minus').addEventListener('click', () => updateBpm(bpm - 5));
    document.getElementById('bpm-plus').addEventListener('click', () => updateBpm(bpm + 5));

    document.getElementById('slider-speed').addEventListener('input', (evt) => updateBpm(evt.target.valueAsNumber));

    document.getElementById('start').addEventListener('click', playMetronome);
    document.getElementById('stop').addEventListener('click', stopMetronome);
})