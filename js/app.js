
$(document).ready(function() {

	var url = "https://cern.service-now.com/service-portal/report-ticket.do?name=cernbox-feedback&se=CERNBox-Service&cernbox_service_instance=Canary";

	var button = $('<li/>')
		.addClass('feedback_button');

	$('<a/>')
		.addClass('icon-feedback')
		.text("Feedback")
		.attr('href', url)
		.attr('target','_blank')
		.on('click', function(){
			window.open(url, '_blank');
			return false;
		})
		.appendTo(button);

	$('#app-navigation ul').append(button);
});

