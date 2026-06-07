let navbar = document.querySelector('.navbar')
navbar.classList.toggle('active')

 
const hexes = document.querySelectorAll('.hex');
const colors = ["#e67e22", "#27ae60", "#61dafb", "#9438b8", "#f1c40f", "#2ecc71", "#e74c3c"];
let index2 = 0;

// हर 1 सेकंड में एक नया hex रंगीन होगा
setInterval(() => {
  // पहले सबको reset कर दो (खाली)
  hexes.forEach(h => h.style.background = "#eee");

  // current hex को रंग दो
  hexes[index2].style.background = colors[index2];

  // अगला index
  index2 = (index2 + 1)%hexes.length;
},700);

// और हर 5 सेकंड बाद सबको फिर से खाली कर दो
setInterval(() => {
  hexes.forEach(h => h.style.background = "#eee");
},4000);



let texas = ['Mobile Development','Web Development','AI/ML Development']

let indexVal =0;

let spanElement = document.getElementById('ChangeText')

setInterval(() => {
  indexVal = (indexVal + 1) % texas.length; 
  
  spanElement.innerHTML = texas[indexVal];
  
}, 3000);


  let btn = document.querySelector('button')
    let modalElement = document.querySelector('.modalDiv')
    let closebtn = document.querySelector('.modalDiv span')

    setTimeout(()=> {
        modalElement.style.top ='50%'
    },4000)
    btn.addEventListener('click', ()=> {
        modalElement.style.top = '50%'
    })
    closebtn.addEventListener('click', ()=>{
        modalElement.style.top='-1000px'
    })

let paragraphElement = document.querySelector('.para')
let workCartItem =document.querySelectorAll('.work-card-item')

workCartItem.forEach(card=> {
  card.addEventListener('click', ()=> {

  let iconElement = card.querySelector('.icon').innerHTML
let titleElement = card.querySelector('.title').innerHTML
let descElement = card.querySelector('.desc').innerHTML

paragraphElement.innerHTML= `


 <style>
      .highlight {
        color: white;
      
        border-radius: 4px; 
        padding:50px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        text-align:center;    
      }
      
      .spanIcon{
        width:50%;
        font-size:50px;
        text-align:center;
        }
        .tide{
        width:50%;
        font-size:25px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        }

    </style>
<div class="highlight">
<div class='spanIcon'>
<span>${iconElement}</span>
</div>
<div class='tide'>
<h3>${titleElement}</h3>
<p>${descElement}</p>
</div>
</div>`

})
})



 const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // active class reset
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // current active
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});



  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[i].classList.add('active');
  }

  showTestimonial(index);

  prevBtn.addEventListener('click', ()=> {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  });

  //

