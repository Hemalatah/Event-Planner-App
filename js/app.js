/* find an event */


$(document).ready(function() {

    /* sign out */

    $('#down-arrow').on("click", function() {
      $('#drop-down').css('visibility', 'visible');
    });


    /* progress bar */
   
    var totalLength = 0;

    $("#form-create input").focusout(function() {
        if( $(this).val().length > 0 ) {
            var progressLength = $(this).attr('class');
            totalLength += parseInt(progressLength);
        }
        $('progress').val(totalLength);
    });

    $("#form-create textarea").focusout(function() {
        if( $(this).val().length > 0 ) {
            var progressLength = $(this).attr('class');
            totalLength += parseInt(progressLength);
        }
        $('progress').val(totalLength);
    });

    /* create the event page notification */

    $('#createpage').on('click', function() {
      var login_warning = $('#login-warning');
      login_warning.addClass('show');
      setTimeout(function(){ login_warning.removeClass('show');
        window.location.replace("logIn.html");}, 3000);
    });

    /* Event Page */

    function getEventDetails(f) {
        $('.event-detail').html('');
        var collection = [];
        var img = '<a href="index.html"> <img src="' + f.image + '"/></a>';
        var div1 = '<div class="event-info">';
        collection.push(img, div1);
        var h1 = '<h1>' + f.eventName + '</h1>';
        var div2 = '<div class="event-content">';
        collection.push(h1,div2);
        var span = '<span>' + f.address.join(",<br>") + '</span>';
        var time = '<h4>' + f.startTime + ' to ' + f.endTime + '</h4>';
        var desc = '<p>' + f.description + '</p>';
        var host = '<h3>Organized By: ' + f.hostName + '</h3>';
        collection.push(span,time,desc,host);
        $('.event-detail').append(collection.join(''));
    }
 

    /* create the list of events */

    listEvent(eventArray);

    function listEvent(eventArray) {
      $('.meetups').html('');
      var ul = '<ul class="meetup-list"></ul>';
      $('.meetups').append(ul);
      var collection = [];
      $.each(eventArray.events, function(i, f) {
        var list = '<li class="' + f.eventType + '">';
        var aTag = '<a class="meetup" href="#">';
        var img = '<img src="' + f.image + '"/>';
        var span = '<button id="' + i + '" class="text">' + f.eventName + '<br>' + f.eventType + '</button></a></li>';
        collection.push(list,aTag,img,span);
      });
      $('.meetup-list').append(collection.join(''));
    }

    /* modal boxes  */
    var modal = $('.modal');
    $('.text').on("click", function() {
      modal.css("display", "block");
      var index = $(this).attr("id");
      getEventDetails(eventArray.events[index]);
    });

    $('.close-icon').on("click", function() {
      modal.css("display", "none");
    });


    $(window).on("click", function(event) {
      if(event.target == modal) {
        modal.css("display", "none");
      }
    });

    /* create the event */

    var count=1, val, start, end ;

    function getMonth(dateTime) {
      dateTime = dateTime.split('-');
      var date = ""; 
      switch(dateTime[1]) {
        case "01":
          date = dateTime[2] + ' Jan ' + dateTime[0];
          break;
        case "02":
          date = dateTime[2] + ' Feb ' + dateTime[0];
          break;
        case "03":
          date = dateTime[2] + ' Mar ' + dateTime[0];
          break;
        case "04":
          date = dateTime[2] + ' Apr ' + dateTime[0];
          break;
        case "05":
          date = dateTime[2] + ' May ' + dateTime[0];
          break;
        case "06":
          date = dateTime[2] + ' Jun ' + dateTime[0];
          break;
        case "07":
          date = dateTime[2] + ' Jul ' + dateTime[0];
          break;
        case "08":
          date = dateTime[2] + ' Aug ' + dateTime[0];
          break;
        case "09":
          date = dateTime[2] + ' Sep ' + dateTime[0];
          break;
        case "10":
          date = dateTime[2] + ' Oct ' + dateTime[0];
          break;
        case "11":
          date = dateTime[2] + ' Nov ' + dateTime[0];
          break;
        case "12":
          date = dateTime[2] + ' Dec ' + dateTime[0];
          break;
        default:
          break; 
      }
      return date;
    }

    function getTime(dateTime) {
      if(dateTime != undefined) {
        dateTime = dateTime.split(':');
        var time;
        if (dateTime[0] < 12) {
          time = dateTime[0] + ':' + dateTime[1] + 'AM';
        }
        else if (dateTime[0] == 12) {
          time = dateTime[0] + ':' + dateTime[1] + 'PM';
        }
        else if (dateTime[0] == 24) {
          time = '00' + ':' + dateTime[1] + 'AM';
        }
        else {
          time = (dateTime[0] - 12) + ':' + dateTime[1] + 'PM';
        }
      }
      return time;
    }

    function getTiming(dateTime) {
      dateTime = dateTime.split('T');
      var date = getMonth(dateTime[0]);
      var time = getTime(dateTime[1]);
      return date + ' @ ' + time; 
    }

    $('#' + count).css('border', '2px solid #02B3E4');
    $('#' + count + '  div').css('color', '#02B3E4');

    /* Add created event to the object */
    
    function create() {
      var input = $('input');
      var inputLength = $('input').length;
      var newObject = {};
      var address = new Array();
      input.each(function() {
        var id = $(this).attr('id');
        var value = $(this).val();
        if(id == "eventName" || id == "eventType" || id == "hostName" || id == "phoneNumber" || id == "eAddress") {
          newObject[id] = value;
        } 
        else if (id == "startTime" || id == "endTime") {
          value = getTiming(value);
          newObject[id] = value;
        }
        else if (id == "address1" || id == "city" || id == "state" || id == "zip" || id == "country") {
          address.push(value);
        }
        else {}
      });

      //consolidate the array item for location
      newObject["address"] = address.join(" ");
      
      //Check the Text Area
      var textvalue = $('#textarea').val(); 
      if(textvalue) {
        newObject["description"] = textvalue;
      }
      eventArray.events.push(newObject);
      return eventArray;  
    }

    /* add link to the progress bar */

    $('.progress-bar ul li').on("click", function() {
      var id = $(this).attr('id');
      $('html,body').animate({
        scrollTop: $('.step' + id).offset().top-200},
        'slow');
      return;
    });


    /* form validation */

    (function($,W,D)
    {  

        $.validator.addMethod("validemail", function (email, element) {
        return this.optional(element) || email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        });

        $.validator.addMethod("validaddress", function (address, element) {
        return this.optional(element) || address.match(/(\d+)/);
        });

        $.validator.addMethod("validcity", function (city, element) {
        return this.optional(element) || city.match(/[\w ]+/);
        });

        $.validator.addMethod("validstate", function (state, element) {
        return this.optional(element) || state.match(/([A-Z]){2}/);
        });

        $.validator.addMethod("validcountry", function (country, element) {
        return this.optional(element) || country.match(/([A-Z]){2}/);
        });

        $.validator.addMethod("validzip", function (zip, element) {
        return this.optional(element) || zip.match(/(\d{5}([\-]\d{4})?)/);
        });

        $.validator.addMethod("validdate", function (start_date) {
          start_date = start_date.split('T');
          var time = start_date[1]; 
          start_date = start_date[0].split('-');
          var rightnow = new Date();
          if (start_date[0] >= rightnow.getFullYear()) {
              if(start_date[1] >= rightnow.getMonth()) {
                  if(start_date[2] > rightnow.getDate()) {
                      return true;
                  }
              }
          }
          return false;
        });

        $.validator.addMethod("validenddate", function (end_date) {
          end_date = end_date.split('T');
          var end_time = end_date[1];
          end_time = end_time.split(':'); 
          end_date = end_date[0].split('-');
          var start_date = $('#startTime').val();
          start_date = start_date.split('T');
          var start_time = start_date[1];
          start_time = start_time.split(':'); 
          start_date = start_date[0].split('-');
          console.log(start_time, end_time);
          if (start_date[0] <= end_date[0]) {
              if(start_date[1] <= end_date[1]) {
                  if(start_date[2] <= end_date[2]) {
                      if(start_time[0] <= end_time[0]) {
                          if(start_time[1] < end_time[1]) {
                              return true;
                          }
                      }
                  }
              }
          }
          return false;
        });

        $.validator.addMethod("pwdlength", function (password, element) {
        return this.optional(element) || password.length >= 8;
        });

        $.validator.addMethod("pwdnum", function (password, element) {
        return this.optional(element) || password.match(/\d/);
        });

        $.validator.addMethod("pwdalpha", function (password, element) {
        return this.optional(element) || password.match(/[a-z]/);
        });

        $.validator.addMethod("pwdcap", function (password, element) {
        return this.optional(element) || password.match(/[A-Z]/);
        });

        $.validator.addMethod("phoneUS", function (phone, element) {
        phone = phone.replace(/\s+/g, "");
        return this.optional(element) || phone.length >= 9 && phone.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        });


        var JQUERY4U = {};

        JQUERY4U.UTIL =
        {
            setupFormValidation: function()
            {
                //create event form validation rules

                $("#form-create").validate({
                    rules: {
                        eventName: {
                          required: true,
                          minlength: 3
                        },
                        eventType: {
                          required: true,
                          minlength: 3
                        },
                        hostName: {
                          required: true,
                          minlength: 3
                        },
                        phone: {
                          required: true,
                          phoneUS: true
                        }, 
                        email: {
                          required: true,
                          validemail: true
                        },
                        start_date: {
                          required: true,
                          validdate: true
                        },
                        end_date: {
                          required: true,
                          validenddate: true
                        },
                        address: {
                          required: true,
                          validaddress: true
                        },
                        city: {
                          required: true,
                          validcity: true
                        },
                        state: {
                          required: true,
                          validstate: true
                        },
                        zip: {
                          required: true,
                          validzip: true
                        },
                        country: {
                          required: true,
                          validcountry: true
                        },
                        textArea: {
                          required: true,
                          minlength: 25,
                          maxlength: 100
                        }
                    },
                    messages: {
                        eventName: {
                          required: "Please enter the Name of the event",
                          minlength: "Please enter atleast 3 letters"
                        },
                        eventType: {
                          required: "Please enter the type of the event",
                          minlength: "Please enter atleast 3 letters"
                        },hostName: {
                          required: "Please enter the Name of the host",
                          minlength: "Please enter atleast 3 letters"
                        },
                        phone: {
                          required: "Please enter the phone number in the format of either '(xxx)xxx-xxxx' or '1xxx-xxx-xxx'",
                          phoneUS: "Please enter the valid phone number in the format '(xxx)xxx-xxxx' or '1xxx-xxx-xxx'"
                        },
                        email: {
                          required: "Please enter the email ID",
                          validemail: "Please enter the valid email ID"
                        },
                        start_date: {
                          required: "Please enter the start date",
                          validdate: "please enter the date and time after the current dateTime"
                        },
                        end_date: {
                          required: "Please enter the end date",
                          validenddate: "please enter the date and time after the one entered in start date and time field"
                        },
                        address: {
                          required: "Please enter the address",
                          validaddress: "Please enter the valid address"
                        },
                        city: {
                          required: "Please enter the city",
                          validcity: "Please enter the valid city"
                        },
                        state: {
                          required: "Please enter the state",
                          validstate: "Please enter the valid state"
                        },
                        zip: {
                          required: "Please enter the zip",
                          validzip: "Please enter the valid zip"
                        },
                        country: {
                          required: "Please enter the country",
                          validcountry: "Please enter the valid country"
                        },
                        textArea: {
                          required: "Please enter the description",
                          minlength: "Please enter minimum 25 letters",
                          maxlength: "Please enter maximum 100 letters"
                        }
                    },
                    submitHandler: function() {
                      eventnewArray = create();
                      console.log(eventnewArray);
                      var snackbar = $("#snackbar");
                      snackbar.addClass('show');
                      setTimeout(function(){ snackbar.removeClass('show');
                        var decide = confirm("Would you like to create an another event?");
                        if(!decide) {
                          window.location.replace("userpage.html");
                        }
                        else {
                          window.location.replace("usercreate.html");
                        }
                      }, 3000);
                    }
                });
                
                //login form validation rules
                    
                $("#form-login").validate({
                    rules: {
                        username: {
                          required: true,
                          minlength: 6
                        },
                        email: {
                          required: true,
                          validemail: true
                        },
                        password: {
                          required: true,
                          pwdlength: true,
                          pwdnum: true,
                          pwdalpha: true,
                          pwdcap: true
                        }
                    },
                    messages: {
                        username: {
                          required: "Please enter the username",
                          minlength: "Please enter atleast 6 characters"
                        },
                        email: {
                          required: "Please enter the email ID",
                          validemail: "Please enter the valid email ID"
                        },
                        password: {
                          required: "Please enter the password" + '<br>' + "Please enter atleast 8 characters" + '<br>' + "Please enter atleast one number" + '<br>' + "Please enter atleast one letter" + '<br>' + "Please enter atleast one capital letter",
                          pwdlength: "Please enter atleast 8 characters",
                          pwdnum: "Please enter atleast one number",
                          pwdalpha: "Please enter atleast one letter",
                          pwdcap: "Please enter atleast one capital letter"
                        }
                    },
                    submitHandler: function() {
                      var snackbar = $("#snackbar");
                      snackbar.addClass('show');
                      setTimeout(function(){ snackbar.removeClass('show');
                        window.location.replace("userpage.html");}, 3000);
                      
                    }
                });

                //signup form validation

                $("#form-signup").validate({
                    rules: {
                        username: {
                          required: true,
                          minlength: 6
                        },
                        email: {
                          required: true,
                          validemail: true
                        },
                        password: {
                          required: true,
                          pwdlength: true,
                          pwdnum: true,
                          pwdalpha: true,
                          pwdcap: true
                        }
                    },
                    messages: {
                        username: {
                          required: "Please enter the username",
                          minlength: "Please enter atleast 6 characters"
                        },
                        email: {
                          required: "Please enter the email ID",
                          validemail: "Please enter the valid email ID"
                        },
                        password: {
                          required: "Please enter the password" + '<br>' + "Please enter atleast 8 characters" + '<br>' + "Please enter atleast one number" + '<br>' + "Please enter atleast one letter" + '<br>' + "Please enter atleast one capital letter",
                          pwdlength: "Please enter atleast 8 characters",
                          pwdnum: "Please enter atleast one number",
                          pwdalpha: "Please enter atleast one letter",
                          pwdcap: "Please enter atleast one capital letter"

                        }
                    },
                    submitHandler: function() {
                      var snackbar = $("#snackbar");
                      snackbar.addClass('show');
                      setTimeout(function(){ snackbar.removeClass('show');
                        window.location.replace("userpage.html");}, 3000);
                    }
                });

          }
      }

      //when the dom has loaded setup form validation rules
      
      JQUERY4U.UTIL.setupFormValidation();
      

  })(jQuery, window, document);
  
  /* search bar operation */

  var type = document.getElementsByName('eventlist')[0];
  var items = document.querySelectorAll(".meetup-list li");
  var clearable = document.querySelector('.clearable');
  type.addEventListener('input', function() {
    for (var i=0; i<items.length; i++) {
      if(this.value == "") {
        clearable.style.display = 'none';
      }
      else {
        clearable.style.display = 'inline-block';
        if (items[i].className == this.value) {
            items[i].style.display = 'inline-block';
        } else {
            items[i].style.display = 'none';
        }
      } 
    }
  });

  clearable.addEventListener('click', function() {
    type.value = "";
    clearable.style.display = 'none';
    for (var i=0; i<items.length; i++) {
      items[i].style.display = 'inline-block';
    }
  });
  

});
  
