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
                $('.list_group').append("<a href='#' class='list-group-item list_info' id='reveil'"+x+"''><p class='list'></p><p id='name'"+x+"'' class='name'></p><p class='weekDate' id='WeekDate'"+x+"'><p class='Lundi'>L</p> <p class='Mardi'>M</p> <p class='Mercredi'>M</p> <p class='Jeudi'>J</p> <p class='Vendredi'>V</p> <p class='Samedi'>S</p> <p class='Dimanche'>D</p></p><div class='material-switch pull-right'><input type='checkbox' checked data-toggle='toggle' data-onstyle='info'></div></a>");
            
                x++;
            
           });
            
$(document).ready(function(){
  var myName ="";

  $('#datetime').on("change",function(){
    console.log('Updated Date');
    var myDate = new Date($(this).val());
    var Daily = myDate.toISOString().slice(0,10);
    console.log(Daily);
    localStorage.setItem("Date",Daily);
  });


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
   $("#daySelected").on("change", function () {
    var day =""+$(this).val()+"";
    var temp = new Array();
        // this will return an array with strings "1", "2", etc.
    temp = day.split(",");
    for (i=0; i < temp.length;i++){
        switch(temp[i]){
            case "Lundi":
                temp[i] = "L";
                break;
            case "Mardi":
                temp[i] = "Ma";
                break;
            case "Mercredi":
                temp[i] = "Me";
                break;
            case "Jeudi":
                temp[i] = "J";
                break;
            case "Vendredi":
                temp[i] = "V";
                break;
            case "Samedi":
                temp[i] = "S";
                break;
            case "Dimanche":
                temp[i] = "D";
                break;


        };
            
    };
    
    console.log(temp);
    localStorage.setItem("Day",[temp]);
    console.log(temp);
        
});
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
   
var Datauser = {"1":{"name":"name","day":["L","Ma","Me"],"time":"12:00","sound":"on","Vibrator":"on"},"2":{"name":"richard","day":["Ma"],"time":"13:00","sound":"on","Vibrator":"on"},"3":{"name":"youl","day":["Me"],"time":"14:00","sound":"on","Vibrator":"on"}};

 $('#save').on("click",function(){
    $('.disable_add').hide();
     $('.disable_list').show();
    var i=0;
    Datauser[""+localStorage.getItem("ID")] = {"name":localStorage.getItem("Name"),"day":[localStorage.getItem("Day")],"time":localStorage.getItem("Time"),"sound":localStorage.getItem("Sound"),"Vibrator":localStorage.getItem("Vibrator")};
    console.log(Datauser);
 });

 
          // CREATE
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

    console.log('file system open: ' + fs.name);
    fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

        console.log("fileEntry is file?" + fileEntry.isFile.toString());
        // fileEntry.name == 'someFile.txt'
        // fileEntry.fullPath == '/someFile.txt'
        writeFile(fileEntry, null);

    });

});
    function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}




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

    function printName(){
      var i =0;
             $('.name').each(function(){
              i++;
                var newName='name'+i;
                $(this).attr('id',newName);
                var Id_row = i;
                $('#'+newName+'').html(Datauser[""+Id_row].name);
            });
    

            
            
}   

function printDay(){
      var i =0;
       var x =1;
             $('.weekDate').each(function(){
               
                i++;
                var newWeek='weekDate'+x;
                $(this).attr('id',newWeek);
                var Id_row = x;
                x++;
                var array = new Array();
                var Data = Datauser[""+Id_row].day + "";

                array = Data.split(",");
                console.log(array);
                for (i = 0;i < array.length; i++){
                    switch (array[i]){
                        case "L":
                        console.log("couscous");
                        $('#'+newWeek+'').children("p.Lundi").addClass("highlight");
                        break;
                        case "Ma":
                         $('#'+newWeek+'').children("p.Mardi").addClass("highlight");
                        break;
                        case "Me":
                         $('#'+newWeek+'').children("p.Mercredi").addClass("highlight");
                        break;
                        case "J":
                         $('#'+newWeek+'').children("div.Jeudi").addClass("highlight");
                        break;
                        case "V":
                         $('#'+newWeek+'').children("p.Vendredi").addClass("highlight");
                        break;
                        case "S":
                         $('#'+newWeek+'').children("p.Samedi").addClass("highlight");
                        break;
                        case "D":
                         $('#'+newWeek+'').children("p.Dimanche").addClass("highlight");
                        break;

                        default:
                        $('#'+newWeek+'').children("p.Lundi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Mardi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Mercredi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Jeudi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Vendredi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Samedi").removeClass("highlight");
                        $('#'+newWeek+'').children("p.Dimanche").removeClass("highlight");




                        

                    }

                }
            });
       
    

            
            
}   

    setInterval(printDay,2000);    
    setInterval(printTime,2000);
    setInterval(printName,2000);
    printTime();

var q=1; 



$('.list_info').each(function(){
    var Id_row_add = q;
     $(this).on("click",function(){
        localStorage.setItem("ID",Id_row_add);
        $('.disable_list').hide();
        $('.disable_add').show();
        console.log(Datauser[""+Id_row_add].name);
        $('#usr').val(""+Datauser[""+Id_row_add].name);
        $('#time').val(Datauser[""+Id_row_add].time);
        $('#datetime').val(Datauser[""+Id_row_add].date);
    
        
    });
     q++;

});
    
   
   function VibrateReminder(){

    var DateNow = new Date();
    var DayDateNOW = DateNow.getHours();
    var MinDateNow = DateNow.getMinutes();
    if(MinDateNow < 10){
        MinDateNow = "0"+MinDateNow;
    
    var stringDate = ""+DayDateNOW+":"+MinDateNow;
    console.log(stringDate);
    var patternVibrator = [1000, 1000, 1000, 1000];
    var i = 0;

    $('.list').each(function(){
        i++;
        if(stringDate == Datauser[""+i].time){
            navigator.vibrate(patternVibrator);
            document.addEventListener('deviceready', function () {
                // cordova.plugins.backgroundMode is now available
                cordova.plugins.backgroundMode.enable();
                cordova.plugins.notification.local.schedule({
                title: 'Time to Waking Up',
                text: 'Reveil',
                actions: [
                    { id: 'yes', title: 'Yes' },
                    { id: 'no',  title: 'No' }
                     ]
                });
            }, false);

        }

    });
    
}
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