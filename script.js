let city,input,btn,bdy=document.body,checker=document.querySelector('input')
bdy.style.fontFamily='Lato,Sans-seriff'
bdy.style.backgroundColor='#FB6612'
bdy.style.textAlign='center'
const add=(c)=>bdy.append(c)
const create=(c)=>document.createElement(c)
const main=create('h1')
main.innerHTML='Forecast.'
main.style.marginTop='-2vh'
add(main)
const sub=create('h2')
sub.innerHTML='Get Weather Updates Instantly.'
sub.style.marginTop='-2vh'
add(sub)
input=create('input')
input.style.border='none'
input.style.outline='none'
input.style.opacity='0.9'
input.style.marginTop='1vh'
input.style.width='350px'
input.placeholder='Enter the city name .....'
input.style.padding='4px 14px'
input.style.fontFamily='Lato'
input.style.height='30px'
input.style.color='#26303C'
add(input)
btn=create('a')
btn.href='/weat.html'
btn.innerHTML='Get Weather!'
btn.style.marginLeft='10px'
btn.style.padding='7px 10px'
btn.style.background='black'
btn.style.color='white'
btn.style.textDecoration='none'
btn.style.transition='all 2s ease-in-out'
add(btn)
const setCity=()=>{
    localStorage.setItem('city',input.value)
}
let imags=document.querySelector('img')
const clickMe =()=>{
    const mode= localStorage.getItem('mode')
    const color=checker.checked?'black':'#FB6612'
    const back=!checker.checked?'black':'white'
    bdy.style.background=color
    bdy.style.color=back
    localStorage.setItem('mode','OFF')
    const imags=document.querySelector('img')
    if(checker.checked){
        imags.src='https://www.wmcactionnews5.com/pb/resources/images/weather/weather-condition-icons/400x400/102_daily_forecast.png'
        imags.style.width='25%'
        imags.style.display='block'
        imags.style.margin='auto'
        btn.style.backgroundColor='white'
        btn.style.color=color
        localStorage.setItem('mode','ON')
    }
    else{
        imags.src='https://icons-for-free.com/iconfiles/png/512/fog+foggy+weather+icon-1320196634851598977.png'
        imags.style.width='25%'
        imags.style.display='block'
        imags.style.margin='auto'
        btn.style.backgroundColor='black'
        btn.style.color='white'
        localStorage.setItem('mode','OFF')
    }
    console.log(localStorage.getItem('mode'))
    imags.style.transition='all 2s ease-in-out'
    bdy.style.transition='all 2s ease-in-out'
}
if(localStorage.getItem('mode')=="ON"){
    checker.checked=true
    bdy.style.background='black'
    bdy.style.color='white'
    imags.src='https://www.wmcactionnews5.com/pb/resources/images/weather/weather-condition-icons/400x400/102_daily_forecast.png'
    imags.style.width='25%'
    imags.style.display='block'
    imags.style.margin='auto'
    btn.style.backgroundColor='white'
    btn.style.color='black'
}
else{
    checker.checked=false
    bdy.style.background='#FB6612'
    bdy.style.color='black'
    imags.src='https://icons-for-free.com/iconfiles/png/512/fog+foggy+weather+icon-1320196634851598977.png'
    imags.style.width='25%'
    imags.style.display='block'
    imags.style.margin='auto'
    btn.style.backgroundColor='black'
    btn.style.color='white'
}
checker.addEventListener('click',clickMe)
btn.addEventListener('click',setCity)
