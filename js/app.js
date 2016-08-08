/* find an event */


$(document).ready(function() {

  /* sign out */

  $('#down-arrow').on("click", function() {
    $('#drop-down-box').css('visibility', 'visible');
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

  function next(i) {  
    $('#' + count).css('border', '2px solid #999');
    $('#' + count + '  div').css('color', '#fff');
    $('#' + count).css('background', '#02B3E4');
    count = i + 1;
    $('#' + count).css('border', '2px solid #02B3E4');
    $('#' + count + '  div').css('color', '#02B3E4');
    $('.step' + count).css('display', 'block');
    $('html,body').animate({
      scrollTop: $('.step' + count).offset().top},
      'slow');
    return;   
  }


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
      var newObject = {}, username, email, pwd;

      $.validator.addMethod("validemail", function (email, element) {
      return this.optional(element) || email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
      });

      $.validator.addMethod("validpassword", function (password, element) {
      return this.optional(element) || password.length > 9 && password.match(/\d/) && password.match(/[A-z]/) && password.match(re = /[A-Z]/);
      });

      $.validator.addMethod("phoneUS", function (phone, element) {
      phone = phone.replace(/\s+/g, "");
      return this.optional(element) || phone.length >= 9 && phone.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
      });

      $.validator.addMethod("validemail", function (email, element) {
      return this.optional(element) || email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
      });

      var JQUERY4U = {};

      JQUERY4U.UTIL =
      {
          setupFormValidation: function()
          {
              //form1 validation rules
              $("#form1").validate({
                  rules: {
                      eventName: {
                        required: true,
                        minlength: 3
                      },
                      event: {
                        required: true,
                        minlength: 3
                      }
                  },
                  messages: {
                      eventName: {
                        required: "Please enter the eventName",
                        minlength: "Please enter atleast 3 letters"
                      },
                      event: {
                        required: "Please enter the type of event",
                        minlength: "Please enter atleast 3 letters"
                      }
                  },
                  submitHandler: function() {
                    next(1);
                  }
              });
              $("#form2").validate({
                  rules: {
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
                      }
                  },
                  messages: {
                      hostName: {
                        required: "Please enter the eventName",
                        minlength: "Please enter atleast 3 letters"
                      },
                      phone: {
                        required: "Please enter the phone number",
                        phoneUS: "Please enter the valid phone number"
                      },
                      email: {
                        required: "Please enter the email ID",
                        validemail: "Please enter the valid email ID"
                      }
                  },
                  submitHandler: function() {
                    next(2);
                  }
              });
              $("#form3").validate({
                  rules: {
                      start_date: "required",
                      end_date: "required"
                  },
                  messages: {
                      start_date: "Please enter the start date",
                      end_date: "Please enter the start date"
                  },
                  submitHandler: function() {
                    next(3);
                  }
              });
              $("#form4").validate({
                  rules: {
                      address: {
                        required: true,
                        minlength: 6
                      },
                      city: "required",
                      state: "required",
                      zip: "required",
                      country: "required"
                  },
                  messages: {
                      address: {
                        required: "Please enter the adress line 1",
                        minlength: "Please enter atleast 6 letters"
                      },
                      city: "Please enter the name of the city",
                      state: "Please enter the state",
                      zip: "Please enter the zipcode",
                      country: "Please enter the country name",
                  },
                  submitHandler: function() {
                    next(4);
                  }
              });
              $("#form5").validate({
                  rules: {
                      textArea: {
                        required: true,
                        minlength: 25,
                        maxlength: 100
                      }
                  },
                  messages: {
                      address: {
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
                      window.location.replace("userpage.html");}, 3000);
                  }
              });
              //form validation rules
                  
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
                        validpassword: true
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
                        required: "Please enter the password",
                        validpassword: "Please enter the valid password"

                      }
                  },
                  submitHandler: function() {
                    username = $('#username').val();
                    email = $('#email').val();
                    pwd = $('#password').val();
                    if(!logindata.hasOwnProperty(username)) {
                      $('.login-show-error').css('display','inline');
                    }
                    else {
                      if(logindata.username.email == email && logindata.name.pwd == pwd) {
                        alert('true');
                        w.location.replace("userpage.html");
                      }
                    }
                  }
              });

              $("#form-signup").validate({
                  rules: {
                      username_signup: {
                        required: true,
                        minlength: 6
                      },
                      email_signup: {
                        required: true,
                        validemail: true
                      },
                      password_signup: {
                        required: true,
                        validpassword: true
                      }
                  },
                  messages: {
                      username_signup: {
                        required: "Please enter the username",
                        minlength: "Please enter atleast 6 characters"
                      },
                      email_signup: {
                        required: "Please enter the email ID",
                        validemail: "Please enter the valid email ID"
                      },
                      password_signup: {
                        required: "Please enter the password",
                        validpassword: "Please enter the valid password"

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
  