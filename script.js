const merah = document.getElementById("merah")
const kuning = document.getElementById("kuning")

const mobilSatu = document.getElementById("satu")
const mobilKedua = document.getElementById("kedua")

merah.addEventListener('click', function(){
    merah.style.backgroundColor = 'red'
    kuning.style.backgroundColor = 'white'
    hijau.style.backgroundColor = 'white'
    
    mobilSatu.style.animation = 'mobilJalan'
    mobilKedua.style.animation = 'mobilJalan'

})

kuning.addEventListener('click', function(){
    merah.style.backgroundColor = 'white'
    kuning.style.backgroundColor = 'yellow'
    hijau.style.backgroundColor = 'white'

    mobilSatu.style.animation = 'mobilJalan 4s infinite linear 1s'
    mobilKedua.style.animation = 'mobilJalan 4s infinite linear 1s'
})

hijau.addEventListener('click', function(){
    merah.style.backgroundColor = 'white'
    kuning.style.backgroundColor = 'white'
    hijau.style.backgroundColor = 'green'

    mobilSatu.style.animation = 'mobilJalan 3s infinite ease-in-out 1s'
    mobilKedua.style.animation = 'mobilJalan 2.5s infinite linear 1s'
})