(function($) {

	$.fn.imgclicksort = function(opts) {

		opts = $.extend({
			'node':'li', //节点
			'num':'.J_make_num', //标签
			'startnum':1, //起始标记
			'callback': function() {}
		}, opts);
		
		var $that = $(this);
		var node = $that.find(opts.node);
		var sum = node.length + 1;

		//初始化排序规则
		var init = function(){
			$(node).data('sortid',sum);
		}();

		node.on("click", function(){
			if($(this).find(opts.num).length > 0){
				$(this).find('.J_make_num').remove();
				$(this).data('sortid',sum);
				opts.startnum--;
			}else{
				var n = opts.startnum ++;
				$(this).append('<span class="J_make_num">'+ n +'</span>');
				$(this).data('sortid',n);
			}
		});

		return this;
	}

})(jQuery);

