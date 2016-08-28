'use strict';
var eventArray = {'events': [
  { 'eventName':    'South Bay Art1',
    'eventType':    'Art',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/art1.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Art',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/art2.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Art',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/art3.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Art',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/art4.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Health',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/health1.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Health',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/health2.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Health',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/health3.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Health',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/health4.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Hiking',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/hike1.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Hiking',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/hike2.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Hiking',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/hike3.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Hiking',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/hike4.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Tech',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/tech1.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Tech',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/tech2.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Tech',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/tech3.jpg'
  },
  { 'eventName':    'South Bay Art1',
    'eventType':    'Tech',
    'hostName':     'Jennifer',
    'phoneNumber':  '555-555-5555',
    'eAddress':     'jeniffer@gmail.com',
    'companyName':  '',
    'startTime':    '5 Jun 2016 @ 3:30 PM',
    'endTime':      '5 Jun 2016 @ 5:30 PM',
    'address':      ['San Pedro Square Market', '87 North street', 'San Jose', 'CA'],
    'description':  'This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend',
    'image':        'images/tech4.jpg'
  }
]};


(function($) 
    {$('#down-arrow').on('click', function() 
        {$('#drop-down').css('visibility', 'visible');
    });

    /* progress bar */
    var totalLength = 0;

    $('#form-create input').focusout(function() {
        if( $(this).val().length > 0 ) {
            var progressLength = $(this).attr('class');
            totalLength += parseInt(progressLength);
        }
        $('progress').val(totalLength);
    });

    $('#form-create textarea').focusout(function() {
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
        window.location.replace('logIn.html');}, 3000);
    });

    /* search bar operation */
    var clearable = $('.clearable');
    $('#eventVal').on('input', function() {
        var searchText = this.value;
        $('.meetup-list li').each(function() {
            if($(this).attr('class') == searchText) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
        if(searchText == '') {
            clearable.hide();
        }
        else {
            clearable.show();
        } 
    });

    clearable.on('click', function() {
        clearable.hide();
        $('#eventVal').val('');
        $('.meetup-list li').each(function() {
            $(this).show();
        });
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
        var span = '<span>' + f.address.join(',<br>') + '</span>';
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
    $('.text').on('click', function() {
      modal.css('display', 'block');
      var index = $(this).attr('id');
      getEventDetails(eventArray.events[index]);
    });

    $('.close-icon').on('click', function() {
      modal.css('display', 'none');
    });


    $(window).on('click', function(event) {
      if(event.target == modal) {
        modal.css('display', 'none');
      }
    });

    /* create the event */

    var count=1;

    function getMonth(dateTime) {
        dateTime = dateTime.split('-');
        var date = ''; 
        switch(dateTime[1]) {
            case '01':
                date = dateTime[2] + ' Jan ' + dateTime[0];
                break;
            case '02':
                date = dateTime[2] + ' Feb ' + dateTime[0];
                break;
            case '03':
                date = dateTime[2] + ' Mar ' + dateTime[0];
                break;
            case '04':
                date = dateTime[2] + ' Apr ' + dateTime[0];
                break;
            case '05':
                date = dateTime[2] + ' May ' + dateTime[0];
                break;
            case '06':
                date = dateTime[2] + ' Jun ' + dateTime[0];
                break;
            case '07':
                date = dateTime[2] + ' Jul ' + dateTime[0];
                break;
            case '08':
                date = dateTime[2] + ' Aug ' + dateTime[0];
                break;
            case '09':
                date = dateTime[2] + ' Sep ' + dateTime[0];
                break;
            case '10':
                date = dateTime[2] + ' Oct ' + dateTime[0];
                break;
            case '11':
                date = dateTime[2] + ' Nov ' + dateTime[0];
                break;
            case '12':
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
        var newObject = {};
        var address = new Array();
        input.each(function() {
            var id = $(this).attr('id');
            var value = $(this).val();
            if(id == 'eventName' || id == 'eventType' || id == 'hostName' || id == 'phoneNumber' || id == 'eAddress') {
                newObject[id] = value;
            } 
            else if (id == 'startTime' || id == 'endTime') {
                value = getTiming(value);
                newObject[id] = value;
            }
            else if (id == 'address1' || id == 'city' || id == 'state' || id == 'zip' || id == 'country') {
                address.push(value);
            }
        });

        //consolidate the array item for location
        newObject['address'] = address.join(' ');

        //Check the Text Area
        var textvalue = $('#textarea').val(); 
        if(textvalue) {
            newObject['description'] = textvalue;
        }
        eventArray.events.push(newObject);
        return eventArray;  
    }

    /*password validation */

    var result = false;

    $('input[type=password]').keyup(function() {
        $('.error-info').show();
        var password = $(this).val();      
        if ( password.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
            $('#length i').removeClass('fa-thumbs-up').addClass('fa-thumbs-down');
            result = false;
        } else {
            $('#length').removeClass('invalid').addClass('valid');
            $('#length i').removeClass('fa-thumbs-down').addClass('fa-thumbs-up');
            result = true;
        }
        //validate letter
        if ( password.match(/[A-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
            $('#letter i').removeClass('fa-thumbs-down').addClass('fa-thumbs-up');
            result = true;

        } else {
            $('#letter').removeClass('valid').addClass('invalid');
            $('#letter i').removeClass('fa-thumbs-up').addClass('fa-thumbs-down');
            result = false;
        }

        //validate capital letter
        if ( password.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
            $('#capital i').removeClass('fa-thumbs-down').addClass('fa-thumbs-up');
            result = true;
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
            $('#capital i').removeClass('fa-thumbs-up').addClass('fa-thumbs-down');
            result = false;
        }

        //validate number
        if (password.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
            $('#number i').removeClass('fa-thumbs-down').addClass('fa-thumbs-up');
            result = true;
        } else {
            $('#number').removeClass('valid').addClass('invalid');
            $('#number i').removeClass('fa-thumbs-up').addClass('fa-thumbs-down');
            result = false;
        }

    }).focus(function() {
        $('.error-info').show();
        $('.error-info').css('color', '#555');
    });

    function validpwd() {
        if(result) {
            var snackbar = $('#snackbar');
            snackbar.addClass('show');
            setTimeout(function(){ snackbar.removeClass('show');
                window.location.replace('userpage.html');}, 3000);
        }
    }

    /* form validation */

    

        $.validator.addMethod('validemail', function (email, element) {
            return this.optional(element) || email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        });

        $.validator.addMethod('validaddress', function (address, element) {
            return this.optional(element) || address.match(/(\d+)/);
        });

        $.validator.addMethod('validcity', function (city, element) {
            return this.optional(element) || city.match(/[\w ]+/);
        });

        $.validator.addMethod('validstate', function (state, element) {
            return this.optional(element) || state.match(/([A-Z]){2}/) || state.match(/([a-z]){4}/);
        });

        $.validator.addMethod('validcountry', function (country, element) {
            return this.optional(element) || country.match(/([A-Z]){2}/) || country.length > 0;
        });

        $.validator.addMethod('validzip', function (zip, element) {
            return this.optional(element) || zip.match(/(^[0-9]{5}(?:-[0-9]{4})?$)/);
        });

        $.validator.addMethod('eventtype', function (value, element) {
            return this.optional(element) || $('#event').find('option[value="'+value+'"]') != null && $('#event').find('option[value="'+value+'"]').length > 0;
        });

        $.validator.addMethod('validdate', function (start_date) {
            start_date = start_date.split('T'); 
            start_date = start_date[0].split('-');
            var rightnow = new Date();
            if(start_date[0] > rightnow.getFullYear()) {
                return true;
            }
            else if (start_date[0] == rightnow.getFullYear()) {
                if(start_date[1] >= rightnow.getMonth()) {
                    if(start_date[2] > rightnow.getDate()) {
                        return true;
                    }
                }
            }
            return false;
        });

        $.validator.addMethod('validenddate', function (end_date) {
            end_date = end_date.split('T');
            var end_time = end_date[1];
            end_time = end_time.split(':'); 
            end_date = end_date[0].split('-');
            var start_date = $('#startTime').val();
            start_date = start_date.split('T');
            var start_time = start_date[1];
            start_time = start_time.split(':'); 
            start_date = start_date[0].split('-');
            if(start_date[0] < end_date[0]) {
                return true; 
            }
            else if(start_date[0] == end_date[0]) {
                if(start_date[1] < end_date[1]) {
                    return true;
                }
                else if(start_date[1] == end_date[1]){
                    if(start_date[2] < end_date[2]) {
                        return true;
                    }
                    else if(start_date[2] == end_date[2]) {
                        if(start_time[0] < end_time[0]) {
                            return true;
                        }
                        else if(start_time[0] == end_time[0]) {
                            if(start_time[1] < end_time[1]) {
                                return true;
                            }
                            else if(start_time[1] == end_time[1]) {
                                return false;
                            }
                        }
                    }
                }
            }
            else {
               return false; 
            }
        });

        $.validator.addMethod('phoneUS', function (phone, element) {
        phone = phone.replace(/\s+/g, '');
            return this.optional(element) || phone.length >= 9 && phone.match(/^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/);
        });


        var JQUERY4U = {};

        JQUERY4U.UTIL =  {
            setupFormValidation: function()
            {
                //create event form validation rules
                $('#form-create').validate({
                    rules: {
                        eventName: {
                          required: true,
                          minlength: 3
                        },
                        eventType: {
                          eventtype: true
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
                          required: true
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
                        }
                    },
                    messages: {
                        eventName: {
                          required: 'Please enter the Name of the event',
                          minlength: 'Please enter atleast 3 letters'
                        },
                        eventType: {
                          eventtype: 'Please select the type of the event from the list'
                        },
                        hostName: {
                          required: 'Please enter the Name of the host',
                          minlength: 'Please enter atleast 3 letters'
                        },
                        phone: {
                          required: 'Please enter the phone number in the format of either "(xxx)xxx-xxxx" or "1xxx-xxx-xxx"',
                          phoneUS: 'Please enter the valid phone number in the format "(xxx)xxx-xxxx" or "1xxx-xxx-xxx"'
                        },
                        email: {
                          required: 'Please enter the email ID',
                          validemail: 'Please enter the valid email ID'
                        },
                        start_date: {
                          required: 'Please enter the start date',
                          validdate: 'please enter the date and time after the current dateTime'
                        },
                        end_date: {
                          required: 'Please enter the end date',
                          validenddate: 'please enter the date and time after the one entered in start date and time field'
                        },
                        address: {
                          required: 'Please enter the address'
                        },
                        city: {
                          required: 'Please enter the city',
                          validcity: 'Please enter the valid city'
                        },
                        state: {
                          required: 'Please enter the state',
                          validstate: 'Please enter the valid state'
                        },
                        zip: {
                          required: 'Please enter the zip',
                          validzip: 'Please enter the valid zip'
                        },
                        country: {
                          required: 'Please enter the country',
                          validcountry: 'Please enter the valid country'
                        }
                    },
                    submitHandler: function() {
                      var eventnewArray = create();
                      var snackbar = $('#snackbar');
                      snackbar.addClass('show');
                      setTimeout(function(){ snackbar.removeClass('show');
                        var decide = confirm('Would you like to create an another event?');
                        if(!decide) {
                          window.location.replace('userpage.html');
                        }
                        else {
                          window.location.replace('usercreate.html');
                        }
                      }, 3000);
                    }
                });
                
                //login form validation rules
                    
                $('#form-login').validate({
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
                          required: true
                        }
                    },
                    messages: {
                        username: {
                          required: 'Please enter the username',
                          minlength: 'Please enter atleast 6 characters'
                        },
                        email: {
                          required: 'Please enter the email ID',
                          validemail: 'Please enter the valid email ID'
                        },
                        password: {
                          required: 'Please enter the password'
                        }
                    },
                    submitHandler: function() {
                      validpwd();    
                    }
                });

                //signup form validation

                $('#form-signup').validate({
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
                          required: true
                        }
                    },
                    messages: {
                        username: {
                          required: 'Please enter the username',
                          minlength: 'Please enter atleast 6 characters'
                        },
                        email: {
                          required: 'Please enter the email ID',
                          validemail: 'Please enter the valid email ID'
                        },
                        password: {
                          required: 'Please enter the password'
                        }
                    },
                    submitHandler: function() {
                      validpwd();
                    }
                });

            }
        };

      //when the dom has loaded setup form validation rules
      
      JQUERY4U.UTIL.setupFormValidation();
  

})(jQuery);
  
