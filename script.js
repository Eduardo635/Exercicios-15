function carregar (){
    var title = document.querySelector('#title')
    var msg = document.querySelector('#msg') 
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora >= 0 && hora <12){
        title.innerHTML = (`São ${hora} horas da manhã`)
        document.body.style.background ='#E7D8B5'
        img.src = 'fotodia.png'
    }
       else if( hora >= 12 && hora <18){
        title.innerHTML = (`São ${hora} horas da tarde`)
        img.src = 'fototarde.png'
        document.body.style.background ='#AB6D65'
        
       }
       else{
        title.innerHTML = (`São ${hora} horas da noite`)
        img.src = 'fotonoite.png'
        document.body.style.background ='black'
       }

}