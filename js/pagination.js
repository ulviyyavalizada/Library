function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;


    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }


    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }


    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }


    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));

}

setTimeout(function(){
    $(function() {

        
      
        var numberOfItems = $(".pagination_items .pagination_content").length;
        var limitPerPage = limitPageCount(); //No. of cards to show per page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 5; //pagination items to show
        var currentPage;
    
    
        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
    
            currentPage = whichPage;
    
            $("main .pagination_items .pagination_content").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

            // $("main.articles_inner .pagination_items .pagination_content").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
    
            $(".pagination li").slice(1, -1).remove();
    
            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage).append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
            });
    
            $(".prev-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }
    
    
        $("main .custom-pagination").append(
            $("<li>").addClass("page-item").addClass("prev-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).html('<img src="img/prev.svg"/>')),
            $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).html('<img src="img/next.svg"/>'))
        );
    
    
        $(".pagination_items").show();
        showPage(1);
    
    
        $(document).on("click", "main .custom-pagination li.current-page:not(.active)", function() {
            return showPage(+$(this).text());
        });
    
    
    
        $(".next-page").on("click", function() {
            return showPage(currentPage + 1);
        });
    
    
        $(".prev-page").on("click", function() {
            return showPage(currentPage - 1);
        });

        if($("main.articles .pagination_items .pagination_content").length < 9){
            $('main.articles .pagination_area .pagination_numbers').hide()
        }else{
            $('main.articles .pagination_area .pagination_numbers').show()
        }

        // console.log($("main.article_inner .pagination_items .pagination_content").length);
        if($("main.article_inner .pagination_items .pagination_content").length < 4){
            $('main.article_inner .pagination_area .pagination_numbers').hide()
        }else{
            $('main.article_inner .pagination_area .pagination_numbers').show()
        }
    
    
    });
}, 400)

