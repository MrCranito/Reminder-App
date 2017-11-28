$(document).ready(function(){
  $('#datetime').change(function(){
       console.log('Updated Date');
       var myDate = new Date($(this).val());
    console.log(myDate, myDate.getTime());
  });
  $('#usr').change(function(){
       console.log('Updated name');
  });
  $('#time').change(function(){
       console.log('Updated time');
  });
  $('#checkvibrator').change(function(){
       console.log('Updated vibrator');
  });
  $('#checksound').change(function(){
       console.log('Updated sound');
  });
  var myName ="";
  $("#usr").on("change", function () {
  	
    myName = $(this).val();
    localStorage.setItem("Name",myName);
    console.log(myName);
});
  $("#checkvibrator").on("change", function () {
    var myvibrator =$(this).val();
    localStorage.setItem("Vibrator",myvibrator);
    console.log(myvibrator);
});
  $("#checksound").on("change", function () {
    var mysound =$(this).val();
    localStorage.setItem("Sound",mysound);
    console.log(mysound);
});
  $("#time").on("change", function () {
    var mytime =$(this).val();
    localStorage.setItem("Time",mytime);
    console.log(mytime);
});
});	
(function() {
  $(document).ready(function() {
    $('#checkvibrator').on('change', function() {
      var isChecked = $(this).is(':checked');
      var selectedData;
      var $switchLabel = $('#checkvibrator');
      console.log('isChecked: ' + isChecked); 

      if(isChecked) {
        selectedData = $switchLabel.attr('data-on');
        console.log('Selected data: ' + selectedData);
      } else {
        selectedData = $switchLabel.attr('data-off');
        console.log('Selected data: ' + selectedData);
      }

      

    });
  });

})();	

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}


var jsonStr = '{"Datauser":[{"Id_row":"1","name":"name", "time":"12:00","sound":"on","Vibrator":"on"},{"Id_row":"2","name":"named","time":"12:03","sound":"off","Vibrator":"off"}]}';
{pko:'plo'}
 function saveData(){

	var Datauser = {"id_1":{"Id_row":"1","name":"name", "time":"12:00","sound":"on","Vibrator":"on"}
			  };

	Datauser["id_2"] = {"Id_row":$.urlParam('name'),"name":localStorage.getItem("Name"),"time":localStorage.getItem("Time"),"sound":localStorage.getItem("Sound"),"Vibrator":localStorage.getItem("Vibrator")};
 	console.log(Datauser);

 }

function printData(){
	var getInput = localStorage.getItem("Name");
	console.log(getInput);
}

		