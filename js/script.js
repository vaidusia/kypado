$(function(){
	$('ul.nav a').smoothScroll();

	$( "#form-contact" ).each(function() {	
		var form = $(this);
		
		var submitBtn = $('button.submit', form);
		var formMsg = $( "textarea.message", form);
		var formEmail =$( "input.email", form);		
		var formName = $('input.name', form);		
		var formError = false;
		
		submitBtn.click(function(e){			
			formError = false;		
			
			checkText(formMsg);
			checkEmail(formEmail);			
			checkText(formName);		
			
			if(formError)return false;
			else {
				$.post(form.attr('action'), { 
					name: formName.val(),
					email: formEmail.val(),
					subject: "Kypado inquiery",
					msg: formMsg.val(),					
					},
				   function(data) {
				     //alert("Data Loaded: " + data);
				     $('#form-confirmation').html(data);
				     if($('#form-ok', '#form-confirmation').length > 0){
				     	formMsg.val('');
				     	formEmail.val('');
				     	formName.val('');
				     	formSubject.val('');
				     }
				     
				     $('#form-confirmation').hide().slideUp(0).slideDown(500).delay(5000).slideUp("slow", function(){$('#form-confirmation').html("data");});
				   });
			}
			e.preventDefault();
		});
		
		var checkText = function(node){
			if(node.length > 0){
				if(node.val().length < 2){
					formError = true;
					highlightError(node);
				}
			}
		}
		
		var checkEmail = function(node){
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(reg.test(node.val()) == false) {
				formError = true;
				highlightError(node);
			}
		}
		
		var highlightError = function(node){
			console.log("shake" + node);
			node.parent().addClass("has-error");
		}
	});

	
});