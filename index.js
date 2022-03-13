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
        timer =
            setInterval(function() {
                    console.log('start-timer 2')
                    time += 1;
                    $timer.innerText = time + `초`;
                }, 1000);
        hello()
        scene = 1;
    }else if (scene === 1){
        click += 1;
        $clickboard.innerText = click;
    }
})
const hello = () =>{
    setTimeout(function(){
        $timer.innerText = `10초`
        $guide.innerText = '측정 완료';
        $clickboard.innerText = click +'번';
        scene = 3;
       clearInterval(timer);
    }, 11000)
}
    
