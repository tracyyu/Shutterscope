$(document).ready(function(){

	$(".polaroid-images span").on("click", function(){
		var photo_id = $(this).attr('id');

		switch(photo_id){
			case 'vb':
				var urlString = 'url(images/vb.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			case 'lk':
				var urlString = 'url(images/lake.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			case 'fr':
				var urlString = 'url(images/flower.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			case 'dw':
				var urlString = 'url(images/dockweiler.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			case 'bl':
				var urlString = 'url(images/bloom.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			case 'ky':
				var urlString = 'url(images/kyoto.jpg)';
				document.getElementById('device__screen').style.backgroundImage=urlString;
				break;
			default:
				var urlString = 'url(images/eiffel_tower.png)';
				document.getElementById('device__screen').style.backgroundImage=urlString;


		}
	});

});