$(function(){
	var maxdate = new Date();
maxdate.setDate(maxdate.getDate() + 90);
$('#arrival_date').datepicker({
  language: 'en',
  autoClose: 'true',
  minDate: new Date(),
  maxDate: maxdate
})	
});
   