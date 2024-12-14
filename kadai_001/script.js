$(function() {
	//カルーセル
	$('.carousel').slick({
		autoplay: true,
		dots: true,
		infinite: true,
		autoplaySpeed: 5000,
		arrows: false,
		fade: true,  //スライドをフェードイン・フェードアウト
		cssEase: 'linear', // アニメーション
	});
	
	//カルーセルがフェードアウト、フェードインしている時のimgの表示位置指定
	$('.carouse-img').css('width', '100%');

	//id属性「logo」の「MY　Profile」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('#logo').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		});
	});
	//id属性「logo」の「MY　Profile」リンクをマウスポインタ―が外れた時に不透明度(1)をアニメーション
	$('#logo').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		});
	})
	
	//class属性「about-link」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('.about-link').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		});
	})
	//class属性「about-link」がリンクをマウスポインタ―が外れた時に不透明度(1)をアニメーション
	$('.about-link').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		});
	});

	//class属性「works-link」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('.works-link').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		});
	});
	//class属性「works-link」がリンクをマウスポインタ―が外れた時に不透明度(1)をアニメーション
	$('.works-link').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		});
	});


	//id属性「worksPhoto1」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('#worksPhoto1').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		}, 500);
	});
	//id属性「worksPhoto1」がリンクのホバー時に不透明度(1)をアニメーション
	$('#worksPhoto1').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		}, 500);
	});

	//id属性「worksPhoto2」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('#worksPhoto2').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		}, 500);
	});
	//id属性「worksPhoto2」がリンクのホバー時に不透明度(1)をアニメーション
	$('#worksPhoto2').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		}, 500);
	});

	//id属性「worksPhoto3」がリンクのホバー時に不透明度(0.5)をアニメーション
	$('#worksPhoto3').on('mouseover', function() {
		$(this).animate({
			opacity: 0.5,
		}, 500);
	});
	//id属性「worksPhoto3」がリンクのホバー時に不透明度(1)をアニメーション
	$('#worksPhoto3').on('mouseout', function() {
		$(this).animate({
			opacity: 1,
		}, 500);
	});

	//ページをスクロールした時、id属性「gototop」を表示する
	const gototop = $('#gototop');
	gototop.hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			// id属性「gototop」をフェードインする
			$('#gototop').fadeIn();
		} else {
			// ページスクロールが「100px未満」になったらid属性「gototop」をフェードアウトする
			$('#gototop').fadeOut();
		}
	});
	gototop.click(function() {
		$('body,html').animate({ scrollTop: 0 }, 500);
	 	return false;
	 });

	 // ページ内リンクのスクロールをなめらかにする
	 $('a[href^="#"]').click(function () {
		const speed = 600;
		let href = $(this).attr('href');
		let target = $(href == '#' || href == '' ? 'html' : href);
		let position = target.offset().top;
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	 });

	 //スクロールしたときにセクションをフェードインさせる
	 // ウィンドウをスクロールしたら…
	 $(window).scroll(function () {
		// ウィンドウの高さを取得
		const wHeight = $(window).height();
		// スクロールした量を取得
		const wScroll = $(window).scrollTop();
		// それぞれのsectionに対して…
			$('.scroll-about,.scroll-works').each(function () {
				// それぞれのsection#のウィンドウからの高さを取得
				const bPosition = $(this).offset().top;
				// スクロールした量が要素の高さを上回ったら
				// その数値にウィンドウの高さを引き、最後に200pxを足す
				if (wScroll > bPosition - wHeight +200) {
					$(this).addClass('fadeIn');
				}
			});
	 });

	 //モーダルで画像の拡大表示
	 $('.js-open').click(function () {
		// src属性を取得
		const imgSrc = $(this).prop('src');
		//拡大htmlのsrc属性に上書き
		$('.modal-bigimg').prop('src', imgSrc);
		//フェードイン表示
		$('.modal-window, #overlay').fadeIn();
		//画面下をスクロールさせない
		// $('body').css('overflow', 'hidden');
		return false;
	 });

	 //×マークがクリックされたらモーダルを閉じる
	 $('.js-close').click(function () {
		$('.modal-window, #overlay').fadeOut();
	 });
});