$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Engineer", "blogger ", "Influencer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Engineer", "blogger", "Influencer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    // Project Move Method
    $('#pj1').click(function() {
        window.open('https://github.com/Maengmo/Development-of-necessary-information-and-travel-destination-recommendation-app-using-public-data', '_blank');
    });
    
    $('#pj2').click(function() {
        window.open('https://github.com/Maengmo/Traffic_Combine', '_blank');
    });
    
    $('#pj3').click(function() {
        window.open('https://github.com/Maengmo/Education_Center_Management_System', '_blank');
    });
    
    $('#pj4').click(function() {
        window.open('https://github.com/Maengmo/Portfolio', '_blank');
    });

    $('#pj5').click(function() {
        window.open('https://github.com/Maengmo/JejuEottae', '_blank');
    });

    $('#pj6').click(function() {
        window.open('https://github.com/Maengmo/Animingle', '_blank');
    });

    // Arcaving Move Method
    $('#git').click(function() {
        window.open('https://github.com/Maengmo', '_blank');
    });
    
    $('#insta').click(function() {
        window.open('https://instagram.com/hwan_young_0508?igshid=YmMyMTA2M2Y=', '_blank');
    });
    
    $('#tistory').click(function() {
        window.open('https://maengmo.tistory.com/', '_blank');
    });
    
    $('#backjun').click(function() {
        window.open('https://solved.ac/profile/kcv5424', '_blank');
    });

    //Mail send Method
    function check() {
        var email = document.getElementById("email").value;
        if (email != "") {
            var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
            if (exptext.test(email) == false) {
                //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
                alert("입력한 메일형식이 올바르지 않습니다.");
                document.formtag.email.focus();
                return false;
            }
        }
        return true;
    }
    

    $('#send').click(function() {
        $('#thankyou').css({
            "display" : ""
        });
        alert("전송이 완료되었습니다! 감사합니다!");
        $('#name').val("");
        $('#email').val("");
        $('#subject').val("");
        document.getElementById("content").value="";
    });

    //Project detail
    function toggleServices() {
        const servicesElement = $('#services2');
        if (servicesElement.css('display') === 'none') {
          servicesElement.slideDown();
          $('#detail').text('Closing Detail');
        } else {
          servicesElement.slideUp();
          $('#detail').text('View Detail');
        }
    }
      
    $('#detail').click(function() {
        toggleServices();
    });

    //Project detail plus

    //project1
    function toggleServices2() {
        const pro1 = $('#plus');
        if (pro1.css('display') === 'none') {
            pro1.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card1').position().top -200
            }, 10);
           pro1.slideUp(700);
          $('#detail').text('View Detail');
          
        }
    }
      
    $('#card1').click(function() {
        toggleServices2();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });

    //project2
    function toggleServices3() {
        const pro2 = $('#plus2');
        if (pro2.css('display') === 'none') {
            pro2.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card2').position().top -200
            }, 10);
           pro2.slideUp(700);
        }
    }
      
    $('#card2').click(function() {
        toggleServices3();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });

    //project3
    function toggleServices4() {
        const pro3 = $('#plus3');
        if (pro3.css('display') === 'none') {
            pro3.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card3').position().top -200
            }, 10);
           pro3.slideUp(700);
        }
    }
      
    $('#card3').click(function() {
        toggleServices4();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });

    //project4
    function toggleServices5() {
        const pro4 = $('#plus4');
        if (pro4.css('display') === 'none') {
            pro4.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card4').position().top -200
            }, 10);
           pro4.slideUp(700);
        }
    }
      
    $('#card4').click(function() {
        toggleServices5();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });

    //project5
    function toggleServices6() {
        const pro5 = $('#plus5');
        if (pro5.css('display') === 'none') {
            pro5.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card5').position().top -200
            }, 10);
           pro5.slideUp(700);
        }
    }
      
    $('#card5').click(function() {
        toggleServices6();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });

    //project6
    function toggleServices7() {
        const pro6 = $('#plus6');
        if (pro6.css('display') === 'none') {
            pro6.slideDown();
          $('#detail').text('Closing Detail');
        } else {
            $('html,body').animate({
                scrollTop: $('#card6').position().top -200
            }, 10);
           pro6.slideUp(700);
        }
    }
      
    $('#card6').click(function() {
        toggleServices7();
        var box = this.querySelector('.box');
        if (box.style.transform === 'none') {
            box.style.transform = '';
        } else {
            box.style.transform = 'none';
        }
    });


});
