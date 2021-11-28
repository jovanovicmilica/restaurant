$(document).ready(function(){
    getNavigation()
    getFooter()
})

$(window).scroll(function(e){
    e.preventDefault()
    if(window.pageYOffset>100){
        $("#backToTop").removeClass("d-none")
    }
    else{
        $("#backToTop").addClass("d-none")
    }
})

var navName=['Home','Menu','About','Reservation','Author']
var navLink=['index.html','menu.html','about.html','reservation.html','#']
function getNavigation(){
    var ispis='<ul id="navLarge" class="m-0 px-3">'
    for(let i=0;i<navName.length;i++){
        ispis+=`<li><a id="${navName[i]}" class="text-decoration-none" href="${navLink[i]}">${navName[i]}</a></li>`
    }
    ispis+="</ul>"

    ispis+=`<div id="mobileNav">`
        ispis+=`<a href="#"><i class="text-light fs-3 fa fa-bars"></i></a>`
        ispis+='<ul id="navSmall" class="m-0 px-3">'
        for(let i=0;i<navName.length;i++){
            ispis+=`<li><a id="${navName[i]}" class="text-decoration-none" href="${navLink[i]}">${navName[i]}</a></li>`
        }
        ispis+="</ul>"
    ispis+=`</div>`

    document.getElementById("nav").innerHTML=ispis
    $("#Author").click(getAuthor)

    var bar=$("#mobileNav> a")
    bar.click(function(e){
        e.preventDefault()
        var sideNav=$("#mobileNav ul")
        sideNav.slideToggle(
            function(){
            $(this).find("ul").slideDown()
            $("#mobileNav  a i").attr("fa fa-times")
            })
        })
}

function getAuthor(e){
    e.preventDefault()
    var print=`
    <a href="#" id="close"><i class="fa fa-times fs-3"></i></a>
    <div class="py-5 heading">
    <h2 class="fs-1">Author</h2>
</div>


<div class="ImageWithText">
    <div class="authorImage">
        <img src="assets/images/author.jpg" alt="Nikolina Nikolic" class="img-fluid">
    </div>
    <div>
        <h2 class="mb-2">Nikolina Nikolic 90/19</h2>
        <p>Hello, I'm Nikolina Nikolic 21 year old web-developer from Serbia. I am currently studying Internet technology at the "Visoka ICT" School in Belgrade. </p>
        <p>If you want to know more about my work you should check my  <a href="https://nikolinanikolic00.netlify.app/" class="amber-text " target="blank_">portfolio</a>,
            or about my life, you can find me on  <a href="https://www.instagram.com/" target="blank_" class="amber-text">instagram</a>, <a href="https://www.facebook.com/" target="blank_" class="amber-text">facebook</a> or <a href="https://twitter.com/twitter" class="amber-text">twitter</a>. 
            If you are interesting to work with me  <a href="https://www.linkedin.com/feed/" target="blank_" class="amber-text">linkedIn</a> is the perfect social media or you can just send me an email<a href="about.html" class="amber-text"> nikolina.nikolic.90.19@ict.edu.rs</a>.
        </p>
        <p>And finally the most personal information you can get about me is my phone number<a href="about.html" class="amber-text"> +381 621367719</a>. Don't be shy to call.
        </p>
    </div>
</div>`

    $("#modal").html(print)
    $("#modal").removeClass("d-none")
    $("body").addClass("scroll")

    $("#close").click(close)
}

function close(e){
    e.preventDefault()
    $("#modal").addClass("d-none")
    $("body").removeClass("scroll")
}

let url=location.href;
if(url.indexOf("index.html")!=-1){
    getCustomers()
    getGallery()
    getEvents()
}
if(url.indexOf("menu.html")!=-1){
    getMealTypes()
    var breakfast=['Cheese Quesadilla','Cheese Pizza','Grilled Cheese Sandwich','Classic Nachos']

    var breakfastImage=['meal1.jpg','meal2.jpg','meal3.jpg','meal19.jpg']  


    var breakfastPrice=[6,8,7,8]

    printMeal(breakfast,breakfastImage,breakfastPrice)
}

if(url.indexOf("reservation.html")!=-1){
    fillDdList()
    $("#buttonMessage").click(sendMessage)
    $("#name").blur(validateName)
    $("#email").blur(validateEmail)
    $("#phone").blur(validatePhone)
    $("#date").blur(validateDate)
    $("#ddGuests").change(validateDdl)
    $("#message").blur(validateMessage)
}
if(url.indexOf("about.html")!=-1){
    getSlider()
    $("#more").click(showMore)
}


function getCustomers(){
    var image=['user1.jpg','user2.jpg','user3.jpg','user3.webp','user4.webp']
    var name=["Amazing Pizza","Best pasta in town","Relaxed Atmosphere","The Best Pizza"]
    var text=["Consistently great pizza with great variety of toppings and styles. Any time is a good time for pizza.","Do yourself a favor and visit this lovely restaurant . Work hard, be nice, eat pasta. This place is great!","It's about more than just a dining room away from home. Menu is extensive and seasonal to a particularly high standard","Don’t listen to people who tell you you can’t eat a whole pizza, you don’t need that kind of negativity in your life. "]
    var ispis=''
    for(let i=0;i<name.length;i++){
        ispis+=`<div class="customer">
                <div><img class="img-fluid" src="assets/images/${image[i]}" alt="${name[i]}"/></div>
                <p>${text[i]}</p>
                <h4>${name[i]}</h4>
            </div>`
    }

    $(".customersSlider").html(ispis)

    $('.customersSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 586,
                settings: {
                slidesToShow: 1
                }
            }
        ]
      });
}

function getGallery(){
    var image=["gallery1.jpg","gallery2.jpg","gallery3.jpg","gallery4.jpg","gallery5.jpeg","gallery7.jpeg","gallery6.jpeg","gallery8.jpeg"]
    var name=["Gallery 1","Gallery 2","Gallery 3","Gallery 4","Gallery 1","Gallery 2","Gallery 3","Gallery 4"]

    var ispis=''
    for(let i=0;i<image.length;i++){
        ispis+=`<div class="meal"><img class="img-fluid" alt="${name[i]}" src="assets/images/${image[i]}"/></div>`
    }

    $("#gallery").html(ispis)
}

function getFooter(){
    var ispis=''
    ispis+=`<div class="blok">
        <a href="index.html" class="fs-1 text-decoration-none text-dark">
        Restauco
        </a>
        <p class="mt-3">Monday-Friday 9am-1am</p>
        <p>Saturday and Sunday 10am-3am</p>
    </div>
    <div class="blok">
        <h4 class="fs-3">Contact</h4>
        <p>76/A, Green Lane, Dhanmondi, NYC</p>
        <p>+10 (78) 738-9083</p>
        <p>restaurco89@gmail.com</p>
    </div>
    <div class="blok mreze">
        <h4 class="fs-3">Social networks</h4>
        <a class="mx-3 fs-3" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a class="mx-3 fs-3" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a class="mx-3 fs-3" href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        <br/>
        <a class="mx-3 fs-4 text-decoration-none" href="#" target="_blank">Documentation</a>
    </div>`

    $("footer").html(ispis)
}



function getMealTypes(){
    var meals=['breakfast','dinner','lunch','drinks']
    var mealImage=['breakfast.webp','dinner.webp','lunch.webp','drinks.webp']
    var ispis='<ul class="p-0">'
    for(let i=0;i<meals.length;i++){
        ispis+=`<li><a class="text-decoration-none text-dark fs-3" href="#" id="${meals[i]}"><div class="mealTypeImage"><img class="img-fluid" src="assets/images/${mealImage[i]}" alt="${meals[i]}"></div>${meals[i]}</a></li>`
    }
    ispis+='</ul>'

    document.getElementById("mealTypes").innerHTML=ispis

    $("#breakfast").click(getBreakfast)
    $("#dinner").click(getDinner)
    $("#lunch").click(getLunch)
    $("#drinks").click(getDrinks)
}
function getBreakfast(e){
    e.preventDefault()
    $("#mealTypes li").removeClass('active')
    this.parentElement.classList.add("active")
    printMeal(breakfast,breakfastImage,breakfastPrice)
}
function getDinner(e){
    e.preventDefault()
    $("#mealTypes li").removeClass('active')
    this.parentElement.classList.add("active")
    var dinner=['Oldtimer','Classic Ribeye','Classic Sirloin']
    var dinnerImage=['meal11.jpg','meal12.jpg','meal13.jpg','meal10.jpg']
    var dinnerPrice=[12,11,13]
    printMeal(dinner,dinnerImage,dinnerPrice)
}
function getLunch(e){
    e.preventDefault()
    $("#mealTypes li").removeClass('active')
    this.parentElement.classList.add("active")
    var lunch=['Spicy Shrimp Tacos','Mix & Match Fajita Trio','Quesadilla Explosion Salad','Grilled Chicken Salad','Bowl of the Original Chili','Shrimp Fajitas'] 
    var lunchImage=['meal5.jpg','meal6.jpg','meal7.jpg','meal8.jpg','meal9.jpg','meal10.jpg']
    var lunchPrice=[13,15,12,11,10,15]  
    printMeal(lunch,lunchImage,lunchPrice)
}
function getDrinks(e){
    e.preventDefault()
    $("#mealTypes li").removeClass('active')
    this.parentElement.classList.add("active")
    var drinks=['Presidente Margarita','Jack Apple ‘Rita','Sunrise Margarita','Blackberry Margarita','Blue Margarita']
    var drinksImage=['meal14.jpg','meal15.jpg','meal16.jpg','meal17.jpg','meal18.jpg']
    var drinksPrice=[5,4,6,6,5]
    printMeal(drinks,drinksImage,drinksPrice)
}

function printMeal(mealName,mealImage,price){
    var ispis=''
    for(let i=0;i<mealName.length;i++){
        ispis+=`<div class="oneMeal">
            <div><img class="img-fluid" alt="Meal image" src="assets/images/${mealImage[i]}"/></div>
            <p>${mealName[i]}</p>
            <p class="price">$ ${price[i]}</p>
        </div>`
    }
    $("#meals").html(ispis)
}

function getEvents(){
    var eventImage=['event1.jpg','event2.jpg']
    var eventText=["Looking for holiday gift ideas for your loved ones, co-workers or even your boss? Give the gift of Texas-sized Baby Back Ribs, 1/2 lb. Big Mouth Burgers and sizzling, Full-on Fajitas with on of our Restauco's holiday themed e-gift cards. The best part, you get a gift too! For every $50 gift card purchase, you will receive a FREE $10 e-bonus card.",'We’re looking to grow our Restauco family with awesome people who know how to bring food AND fun to the table. We’re proud to offer our Team Members medical benefits, no-cost GED & Associates Degrees, competitive salary and even discounted meals! Apply today for our available full-time and part-time positions and let’s do this! ']
    var eventHeading=["Buy $50 in Restauco's Gift Cards, Get a $10 E-Bonus Card","Join the Restauco family!"]

    var ispis=''
    for(let i=0;i<eventHeading.length;i++){
        ispis+=`<div class="event">
            <div><img class="img-fluid" src="assets/images/${eventImage[i]}" alt="${eventHeading[i]}"/></div>
            <div>
                <h2 class="mb-5">${eventHeading[i]}</h2>
                <p class="mt-5">${eventText[i]}</p>
            </div>
        </div>`
    }
    document.getElementById("events").innerHTML=ispis
}

function fillDdList(){
    var ispis=''
    for(let i=1;i<6;i++){
        ispis+=`<option value="${i}">${i}</option>`
    }

    document.getElementById("ddGuests").innerHTML+=ispis
}

function formValidation(input,regularExpression){
    var error=0
    if(!regularExpression.test(input.value)){
        error++
        input.parentElement.nextElementSibling.classList.remove('d-none')
    }
    else{
        input.parentElement.nextElementSibling.classList.add('d-none')
    }

    return error
}

function blurValidate(input,regularExpression){
    if(!regularExpression.test(input.value)){
        input.classList.add("border-danger")
        input.classList.remove("border-success")
        input.parentElement.nextElementSibling.classList.remove('d-none')
    }
    else{
        input.classList.add("border-success")
        input.classList.remove("border-danger")
        input.parentElement.nextElementSibling.classList.add('d-none')
    }
}

var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var regName=/^[A-ZŽĐŠĆČ][a-zžđšćč]{2,}(\s[A-ZŽĐŠĆČ][a-zžđšćč]{2,}){1,2}$/;
var regPhone=/^06[012345679]\d{6,7}$/;

function validateName(){
    var name=document.getElementById("name")

    blurValidate(name,regName)
}
function validatePhone(){
    var name=document.getElementById("phone")

    blurValidate(name,regPhone)
}
function validateEmail(){
    var name=document.getElementById("email")

    blurValidate(name,regEmail)
}

function validateDate(){
    var date=document.getElementById("date")
    var currentTime=Date.now()
    var choosenTime=0
    if(date.value==""){
        date.parentElement.nextElementSibling.classList.remove('d-none')
        date.classList.add("border-danger")
        date.classList.remove("border-success")
    }
    else{
        choosenTime=Date.parse(date.value)
    }
    if(choosenTime<=currentTime){
        date.parentElement.nextElementSibling.classList.remove('d-none')
        date.classList.add("border-danger")
        date.classList.remove("border-success")
    }
    else{
        date.parentElement.nextElementSibling.classList.add('d-none')
        date.classList.remove("border-danger")
        date.classList.add("border-success")
    }
}

function validateMessage(){
    var message=document.getElementById("message")
    
    if(message.value.split(" ").length<5){
        message.parentElement.nextElementSibling.classList.remove('d-none')
        message.classList.add("border-danger")
        message.classList.remove("border-success")
    }
    else{
        message.parentElement.nextElementSibling.classList.add('d-none')
        message.classList.remove("border-danger")
        message.classList.add("border-success")
    }
}

function validateDdl(){
    var guestsNumber=document.getElementById("ddGuests")
    if(guestsNumber.value==0){
        guestsNumber.parentElement.nextElementSibling.classList.remove('d-none')
        guestsNumber.classList.add("border-danger")
        guestsNumber.classList.remove("border-success")
    }
    else{
        guestsNumber.parentElement.nextElementSibling.classList.add('d-none')
        guestsNumber.classList.remove("border-danger")
        guestsNumber.classList.add("border-success")
    }

}

function sendMessage(){
    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var date=document.getElementById("date")
    var message=document.getElementById("message")
    var guestsNumber=document.getElementById("ddGuests")
    var phone=document.getElementById("phone")
    

    var error=0

    error+=formValidation(name,regName)
    error+=formValidation(email,regEmail)
    error+=formValidation(phone,regPhone)


    var currentTime=Date.now()
    var choosenTime=0
    if(date.value==""){
        error++
        date.parentElement.nextElementSibling.classList.remove('d-none')
    }
    else{
        choosenTime=Date.parse(date.value)
    }

    
    if(message.value.split(" ").length<5){
        message.parentElement.nextElementSibling.classList.remove('d-none')
        error++
    }
    else{
        message.parentElement.nextElementSibling.classList.add('d-none')
    }
    if(choosenTime<=currentTime){
        date.parentElement.nextElementSibling.classList.remove('d-none')
        error++
    }
    else{
        date.parentElement.nextElementSibling.classList.add('d-none')
    }
    if(guestsNumber.value==0){
        guestsNumber.parentElement.nextElementSibling.classList.remove('d-none')
        error++
    }
    else{
        guestsNumber.parentElement.nextElementSibling.classList.add('d-none')
    }

    if(error==0){
        this.parentElement.nextElementSibling.classList.remove('d-none')
        $("input[type='text']").val("")
        $("textarea").val("")
        $("input[type='date']").val("")
        document.getElementById("ddGuests").selectedIndex=0
    }

}

function getSlider(){
    
    var divSlider=document.querySelector("#slider");
    var images=["restaurant.jpeg","restaurant2.jpeg","restaurant3.jpeg"];
    var i=0;
    function slider(){
        divSlider.src="assets/images/"+images[i];
        if(i<images.length-1) i++;
        else i=0;
        setTimeout(slider, 2000);
    };
    slider();
}

function showMore(e){
    e.preventDefault()
    $(".ImageWithText p").removeClass("d-none")
    $("#more").hide()
}