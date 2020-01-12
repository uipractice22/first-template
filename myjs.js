$(window).on('load',function(){

$('#header').load('header.html');
$('.offcanvas').load('sidebar.html');
	

});

$(document).ready(function(){

	/*--- sidenav implemenation---*/
	$('.menu').on('click',function(){
		$('.pagewrapper').toggleClass('in');

		if($('.pagewrapper').hasClass('in')){
		$('.page').addClass('overlay');
		$('.menu span').html('<i class="fa fa-close"></i>');

		
		}

		else{
			$('.page').removeClass('overlay');
		  	$('.menu').html('<span>&#9776;</span>');
		} 

		
	});	
	
	
	/*--- sticky header scroll----*/
	$(window).scroll(function(){
  		var sticky = $('header'),
      	scroll = $(window).scrollTop();

  		if (scroll >= 200) sticky.addClass('smaller');
  		else sticky.removeClass('smaller');
	});

	// $('button').on('click',function(){
	// 		alert("hi");
	// 	});
	var data;
	$('.ubutton').on('click', function(e) {
    e.preventDefault();
    var uid = $('#userid').val();
    alert(uid);
    $.ajax({
			
			url : "https://jsonplaceholder.typicode.com/users",
			method: "GET",
			data:{id:uid},
			dataType:'json',
			success: function (data) {
				var obj = data;
				console.log(data[0].email);
				
	         
	    },			error : function(xhr){
				alert(xhr.status);
				alert(xhr.responseText);
			}
		})
	});

});

// function showUser(){
// 	var uid = $('#userid').val();
// 	fetchData(uid);
		
// 	}

	// function fetchData(uid){
	// 	alert(uid);
	// 	$.ajax({
			
	// 		url : "https://jsonplaceholder.typicode.com/users",
	// 		method: "GET",
	// 		data:{id:uid},
	// 		dataType:'json',
	// 		success: function (data,status,xhr) {
	//          alert("hi",data.name);
	//      },
	// 		error : function(xhr){
	// 			alert(xhr.status);
	// 			alert(xhr.responseText);
	// 		}
	// 	})
	// };