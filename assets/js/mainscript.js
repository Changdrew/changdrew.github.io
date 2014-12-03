$(document).ready(function() {
	$(".drose").hover(
		function(){
			this.src = 'assets/img/riprose.jpg';
		},
		function(){
			this.src = 'assets/img/drose.jpg';
		}
	);

	$(".broy").hover(
		function(){
			this.src = 'assets/img/riproy.jpg';
		},
		function(){
			this.src = 'assets/img/broy.jpg';
		}
	);


	$(".pgeorge").hover(
		function(){
			this.src = 'assets/img/ripgeorge.jpg';
		},
		function(){
			this.src = 'assets/img/pgeorge.jpg';
		}
	);

	$(".arenas").hover(
		function(){
			this.src = 'assets/img/arenascrazy.jpg';
		},
		function(){
			this.src = 'assets/img/arenasnormal.jpg';
		}
	);
	$(".artest").hover(
		function(){
			this.src = 'assets/img/artestcrazy.jpg';
		},
		function(){
			this.src = 'assets/img/artestnormal.jpg';
		}
	);
	$(".sprewell").hover(
		function(){
			this.src = 'assets/img/sprewellcrazy.jpg';
		},
		function(){
			this.src = 'assets/img/sprewellnormal.jpg';
		}
	);	
});