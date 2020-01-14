$(function(){
    /********************************
    GESTION DU SCROLLING DANS LE MENU
    ********************************/
    "use strict";
    //Cette ligne signifie :
    //a.js-scroll-trigger : on recherche une balise a avec la classe js-scroll-trigger
    //[href*="#"] : dont l'attribut 'href' contient au moins un #
    //:not([href="#"]) : et dont l'attribut 'href' n'est pas juste un #
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return $("html, body").animate({
                scrollTop: e.offset().top
            }, {
                duration: 200,
                easing:"easeInOutExpo",
                start: () => {$("nav").off("mousewheel", scrollMenu)},
                complete: ()=> {$("nav").on("mousewheel", scrollMenu)}
            }), !1
        }
    }), $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide")
    }), $("body").scrollspy({
        target: "#sideNav"
    })

    $("nav").on('mousewheel', scrollMenu);
    $("nav").on('mousewheel', function(e){e.preventDefault()});

    function scrollMenu (e) {
        let active = $('a.js-scroll-trigger.active[href*="#"]:not([href="#"])');
        let link = active.parent();
        
        if (e.originalEvent.wheelDelta / 120 > 0) { link = link.prev().children(); }
        else { link = link.next().children(); }
        link.click();
    }

    $(document).on("keydown", function(e){
        let active = $('a.js-scroll-trigger.active[href*="#"]:not([href="#"])');
        let link = active.parent();

        if(e.keyCode == 33){ e.preventDefault(); link = link.prev().children(); }
        else if(e.keyCode == 34){ e.preventDefault(); link = link.next().children(); }
        link.click();
    })

    /*************************
    ANIMATION DES PROGRESS BAR
    *************************/
    
})