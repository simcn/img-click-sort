(function($) {
	/**
	 * 底层弹出注册弹出层组件 , 需要 cookie 与 jquery 支持
	 * @param json参数
	 * @returns this;
	 */
	$.fn.imgclicksort = function(opts) {

		opts = $.extend({
			'node':'li',
			'num':'.J_make_num',
			'startnum':1,
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

