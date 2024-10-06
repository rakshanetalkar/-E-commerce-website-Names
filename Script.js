var text=document.querySelector('.shopName')

var shopNameArray=['Flipkart..','Nykaa..','Myntra..']
function textChange(idx){
    text.textContent=shopNameArray[idx]
}
index=0
setInterval(function(){
    if(index>2){
        index=0
    }
    if(index==0){
        text.classList.add('flipkart')
    }else{
        text.classList.remove('flipcart')
    }
    if(index==1){
        text.classList.add('nykaa')
    }else{
        text.classList.remove('nykaa')
    }
    if(index==2){
        text.classList.add('myntra')
    }else{
        text.classList.remove('myntra')
    }
    textChange(index)
    index+=1
},2000)

var reaveals=document.querySelectorAll('.reaveal')
var cards=document.querySelectorAll('.otherPanel .otherContainer .card')

window.addEventListener('scroll',function(){
    //console.log('scrolling')

    for(let i=0;i<reaveals.length;i++){
        let windowHeight=this.window.innerHeight
        let reavealTop=reaveals[i].getBoundingClientRect().top
        let reavealPoint=150
        if(reavealTop<windowHeight-reavealPoint){
            reaveals[i].classList.remove('reaveal')
            reaveals[i].classList.add('active')
        }else{
            reaveals[i].classList.add('reaveal')
            reaveals[i].classList.remove('active')
        }
    }

    for(let i=0;i<cards.length;i++){
        let cardHight=this.window.innerHeight
        let cardTop=cards[i].getBoundingClientRect().top
        let cardPoint=150
        if(cardTop<cardHight-cardPoint){
            cards[i].style.transform=`translateX(0px)`
        }else{
            if(i%2==0){
                cards[i].style.transform=`translateX(-400%)`
            }else{
                cards[i].style.transform=`translateX(400%)`
            }
        }
    }

})
