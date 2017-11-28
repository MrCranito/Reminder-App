/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false);
        $('.disable_add').hide();
        var button_anim = document.getElementById("button_translate");

        


        function onOffline() {
                    $('#error_internet').show();
                    $('#success_internet').css('display','none');

        // Handle the offline event
                }
        function onOnline() {
                    $('#success_internet').show();
                    $('#error_internet').css('display','none');
                    $('#success_internet').hide(2000);
                    // Handle the online event
                }

        function checkConnection() {
             var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
            
            }
           
            checkConnection();
            
            

            $("#add_row").on("click",function() {
                var x=0;
         $('.list').each(function(){
             x++;
                 });
            x=x+1;
            $('.disable_list').hide();
            $(".disable_add").show();
            $('.list_group').append("<a href='#' class='list-group-item list' id='reveil'"+x+"''><div class='material-switch pull-right'><input id='someSwitchOptionDefault' name='someSwitchOption001' type='checkbox'/><label for='someSwitchOptionDefault' class='label-success'></label></div></a></a>");
            
            x++;
            
        });
            
            $(document).ready(function(){
  $('#datetime').on("change",function(){
       console.log('Updated Date');
       var myDate = new Date($(this).val());
       var Daily = myDate.toISOString().slice(0,10);
       console.log(Daily);
    localStorage.setItem("Date",Daily);
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
 var Datauser = {"1":{"name":"name","date":"2015-03-04","time":"12:00","sound":"on","Vibrator":"on"},"2":{"name":"richard","date":"1996-11-02","time":"13:00","sound":"on","Vibrator":"on"},"3":{"name":"youl","date":"2009-02-03","time":"14:00","sound":"on","Vibrator":"on"}};

 $('#save').on("click",function(){
    $('.disable_add').hide();
  $('.disable_list').show();
    var i=0;
    $('.list').each(function(){
             i++;
             console.log(i);
    });     
    Datauser[""+i] = {"name":localStorage.getItem("Name"),"date":localStorage.getItem("Date"),"time":localStorage.getItem("Time"),"sound":localStorage.getItem("Sound"),"Vibrator":localStorage.getItem("Vibrator")};
    console.log(Datauser);
 });

 
        


    function printTime(){
        var i=0;
            $('.list').each(function(){
             i++;
            var newID='reveil'+i;
            $(this).attr('id',newID);
            $(this).val(i);
            var Id_row = i;
            $('#'+newID+'').html(Datauser[""+Id_row].time);                                                          
            }); 

            
            
}   

    
    setInterval(printTime,2000);
    printTime();
var q=1; 
function addurl(){
    $('.list').each(function(){
    var Id_row_add = q;
     $(this).on("click",function(){
        $('.disable_list').hide();
        $('.disable_add').show();
        console.log(Datauser[""+Id_row_add].name);
        $('#usr').val(""+Datauser[""+Id_row_add].name);
        $('#time').val(Datauser[""+Id_row_add].time);
        $('#datetime').val(Datauser[""+Id_row_add].date);
    
        
    });
     q++;

});

}
$('.list').each(function(){
    var Id_row_add = q;
     $(this).on("click",function(){
        $('.disable_list').hide();
        $('.disable_add').show();
        console.log(Datauser[""+Id_row_add].name);
        $('#usr').val(""+Datauser[""+Id_row_add].name);
        $('#time').val(Datauser[""+Id_row_add].time);
        $('#datetime').val(Datauser[""+Id_row_add].date);
    
        
    });
     q++;

});
        

function WriteJSONinFile(){
   var type = window.TEMPORARY;
   var size = 5*1024*1024;
   window.requestFileSystem(type, size, successCallback, errorCallback)

   function successCallback(fs) {
      fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

         fileEntry.createWriter(function(fileWriter) {
            fileWriter.onwriteend = function(e) {
               alert('Write completed.');
            };

            fileWriter.onerror = function(e) {
               alert('Write failed: ' + e.toString());
            };

            var blob = new Blob([Datauser], {type: 'text/plain'});
            fileWriter.write(blob);
         }, errorCallback);
      }, errorCallback);
   }


   function errorCallback(error) {
      alert("ERROR: " + error.code)
   }
}
    

    
    setInterval(addurl,2000);

    function removeItemsById(arr, id) {
    var w = arr.length;
    if (w) {   // (not 0)
        while (--w) {
            var cur = arr[w];
            if (cur.id == id) {
                arr.splice(w, 1);
            }
        }
    }
}
   
   function VibrateReminder(){

    var DateNow = new Date();
    var DayDateNOW = DateNow.getHours();
    var MinDateNow = DateNow.getMinutes();
    
    var stringDate = ""+DayDateNOW+":"+MinDateNow;
    console.log(stringDate);
    var patternVibrator = [1000, 1000, 1000, 1000];
    var i = 0;
    $('.list').each(function(){
        i++;
        if(stringDate == Datauser[""+i].time){
            navigator.vibrator(patternVibrator);
            document.addEventListener('deviceready', function () {
                // cordova.plugins.backgroundMode is now available
                cordova.plugins.backgroundMode.enable();
                cordova.plugins.notification.local.schedule({
                title: 'Time to Waking Up',
                text: Datauser[""+i].name,
                actions: [
                    { id: 'yes', title: 'Yes' },
                    { id: 'no',  title: 'No' }
                     ]
                });
            }, false);

        }

    });
}
    setInterval(VibrateReminder,1000);
    
    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();