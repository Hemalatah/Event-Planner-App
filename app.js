/*var sameAddress = document.querySelector('#sameAddress');
var billingAddress = document.querySelector('#billingAddress');
function myFunc() {
  if(sameAddress.checked) {
    billingAddress.className = 'billing';
  }
  else {
    billingAddress.className = '';
  }
}

var width = 1;
var input = document.getElementsByTagName('input');


function move(i) {
  var elem = document.querySelector(".bar");
  var text = document.querySelector('textarea').value;
  if(width < 100) {
    width = i*5;
  }
  if(width == 100 && !text) {
    return;
  }
  elem.style.display = "block";
  elem.style.width = width + '%';
  elem.innerHTML = width + "%" + "<br>" + "Completed" ;   
}

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

function checkMove() {
  //elements needed to create the event
  var text = document.querySelector('textarea').value;
  var eventName = document.getElementById('eventName').value;
  var hostName = document.querySelector('.host').getElementsByTagName('input');
  var location = document.querySelector('.location').getElementsByTagName('input');
  var locationArray = [];
  for(var i = 0; i < location.length; i++) {
    locationArray.push(location[i].value);
  };
  var timing = document.querySelector('.timing').getElementsByTagName('input');
  var startTime = timing[0].value.toString();
  startTime = getTiming(startTime);
  var endTime = timing[1].value.toString();
  endTime = getTiming(endTime);
  
  

  if(width < 100) {
    alert("Please fill out the form completely");
    for(var i = 0; i < input.length; i++) {
      if(input[i].value) {
        move(i);
      }
    }
  }
  else {
    var obj = {};
    obj.eventName = eventName;
    obj.hostName = hostName;
    obj.location = locationArray;
    obj.startTime = startTime;
    obj.endTime = endTime;
    obj.text = text;
    eventsList(obj);
  }
}

function createList() {
  this.events = [
    {
      "eventName": "Silicon Valley startup founders",
      "HostName": "Matt.D",
      "Location": ["Founders Floor", "2 North First Street", "San Jose", "CA", "95134", "US"],
      "startTime": "5 Jun 2016 @ 3:30 PM",
      "endTime": "5 Jun 2016 @ 5:30 PM",
      "text": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
      "image": "Images/eventImg1.jpg"
    },
    {
      "eventName": "Tech in Motion: Silicon Valley",
      "HostName": "Mandy",
      "Location": ["AFK Gamer Lounge", "163 W Santa Clara St", "San Jose", "CA" , "95134", "US"],
      "startTime": "5 Jun 2016 @ 3:30 PM",
      "endTime": "5 Jun 2016 @ 5:30 PM",
      "text": "Gather your friends and come in teams of 4 or join others to test your knowledge at our Tech Trivia Happy Hour.",
      "image": "Images/eventImg2.jpg"
    },
    {
      "eventName": "Bay Area Cultural Cuisine Exchange Meetup",
      "HostName": "Jelly",
      "Location": ["181 W Calaveras Blvd", "Milpitas", "CA" , "95134", "US"],
      "startTime": "5 Jun 2016 @ 3:30 PM",
      "endTime": "5 Jun 2016 @ 5:30 PM",
      "text": "People all have one thing in common, a passion of food, so why don't we get to know each other and have fun by meeting up and exchanging our culinary. We can dine out at our favorite restaurants, or we can meet at some places we can cook together and share our diverse cultural recipes, Japanese, Korean, Vietnamese, Italian, Mexican etc...",
      "image": "Images/eventImg3.jpg"
    },
    {
      "eventName": "Professional Photographers of Santa Clara Valley",
      "HostName": "Laura Marshall",
      "Location": ["Founders Floor", "2 North First Street", "San Jose", "CA", "95134", "US"],
      "startTime": "5 Jun 2016 @ 3:30 PM",
      "endTime": "5 Jun 2016 @ 5:30 PM",
      "text": "Professional Photographers of Santa Clara Valley (PPSCV) is a non-profit organization whose objectives and purposes include the advancement of photography as an art and as a profession.",
      "image": "Images/eventImg4.jpg"
    },
  ];
};

createList.prototype = {
  addEvent: function(obj) {
    this.events.push(obj);
  },
  /*retrieveEvent: function() {

  }*/
//};

/*var meetUpEvents = new createList();

if(meetUpEvents.events.length == 0) {
  document.querySelector(".cardList").style.display = "none";
  alert("No active meetUp events shown");
}
else {
    for(var i = 0; i < meetUpEvents.events.length; i++) {
      var div1 = document.createElement("DIV");
      var attr1 = document.createAttribute("onclick");
      attr1.value = "modalbox(" + i + ");";
      var attr2 = document.createAttribute("class");
      attr2.value = "card";
      div1.setAttributeNode(attr1);
      div1.setAttributeNode(attr2);
      document.querySelector(".cardList").appendChild(div1);
    
      var img = document.createElement("IMG");
      var attr3 = document.createAttribute("src");
      attr3.value = meetUpEvents.events[i].image;
      img.setAttributeNode(attr3);
      div1.appendChild(img);

      var span = document.createElement("SPAN");
      var attr4 = document.createAttribute("class");
      attr4.value = "plus";
      span.setAttributeNode(attr4);
      div1.appendChild(span);
      document.querySelector(".plus").innerHTML = "+";

      var div2 = document.createElement("DIV");
      var attr5 = document.createAttribute("class");
      attr5.value = "container";
      div2.setAttributeNode(attr5);
      div1.appendChild(div2);

      var h4 = document.createElement("H4");
      h4.innerHTML = meetUpEvents.events[i].eventName;
      div2.appendChild(h4);
    }
}

function eventsList(obj) {
  meetUpEvents.addEvent(obj);
}

function modalbox(i) {
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  document.querySelector('#modalEventName').innerHTML = meetUpEvents.events[i].eventName;
  document.querySelector('#modalEventLocation').innerHTML = meetUpEvents.events[i].Location;
  document.querySelector('#modalEventText').innerHTML = meetUpEvents.events[i].text;
  document.querySelector('#modalEventHost').innerHTML = "Hosted by: " + meetUpEvents.events[i].HostName + '<br><br>  <a onclick="pageLoad(' + i + ')" href="file:///Users/alexandernageswaran/Documents/Hema/udacity/Meetup%20Event%20Planner/eventPage.html"> more...</a>';

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }

}

// eventPage.html
function pageLoad(i) {
  document.querySelector("#pageLocation").childNodes[0].innerHTML = meetUpEvents.events[i].Location[0];
   
}*/


/* find an event */


$(document).ready(function() {

  var eventArray = {
    "events": [
      {
        "eventName": "South Bay Art",
        "eventType": "Art",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/art1.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Art",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/art2.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Art",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/art3.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Art",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/art4.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Hiking",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/hike1.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Hiking",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/hike2.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Hiking",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/hike3.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Hiking",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/hike4.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Health",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/health1.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Health",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/health2.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Health",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/health3.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Health",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/health4.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Tech",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/tech1.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Tech",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/tech2.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Tech",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/tech3.jpg"
      },
      {
        "eventName": "South Bay Art",
        "eventType": "Tech",
        "hostName": "Jennifer",
        "phoneNumber": "555-555-5555",
        "eAddress": "jeniffer@gmail.com",
        "companyName": "",
        "startTime": "5 Jun 2016 @ 3:30 PM",
        "endTime": "5 Jun 2016 @ 5:30 PM",
        "location": ["San Pedro Square Market", "87 North street", "San Jose", "CA"],
        "description": "This is a joint event organized by Founders Floor and Lifograph. Food, beer and wine are provided. You must purchase a ticket to attend",
        "image": "images/tech4.jpg"
      },
    ]
  }


  /* Event Page */

  function getEventDetails(f) {
    console.log(f);
    var collection = [];
    var img = '<img src="' + f.image + '"/>';
    var div1 = '<div class="event-info">';
    collection.push(img, div1);
    var h1 = '<h1>' + f.eventName + '</h1>';
    var div2 = '<div class="event-content">';
    collection.push(h1,div2);
    var span = '<span>' + f.location + '</span>';
    var time = '<h4>' + f.StartTime + 'to' + f.EndTime + '</h4>';
    var desc = '<p>' + f.description + '</p>';
    var host = '<h3>Organized By: ' + f.hostName + '</h3>';
    collection.push(span,time,desc,host);
    $('.event-detail').append(collection.join(''));
  }

  /* create the list of events */

  var ul = '<ul class="meetup-list"></ul>';
  $('.meetups').append(ul);
  var collection = [];
  $.each(eventArray.events, function(i, f) {
    var list = '<li class="' + f.eventType + '">';
    var aTag = '<a class="meetup" onClick="getEventDetails(' + f + ');" href="file:///Users/alexandernageswaran/Documents/Hema/udacity/Meetup%20Event%20Planner/eventPage.html">';
    var img = '<img src="' + f.image + '"/>';
    var span = '<span class="text"><i>' + f.eventName + '<br>' + f.eventType + '</i></span></a></li>';
    collection.push(list,aTag,img,span);
  });
  $('.meetup-list').append(collection.join(''));

  /* search bar operation */

  var type = document.getElementsByName('eventlist')[0];
  var items = document.querySelectorAll(".meetup-list li");
  var clearable = document.querySelector('.clearable');
  console.log(type);
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



