const $mainclick = document.querySelector(".main-click");
const $timer = document.querySelector('t');
const $cursor = document.querySelector('.cursor');
const $clickboard = document.querySelector('k');
const $guide = document.querySelector('.guide')
let scene = 0;
let time = 0;
let click = 0;
$mainclick.addEventListener("click", ()=>{
    if (scene === 0) {
        $cursor.remove()
        $clickboard.classList.remove('invisible');
        $timer.classList.remove('invisible');
        $clickboard.classList.add('click');
        $timer.classList.add('timer');
        $guide.innerText = '측정 중...';
        start_timer()
    }else if (scene === 1){
        click += 1;
        $clickboard.innerText = click;
    }
})
function start_timer() {
    console.log('start timer');
    timer
    scene = 1;
}
setTimeout(function(){
    clearInterval(timer);
    scene = 3;
    $timer.innerText = `10초`
    $guide.innerText = '측정 완료';
    $clickboard.innerText = click +'번';
}, 11000)
const timer = setInterval(function() {
                console.log('start-timer 2')
                time += 1;
                $timer.innerText = time + `초`;
            }, 1000);