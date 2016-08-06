$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
	var children = $('.tree li.parent_li > span').parent('li.parent_li').find(' > ul > li');
	 children.hide('fast');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
        }
        e.stopPropagation();
    });
});