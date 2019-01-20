var result = `/* Hello,大家好,我叫小宇
 * 我将以动画的形式介绍我自己
 * 首先准备一些样式
 */

* {
    transition: all 1s;
}

body {
    background: rgb(222,222,222);
}
#code {
    border: 1px solid red;
    padding: 16px;
    font-size: 16px;
    font-family: sans-serif;
}
`

var n = 0
var clock = setInterval( ()=>{
    n += 1
    code.innerHTML = result.substring(0,n)
    style.innerHTML = result.substring(0,n)
    if(n == result.length){
        window.clearInterval(clock)
    }
},10)
