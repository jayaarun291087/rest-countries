let container = document.getElementById('container')
let container_2 = document.getElementById('container_2')
let searchButton = document.getElementById('searchButton')

let country_name = document.getElementById('countryName')
let officalName = document.getElementById('officalName')
let capital = document.getElementById('capital')
let flag = document.getElementById('flag')
let region = document.getElementById('region')
let countrycode = document.getElementById('countrycode')
let info_list=document.getElementById('info')
let country_input = document.getElementById('countryInput')

let storeCountryName= ''

function fetchData(){
    let countryName= country_input.value

    if(countryName == ""){
        alert('Enter a country name....')

    }
    else{
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
           flag.classList.replace('inactive','active')

           let number_formatter=new Intl.NumberFormat('en-US')
           country_name.innerHTML=data[0].name.common
           officalName.innerHTML = `<span class='bold'>official Name: </span>${data[0].name['official']}`
           capital.innerHTML=`<span class='bold'> capital: </span>${data[0].capital}`
           region.innerHTML=`<span class ='bold'>region:</span>${data[0].region}`
           countrycode.innerHTML=`<span class ='bold'>countrycode:</span>${number_formatter.format(data[0].countrycode)}`
           flag.src=data[0].flags.png
           container.classList.replace('inactive','active')
           info_list.classList.replace('inactive','active')
        })
        .catch(()=>{
           alert('Invalid countryname...')
           location.reload()
       })
       storeCountryName = countryName
       country_input.value = ''
        //fetchMoreData()
        //extraInfoButton.classList.replace('inactive','active')
       searchButton.classList.replace('active','inactive')
    }
}
searchButton.addEventListener('click', fetchData)


