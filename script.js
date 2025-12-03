const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const registerlink=document.querySelector('.register-link');
const btnloginpop=document.querySelector('.btnLogin-popup');
const icon=document.querySelector('.icon-close');
registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnloginpop.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})
icon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
})

