const hihatClosed = new Audio('./audio/pearl/pearlkit-hihat.wav');
const hihatOpened = new Audio('./audio/pearl/pearlkit-hihatO.wav');
const crash = new Audio('./audio/pearl/pearlkit-crash.wav');
const rideOuter = new Audio('./audio/pearl/pearlkit-ride1.wav');
const rideInner = new Audio('./audio/pearl/pearlkit-ridebell.wav');

const snareInner = new Audio('./audio/pearl/pearlkit-snare2.wav');
const tomHigh = new Audio('./audio/pearl/pearlkit-hitom1.wav');
const tomLow = new Audio('./audio/pearl/pearlkit-lowtom1.wav');
const tomFloor = new Audio('./audio/pearl/pearlkit-lowtom1.wav');
const kick = new Audio('./audio/pearl/pearlkit-kick.wav');

document.body.onkeydown = (event) => {
    switch (event.key.toLowerCase()) {
        case 'h':
        case 'j':
            hihatClosed.cloneNode(true).play();
            break;

        case 'k':
        case 'l':
            hihatOpened.cloneNode(true).play();
            break;

        case 'i':
            crash.cloneNode(true).play();
            break;

        case 'o':
            rideOuter.cloneNode(true).play();
            break;

        case 'p':
            rideInner.cloneNode(true).play();
            break;

        case 's':
        case 'x':
            snareInner.cloneNode(true).play();
            break;

        case 'd':
        case 'e':
            tomHigh.cloneNode(true).play();
            break;

        case 'f':
        case 'r':
            tomLow.cloneNode(true).play();
            break;

        case 'g':
        case 't':
            tomLow.cloneNode(true).play();
            break;

        case 'v':
        case 'b':
            kick.cloneNode(true).play();
            break;

        default:
            break;
    }
}

document.querySelector('.hihat .hitbox.closed').onclick = () => {
    hihatClosed.cloneNode(true).play();
}
document.querySelector('.hihat .hitbox.opened').onclick = () => {
    hihatOpened.cloneNode(true).play();
}
document.querySelector('.crash .hitbox.outer').onclick = () => {
    crash.cloneNode(true).play();
}
document.querySelector('.ride .hitbox.outer').onclick = () => {
    rideOuter.cloneNode(true).play();
}
document.querySelector('.ride .hitbox.inner').onclick = () => {
    rideInner.cloneNode(true).play();
}
document.querySelector('.snare .hitbox.inner').onclick = () => {
    snareInner.cloneNode(true).play();
}
document.querySelector('.tom-high .hitbox').onclick = () => {
    tomHigh.cloneNode(true).play();
}
document.querySelector('.tom-medium .hitbox').onclick = () => {
    tomLow.cloneNode(true).play();
}
document.querySelector('.tom-floor .hitbox').onclick = () => {
    tomFloor.cloneNode(true).play();
}
document.querySelector('.kick .hitbox').onclick = () => {
    kick.cloneNode(true).play();
}