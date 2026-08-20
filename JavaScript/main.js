

const trilho = document.getElementById('trilho');
const body = document.body;

if(localStorage.getItem('theme')==='dark'){
    trilho.classList.add ('dark');
    body.classList.add('dark');
}

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    if (body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme','light');
    }
    
});