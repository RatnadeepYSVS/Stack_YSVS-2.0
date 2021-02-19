let input,btn,bdy=document.body
let moded=document.querySelector('input')
bdy.style.transition='all 1s ease-out'
moded.addEventListener('click',()=>{
    let mode=moded.checked
    const background=mode?'black':'#FB6612' 
    const color=mode?'white':'black'
    bdy.style.background=background
    bdy.style.color=color
})
bdy.style.fontFamily='Lato'
const add=(c)=>bdy.append(c)
const create=(c)=>document.createElement(c)
let city =localStorage.getItem('city')
city=city.charAt(0).toUpperCase()+city.slice(1)
let title = document.querySelector('title')
const baseurl='http://openweathermap.org/img/wn/'
const getdata=()=>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b1071bcbc452212017f7420dad7bba7`).then
    (data=>
    data.json()).then(res=>{
    const data = res.list
    if(data==undefined){alert('Invalid City');
    title.innerHTML='Invalid-City'
    window.location.replace('https://forecast-five.vercel.app/');
    }
    else{
    title.innerHTML=`${city} City - Weather Updates.`
    const today =data[0]
    const {main,weather,wind}=today
    const {temp_min,temp_max,humidity}=main
    const {speed}=wind
    const weate=weather[0]
    const {description}=weate
    console.log(speed,temp_min,temp_max)
    const h1 =create('h1')
    h1.innerHTML=`Today's Weather Of ${city} city`
    h1.style.textAlign='center'
    add(h1)
    const div = create('div')
    div.classList='today'
    div.style.display='block'
    div.style.margin='0 auto'
    div.style.opacity='1'
    div.style.width='250px'
    div.style.height='250px'
    div.style.padding='1% 2%'
    div.style.background='white'
    div.style.border='1px solid grey'
    div.style.color='black'
    add(div)
    const image = create('img')
    image.src=`${baseurl}${weate.icon}@2x.png`
    image.style.display='block'
    image.style.margin='-15px auto'
    div.append(image)
    const p0=create('h4')
    p0.innerHTML=`Today it's ${description}`
    p0.style.marginTop='-10px'
    p0.style.textAlign='center'
    div.append(p0)
    const div0 =create('div')
    div0.classList='rem'
    div0.style.textAlign='center'
    div.append(div0)
    const p1 = create('p')
    p1.innerHTML=`Wind Speed is ${speed} M/S`
    div0.append(p1)
    const p2 =create('p')
    p2.innerHTML=`Max-Temp is ${parseFloat(temp_max-273).toFixed(2)}&#x2103;`
    div0.append(p2)
    const p3 = create('p')
    p3.innerHTML=`Min-Temp is ${parseFloat(temp_min-273).toFixed(2)}&#x2103;`
    div0.append(p3)
    const p4 = create('p')
    p4.innerHTML=`Humidity is  ${humidity}🌢`
    div0.append(p4)
    const orgdata=[data[7],data[15],data[23],data[31]]
    const h13 = create('h1')
    h13.innerHTML='Upcoming Days'
    h13.style.textAlign='center'
    
    add(h13)
    const otherdiv = create('div')
    otherdiv.style.display='flex'
    otherdiv.style.flexWrap='wrap'
    otherdiv.style.marginLeft='7%'
    otherdiv.style.color='black'
    add(otherdiv)
    orgdata.map(i=>{
        const {main,weather,wind} = i
        const {temp_max}=main
        const {speed}=wind
        const weat=weather[0]
        const {icon,description} =weat
        const {humidity}=main
        const dated = i.dt_txt.split(' ')[0]
        const date = dated.split('-')
        const info = new Date(date[0],date[1]-1,date[2])
        const divsub = create('div')
        divsub.style.width='200px'
        divsub.style.height='350px'
        divsub.style.background='white'
        divsub.style.margin='10px'
        divsub.style.opacity='1'
        divsub.style.padding='2%'
        divsub.style.textAlign='center'
        otherdiv.append(divsub)
        const para = create('h4')
        para.style.textAlign='center'
        para.innerHTML=`On ${info.toDateString()}`
        divsub.append(para)
        const url=`${baseurl}${icon}@2x.png`
        const img = create('img')
        img.src=url
        img.style.display='block'
        img.style.margin='0 auto'
        divsub.append(img)
        const desc = create('h4')
        desc.innerHTML=`It will be ${description}`
        desc.style.textAlign='center'
        divsub.append(desc)
        const temp = create('p')
        temp.innerHTML=`Max temperature will be ${parseFloat(temp_max-273).toFixed(2)}&#x2103;`
        divsub.append(temp)
        const speedo = create('p')
        speedo.innerHTML=`Wind Speed will be ${speed} M/S`
        divsub.append(speedo)
        const humid = create('p')
        humid.innerHTML=`Humidity will be ${humidity}🌢`
        divsub.append(humid)
    })
    }
    }
    )
}
getdata()
