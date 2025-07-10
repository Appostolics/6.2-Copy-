
function toggleAnswer(id) {
    const answer =document.getElementById(id)
    if(answer.style.display==="none"||!answer.style.display){
        answer.style.display='block'
    }
    else{answer.style.display='none'
    }
}

function sharePage(){
    navigator.share({
        title:"4 рівень ",
        url:window.location.href
    })
}