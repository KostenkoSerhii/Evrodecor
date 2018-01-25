function formSubmit(actionStatus){
	$('form').submit(function(e){
		e.preventDefault(); 
		let form = $(this);
		let m_method="POST"; 
		let m_action=$(this).attr('action'); 
		let btnInfoMsg;
		let formBtn = form.find(".js-email-data-btn");
		
		if(formBtn.hasClass("js-email-data-btn")){
			btnInfoMsg = formBtn.attr("data-to-email");
		}else{
			btnInfoMsg = localStorage.getItem('btnInfo');
		};

		form.find(".js-input-btn-info").val(btnInfoMsg);
		let m_data = $(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){ 
				// console.log('success');
				actionStatus = true;
				localStorage.removeItem('btnInfo');
				document.location.href = "page-thanks.html";
			}
		}); 
	});
};
module.exports = formSubmit;