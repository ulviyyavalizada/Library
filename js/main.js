
// Disabled keyCodes in input number
$(function() {
    $(':input[type="number"]').on('keypress', function(event){
        var characterCode = event.keyCode || event.which || event.key;
        if((characterCode === 101) || (characterCode === 43) || (characterCode === 46) || (characterCode === 45))
        {
            return false;
        }
        else
        {
            return true;
        }
    })
});


// Header navbar mouse over and leave event
var activeListItem = $('.header_navbar').find('.nav_list_item.active')
$('.header_navbar .nav_list_item').on('mouseover', function(){
    $('.header_navbar .nav_list_item').removeClass('active');
    $(this).addClass('active');
})

$('.header_navbar .nav_list_item').on('mouseleave', function(){
    $(this).removeClass('active');
})

$('.header_navbar').on('mouseleave', function(){
    activeListItem.addClass('active')
})

// header navbar dropdown hover
$('.header_navbar .nav_dropdown').on('mouseover', function(){
    $(this).addClass('active_dropdown');
})


$('.header_navbar .nav_dropdown').on('mouseleave', function(){
    $(this).removeClass('active_dropdown');
})

$('.header_navbar .nav_dropdown .dropdown_list a').on('mouseover', function(){
    $('.header_navbar .nav_dropdown .dropdown_list a').addClass('disable').removeClass('hover')
    $(this).addClass('hover').removeClass('disable');
})

$('.header_navbar .nav_dropdown .dropdown_list').on('mouseleave', function(){
    $('.header_navbar .nav_dropdown .dropdown_list a').removeClass('disable', 'hover');
})

// Header hamburger button animation
$('header .hamburger_box').on('click',function(){
    $(this).parents('header').toggleClass('active_hamb_overlay');
})

// Hamburger overlay height controlling

let indexTopHeight = $('main.index .index_top').innerHeight();
let headerNavbarHeight = $('header .header_navbar').innerHeight();

if(($(window).width() <= 992) && ($(window).width() >= 414)){
    if(indexTopHeight > headerNavbarHeight){
        $('header .header_navbar').css('height', indexTopHeight + 67)
    }

    console.log('indexTopH: ' + indexTopHeight, 'navbarH: ' + headerNavbarHeight);
}


// Active library seria
$('main.library aside ul a').on('click', function(){
    $('main.library aside ul a').removeClass('active');
    $(this).addClass('active');
})

// Get order number for Authors Rool Page
let roolOrderNumber = $('main.authorsRool .total_rool_section li ._order');
roolOrderNumber.each(function(){
    var index = $(this).parents('li').index() + 1;
    $(this).html(index);
})


// Open aside in tablet and mobile size for Articles Page
$('main.articles .filter_btn').on('click', function(){
    $(this).parents('.left_part').find('aside').addClass('active');
})


var searchableArticles = $('main.articles .searchable_articles');
var searchableItems = $('.searchable_articles .searchable_items');
var articlesRightPart = $('main.articles .right_part');
var linkedArticles = $('main.articles .linked_articles');

// Input focus
$(document).on('click', '.search_area', function(){
    $(this).find('input').focus()
})


// Removing input value in search area for Articles Page
$(document).on('click', '.search_area .delete_btn', function(){
    $(this).parents('.search_area').find('input').val('')
    $(this).removeClass('active');
    articlesRightPart.removeClass('active_search');
    searchableArticles.css('display', 'none');
})

// Get article number link for Articles page
$('main.articles aside .submenu_inner ._text').on('click', function(e){
    e.preventDefault()
    articlesRightPart.addClass('white_overlay');
    articlesRightPart.removeClass('active_search');
    $('main.articles aside .submenu_inner ._text').removeClass('active')
    $(this).addClass('active')

    $(this).parents('aside').removeClass('active');
    $(this).parents('.articles').find('.search_area input').val('')
    searchableArticles.css('display', 'none');

    setTimeout(function(){
        articlesRightPart.find('section').css('display', 'none');;
        articlesRightPart.find('section.linked_articles').css('display', 'block');;
        articlesRightPart.removeClass('white_overlay')
    }, 800)
})

//Aside category visibility
if($(window).width() > 992){
    $('main.articles aside .aside_category_btn').on('click', function(){
        $(this).toggleClass('open_category')
        $(this).parents('aside').find('ul.main_category').toggleClass('show')
    })
}



//**** Search engine START for Articles Page 
(function(target, name) {
    /**
      escape strings that might contain characters that will be interpreted as regular expression operators. 
    */
    var escapeRegExp = function(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };
    
    /**
      ctor, provide an HTML element as argument (or anything else that contains innerHTML as property...
    */
    var SearchHighlight = function(el) {
      this.element  = el;
      this.original = el.innerHTML;
    };
    
    var p = SearchHighlight.prototype;
    
    /**
      Restore the contents of this.element.innerHTML to what it was when this object was constructed. 
    */
    p.restore = function() {
      this.element.innerHTML = this.original;
    };
    
    /**
      Find any and all text matching @arg query and replace it with a span with the class search_highlight. 
    */
    p.parse = function(query) {
      if(typeof(query) !== "string") {
        throw "query must be of type `string'";
      }
      
      var t = this.original;
      var r = new RegExp("("+escapeRegExp(query)+")", "gi");
      this.element.innerHTML = t.replace(r, '<span class="search_highlight">$1</span>');
    };
    
    // export to target as name.
    target[name] = SearchHighlight;
}(window, "SearchHighlight"));
    
/* 
    Let the code run when the window is ready
*/
$(function() {
    
    
    var searchables = [];
    setTimeout(function(){
        searchableItems.html($('main.articles .right_part .pagination_items').html())

        $("main.articles .searchable_articles .pagination_content ._title").each(function() {
            searchables.push(new SearchHighlight(this));
        });

        $("main.articles .searchable_articles .pagination_content ._descrip").each(function() {
            searchables.push(new SearchHighlight(this));
        });

        $("main.articles .searchable_articles .pagination_content ._moreInfo").each(function() {
            searchables.push(new SearchHighlight(this));
        });
    }, 300)
    
    
    $(".search_area input").on("input", function(e) {
        $('.searchable_articles .searchable_items').css('display', 'none');

        searchableArticles.css('display', 'block');
        linkedArticles.css('display', 'none');;
        articlesRightPart.addClass('active_search');
        $(this).parents('.search_area').find('.delete_btn').addClass('active');

        if($(this).val().length>2){
            

            searchableItems.css('display', 'block');
            

            var val = $(this).val();
            if(val.trim() !== "") {
                for(var i in searchables) {
                searchables[i].parse(val);
                }
            } else {
                for(var i in searchables) {
                searchables[i].restore();
                }
            }
            
            if($('.searchable_articles .search_highlight').length === 0){
                $('.searchable_articles .not_finded_text').css('display', 'block');
                $('.searcable_articles .searchable_items').css('display', 'none');
            }else{
                $('.searchable_articles .not_finded_text').css('display', 'none');
                $('.searcable_articles .searchable_items').css('display', 'block');
            }
         

           
    
            var searchableContent = $('main.articles .searchable_articles .pagination_content');

            searchableContent.each(function(){
               
                if($(this).find('.search_highlight').length === 0){
                    $(this).css('display', 'none');
                }else{
                    $(this).css('display', 'block');
                }
            })
    
            
        }else if(($(this).val().length === 2) || ($(this).val().length === 1)){
            $('.searchable_articles .not_finded_text').css('display', 'block');
        }else if(($(this).val().length === 0)){
            $('main.articles aside .submenu_inner ._text').removeClass('active');
            articlesRightPart.removeClass('active_search');
            searchableArticles.css('display', 'none');
            $(this).parents('.search_area').find('.delete_btn').removeClass('active');
        }

       
        
       
    

    });
})
//**** Search engine END for Articles Page 

// Back again articles
$('main.articles .back_articles').on('click', function(){
    articlesRightPart.find('section').css('display', 'none');;
    articlesRightPart.find('section.latest_articles').css('display', 'block');;
    articlesRightPart.find('section.most_articles').css('display', 'block');;
    $('main.articles aside .submenu_inner ._text').removeClass('active')
}) 

// Get order number for Article Inner page
let articleInnerOrderNumber = $('main.article_inner .article_section .section_bottom ul li .order');
articleInnerOrderNumber.each(function(){
    var index = $(this).parents('li').index() + 1;
    $(this).html('[' + index + ']');
})

// Input validation for Manuscript Page
var formInput = $('main.manuscript .manuscript_form .form_group').children('input[name="formInput"]');
var fileInput = $("#manuscriptFile")[0];
var formBtn = $('main.manuscript .form_btn');
var removeInputValue = $('main.manuscript .remove_val');

function formInputValidation(){
    formInput.each(function(){
        if( ($(this).val() === '' || $(this).val() === ' ' || $('main.manuscript input[type="checkbox"]:checked').length === 0 || fileInput.files.length === 0)){
            formBtn.addClass('disabled')
            
        }else{
            formBtn.removeClass('disabled');
        }
    })
}

$('.input_checkbox input[type="checkbox"]').on('input', function(){
    formInputValidation();
    if($('main.manuscript input[type="checkbox"]:checked').length===0){
        $(this).addClass('error')
    }else{
        $(this).removeClass('error')
    }
})


$(function() {
    // Form Input event
    formInput.on('keyup', function(){
        $(this).each(function(){
            if($(this).val() == '' || $(this).val() == ' '){
                $(this).addClass('error');
            }else{
                $(this).removeClass('error')
            }
        })

        
        formInputValidation()
    
    })

    formInput.on('focusin', function(){
        $(this).each(function(){
            if($(this).val() == '' || $(this).val() == ' '){
                $(this).parents('.form_group').find('.remove_val').removeClass('active')
            }else{
                $(this).parents('.form_group').find('.remove_val').addClass('active')
            }
        })
    
    })

    formInput.on('focusout', function(){
        $(this).each(function(){
            $(this).parents('.form_group').find('.remove_val').removeClass('active')
        })
    
    })
})


// Click event on form button
formBtn.on('click', function(e){
    e.preventDefault()
    formInput.each(function(){
        if($(this).val() == '' || $(this).val() == ' ' || $('main.manuscript input[type="checkbox"]:checked').length===0 || $('main.manuscript .manuscript_form input[type="file"]').val().length === 0){
            formBtn.addClass('disabled');
            $(this).addClass('error');
            $('main.manuscript input[type="checkbox"]').addClass('error');
            $('main.manuscript .file_area').addClass('error')
        }else{
            formBtn.removeClass('disabled')
            $(this).removeClass('error');
            $('main.manuscript input[type="checkbox"]').removeClass('error');
            $('main.manuscript .file_area').removeClass('error')
        }
    })
})

// Remove input value for Manuscript Page
removeInputValue.on('click', function(e){
    e.preventDefault()
    $(this).each(function(){
        $(this).parents('.form_group').find('input').val('');
        $(this).removeClass('active');
        $(this).parents('.form_group').find('input').addClass('error')
        formBtn.addClass('disabled');
    })
})

// See file name in file label
$('main.manuscript .manuscript_form input[type="file"]').on('change', function(e){
    let fileName = e.target.files[0].name;
    let labelText = $(this).parents('.manuscript_form').find('.downloaded_file .file_name')
    labelText.text(fileName);
    if( e.target.files.length !== 0 ){
        $(this).parents('.manuscript_form').find('.downloaded_file').addClass('show');
        $(this).parents('.manuscript_form').find('.file_label').removeClass('show');
        $(this).parents('.manuscript_form').find('.file_area').removeClass('error');
    }else{
        $(this).parents('.manuscript_form').find('.downloaded_file').removeClass('show');
        $(this).parents('.manuscript_form').find('.file_label').addClass('show');
        $(this).parents('.manuscript_form').find('.file_area').addClass('error');
    }

    formInputValidation()

})


// Remove file on form
$('main.manuscript .downloaded_file .remove_file').on('click', function(e){
    e.preventDefault()
    $(this).parents('.form_group').find('input[type="file"').val(null);
    $(this).parents('.downloaded_file').find('.file_name').text('');
    $(this).parents('.manuscript_form').find('.downloaded_file').removeClass('show');
    $(this).parents('.manuscript_form').find('.file_label').addClass('show');
    formBtn.addClass('disabled');
})

// waiting to get link for a tag
if($(window).width()<992){
    $('.latest_articles .swiper-slide a').on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            window.location = e.target.href
        }, 700)
    })
}

$(window).on('click', function(event){
    // Overlay visibility
    let filterOverlay = $("main.articles aside");
    let filterContent = filterOverlay.find('.inner_content')
    let filterBtn = $('main.articles .filter_btn');
    if (!filterContent.is(event.target) && !filterContent.has(event.target).length && !filterBtn.is(event.target) ){
        filterOverlay.removeClass('active');
    }



    // body overflow
    if( ($('header').hasClass('active_hamb_overlay')) ){
        $('body').css('overflow','hidden')
    }else{
        $('body').css('overflow','auto')
    }
})

// Scroll position for Article Inner Page
$(window).scroll(function() {
    if($(window).scrollTop() > $(window).height()) {
        $('main.article_inner .scroll_on').addClass('active')
    }else{
        $('main.article_inner .scroll_on').removeClass('active')
    }
});

$("main.article_inner .scroll_on").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 100);
    return false;
});

//Footer languages
$('footer .footer_lang a').on('click', function(){
    $('footer .footer_lang a').removeClass('active');
    $(this).addClass('active');
})
