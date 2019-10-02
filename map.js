// Определяем переменную map
window.onload = function() {

      initMap();

}


  var map;


  // Функция initMap которая отрисует карту на странице
  function initMap() {



    var myLatLng1 = {lat: 40.698538, lng: -74.140742}; //
      var myLatLng2 = {lat: 34.202102, lng: -118.468940}; //
      var myLatLng3 = {lat: 42.308489, lng: -71.031055}; //
      var myLatLng4 = {lat: 42.390992, lng: -83.217684}; //
      var arrLatLng = [myLatLng1, myLatLng2, myLatLng3,myLatLng4]; // массив из адресов
      var i = 0;

      function addMarker(properties){
        var marker = new google.maps.Marker({
             position: properties.coordinates,
             map: myMap
             //icon: properties.image
             });

             if(properties.image)
             {
               marker.setIcon(properties.image);
             }

             if(properties.info)
             {
               var InfoWindow = new google.maps.InfoWindow({
                 content: properties.info
               });

               marker.addListener('click',function(){
                 InfoWindow.open(myMap, marker);
             })

            }
}
//Функция
/*  function changeCenter(n){
//i = (i + 1) % arrLatLng.length;
for(let i=0; i<arrLatlng.length;i++)
options.setCenter(arrLatLng[i]);
}
//i = (i + 1) % arrLatLng.length;
for(let i=0; i<arrLatlng.length;i++)
options.setCenter(arrLatLng[i]);
}
*/
var markers = [
  {
    coordinates: myLatLng1,
    image: 'images/marker.png',
    info: '<h3>New York</h3><p>2005 Stokes Isle Apt. 896,<br/>New York 10010</p><h5><img src="images/clock.png"></img>Work Schedule</h5><p><b>Mon - Sat</b>: 11:00-19:00, <b>Sun</b>: 11:00-16:00,</p><h5><img src="images/phone.png"></img>Head Office</h5><p>(0043) 568 456 902<br/>(0043) 568 456 902</p><h5><img src="images/letter.png"></img>Head Office</h5><p>hello@pad.architecture<br/>support@pad.architecture</p>'
  },

  {
     coordinates: myLatLng2,
     image: 'images/marker2.png',
     info: '<h3>Los Angeles</h3><p>2005 Stokes Isle Apt. 896,<br/>New York 10010</p><h5><img src="images/clock.png"></img>Work Schedule</h5><p><b>Mon - Sat</b>: 11:00-19:00, <b>Sun</b>: 11:00-16:00,</p><h5><img src="images/phone.png"></img>Head Office</h5><p>(0043) 568 456 902<br/>(0043) 568 456 902</p><h5><img src="images/letter.png"></img>Head Office</h5><p>hello@pad.architecture<br/>support@pad.architecture</p>'
   },

   {
     coordinates: myLatLng3,
     image: 'images/marker2.png',
     info: '<h3>Boston</h3><p>2005 Stokes Isle Apt. 896,<br/>New York 10010</p><h5><img src="images/clock.png"></img>Work Schedule</h5><p><b>Mon - Sat</b>: 11:00-19:00, <b>Sun</b>: 11:00-16:00,</p><h5><img src="images/phone.png"></img>Head Office</h5><p>(0043) 568 456 902<br/>(0043) 568 456 902</p><h5><img src="images/letter.png"></img>Head Office</h5><p>hello@pad.architecture<br/>support@pad.architecture</p>'
   },

   {
     coordinates: myLatLng4,
     image: 'images/marker2.png',
     info: '<h3>Detroit</h3><p>2005 Stokes Isle Apt. 896,<br/>New York 10010</p><h5><img src="images/clock.png"></img>Work Schedule</h5><p><b>Mon - Sat</b>: 11:00-19:00, <b>Sun</b>: 11:00-16:00,</p><h5><img src="images/phone.png"></img>Head Office</h5><p>(0043) 568 456 902<br/>(0043) 568 456 902</p><h5><img src="images/letter.png"></img>Head Office</h5><p>hello@pad.architecture<br/>support@pad.architecture</p>'
   }

];



function changeCenter(n){
var btn = document.getElementsByClassName('btn');
var active =  document.getElementsByClassName('active-btn');
document.getElementsByClassName("customInfoWindow")[0].innerHTML = markers[n].info;
    if((btn && active) == true){

        this.options.center = arrLatLng[n];
          addMarker(markers[n]);
  }

var element = document.getElementById('map');

var options =  {
   zoom: 14,
   center: arrLatLng[n],//{lat: 40.698538, lng: -74.140742},
   /*styles: 'styles/map.js'*/
   styles: [
{
"featureType": "all",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
{
    "saturation": 36
},
{
    "color": "#333333"
},
{
    "lightness": 40
}
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
{
    "visibility": "on"
},
{
    "color": "#ffffff"
},
{
    "lightness": 16
}
]
},
{
"featureType": "all",
"elementType": "labels.icon",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#fefefe"
},
{
    "lightness": 20
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#fefefe"
},
{
    "lightness": 17
},
{
    "weight": 1.2
}
]
},
{
"featureType": "administrative",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.country",
"elementType": "geometry",
"stylers": [
{
    "visibility": "on"
},
{
    "gamma": "0.00"
}
]
},
{
"featureType": "administrative.country",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#b0b0b0"
},
{
    "visibility": "on"
}
]
},
{
"featureType": "administrative.country",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#dfdcdc"
}
]
},
{
"featureType": "administrative.province",
"elementType": "geometry",
"stylers": [
{
    "visibility": "simplified"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "geometry",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.locality",
"elementType": "geometry.stroke",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative.neighborhood",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
{
    "color": "#f5f5f5"
},
{
    "lightness": 20
}
]
},
{
"featureType": "landscape.man_made",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "landscape.man_made",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "landscape.natural",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
{
    "color": "#f5f5f5"
},
{
    "lightness": 21
}
]
},
{
"featureType": "poi",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
{
    "color": "#dedede"
},
{
    "lightness": 21
},
{
    "visibility": "off"
}
]
},
{
"featureType": "road.highway",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#ffffff"
},
{
    "lightness": 17
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#ffffff"
},
{
    "lightness": 29
},
{
    "weight": 0.2
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
    "color": "#ffffff"
},
{
    "lightness": 18
}
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
{
    "color": "#ffffff"
},
{
    "lightness": 16
}
]
},
{
"featureType": "road.local",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "transit",
"elementType": "geometry",
"stylers": [
{
    "color": "#f2f2f2"
},
{
    "lightness": 19
}
]
},
{
"featureType": "transit",
"elementType": "labels",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "transit",
"elementType": "labels.text",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
    "color": "#cacaca"
},
{
    "lightness": 17
},
{
    "visibility": "simplified"
}
]
}
]
};


 var myMap = new google.maps.Map(element,options);
 for (var i = 0; i <markers.length; i++){
   addMarker(markers[i]);
 }
}

//addMarker(properties);
/*
if(n == 2){
 this.options.center = arrLatLng2;
}
if(n == 3){
 this.options.center = arrLatLng3;
}
if(n == 4){
 this.options.center = arrLatLng4;
}*/
//return arrLatLng[n];


[...document.getElementsByClassName('btn')].forEach((f, i) => f.onclick = () => changeCenter(i));



      var element = document.getElementById('map');
      var options =  {
          zoom: 14,
          center: arrLatLng[i],//{lat: 40.698538, lng: -74.140742},
          /*styles: 'styles/map.js'*/
          styles: [
{
   "featureType": "all",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "all",
   "elementType": "labels.text.fill",
   "stylers": [
       {
           "saturation": 36
       },
       {
           "color": "#333333"
       },
       {
           "lightness": 40
       }
   ]
},
{
   "featureType": "all",
   "elementType": "labels.text.stroke",
   "stylers": [
       {
           "visibility": "on"
       },
       {
           "color": "#ffffff"
       },
       {
           "lightness": 16
       }
   ]
},
{
   "featureType": "all",
   "elementType": "labels.icon",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "administrative",
   "elementType": "geometry.fill",
   "stylers": [
       {
           "color": "#fefefe"
       },
       {
           "lightness": 20
       }
   ]
},
{
   "featureType": "administrative",
   "elementType": "geometry.stroke",
   "stylers": [
       {
           "color": "#fefefe"
       },
       {
           "lightness": 17
       },
       {
           "weight": 1.2
       }
   ]
},
{
   "featureType": "administrative",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "administrative.country",
   "elementType": "geometry",
   "stylers": [
       {
           "visibility": "on"
       },
       {
           "gamma": "0.00"
       }
   ]
},
{
   "featureType": "administrative.country",
   "elementType": "geometry.fill",
   "stylers": [
       {
           "color": "#b0b0b0"
       },
       {
           "visibility": "on"
       }
   ]
},
{
   "featureType": "administrative.country",
   "elementType": "geometry.stroke",
   "stylers": [
       {
           "color": "#dfdcdc"
       }
   ]
},
{
   "featureType": "administrative.province",
   "elementType": "geometry",
   "stylers": [
       {
           "visibility": "simplified"
       }
   ]
},
{
   "featureType": "administrative.locality",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "administrative.locality",
   "elementType": "geometry",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "administrative.locality",
   "elementType": "geometry.stroke",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "administrative.neighborhood",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "landscape",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#f5f5f5"
       },
       {
           "lightness": 20
       }
   ]
},
{
   "featureType": "landscape.man_made",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "landscape.man_made",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "landscape.natural",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "poi",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "poi",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#f5f5f5"
       },
       {
           "lightness": 21
       }
   ]
},
{
   "featureType": "poi",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "poi.park",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#dedede"
       },
       {
           "lightness": 21
       },
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "road.highway",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "road.highway",
   "elementType": "geometry.fill",
   "stylers": [
       {
           "color": "#ffffff"
       },
       {
           "lightness": 17
       }
   ]
},
{
   "featureType": "road.highway",
   "elementType": "geometry.stroke",
   "stylers": [
       {
           "color": "#ffffff"
       },
       {
           "lightness": 29
       },
       {
           "weight": 0.2
       }
   ]
},
{
   "featureType": "road.arterial",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#ffffff"
       },
       {
           "lightness": 18
       }
   ]
},
{
   "featureType": "road.local",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#ffffff"
       },
       {
           "lightness": 16
       }
   ]
},
{
   "featureType": "road.local",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "transit",
   "elementType": "all",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "transit",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#f2f2f2"
       },
       {
           "lightness": 19
       }
   ]
},
{
   "featureType": "transit",
   "elementType": "labels",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "transit",
   "elementType": "labels.text",
   "stylers": [
       {
           "visibility": "off"
       }
   ]
},
{
   "featureType": "water",
   "elementType": "geometry",
   "stylers": [
       {
           "color": "#cacaca"
       },
       {
           "lightness": 17
       },
       {
           "visibility": "simplified"
       }
   ]
}
]
       };

      var myMap = new google.maps.Map(element,options);
      for (var i = 0; i <markers.length; i++){
        addMarker(markers[i]);
      }

  INFWOverlay.prototype = new google.maps.OverlayView();

/**
* Custom Infoview constructor
*/
function INFWOverlay(content, map, point, width) {
// Инициализация
this.width_ = width;
this.point_ = point;
this.content_ = content;
this.map_ = map;

// переменная для хранения DOM контейнера
this.div_ = null;

// подключим overlay к карте
this.setMap(map);
}

/**
* Операции при добавлении overlay на карту
*/
INFWOverlay.prototype.onAdd = function() {
var CIW = this;

var div = document.createElement('div');
div.style.border = 'none';
div.style.borderWidth = '0px';
div.style.position = 'absolute';
// здесь я задал нужный мне класс, для которого буду
// затем создавать каскадные стили
div.classList.add('customInfoWindow');
// добавим HTML контент
div.innerHTML = CIW.content_;
// займемся созданием кнопки Close (крестик в углу)
var divClose = document.createElement('div');
divClose.classList.add('close');
divClose.addEventListener('click', function (e) {
 CIW.toggle();
});
// добавим крестик в окно
div.appendChild(divClose);
CIW.div_ = div;

// добавим элемент в набор pane overlayimage нашей карты
var panes = CIW.getPanes();
panes.overlayImage.appendChild(CIW.div_);
};

/**
* эта функция позволяет позиционировать окно на карте
* во время прорисовки
*/
INFWOverlay.prototype.draw = function() {
// получим доступ к т.н. проекции окна
var overlayProjection = this.getProjection();

// проекция позволяет нам вычислить позицию окна
// относительно документа, переводя гео координаты
// в x,y канваса на экране
var sw = overlayProjection.fromLatLngToDivPixel(this.point_);
// т.к я решил показывать треугольник стрелки справа, то окно я
// сдвину вправо и немного вверх от точки позиционирования
// Треугольник стрелки имеет размеры в моём случае - 5x10 точек.
var div = this.div_;
div.style.left = (sw.x - this.width_ - 5) + 'px';
div.style.top = (sw.y - 50) + 'px';
div.style.width = (this.width_) + 'px';
div.style.height = 'auto';
};

/**
* Далее идут функции реализующие удаление, скрытие окна
* они не требуют подробного описания
* и не отличаются от примера в руководстве от Гугл.
*/
INFWOverlay.prototype.onRemove = function() {
this.div_.parentNode.removeChild(this.div_);
};

// Set the visibility to 'hidden' or 'visible'.
INFWOverlay.prototype.hide = function() {
if (this.div_) {
 // The visibility property must be a string enclosed in quotes.
 this.div_.style.visibility = 'hidden';
}
};

INFWOverlay.prototype.show = function() {
if (this.div_) {
 this.div_.style.visibility = 'visible';
}
};

INFWOverlay.prototype.toggle = function() {
if (this.div_) {
 if (this.div_.style.visibility === 'hidden') {
   this.show();
 } else {
   this.hide();
 }
}
};

// Detach the map from the DOM via toggleDOM().
// Note that if we later reattach the map, it will be visible again,
// because the containing <div> is recreated in the overlay's onAdd() method.
INFWOverlay.prototype.toggleDOM = function() {
if (this.getMap()) {
 // Note: setMap(null) calls OverlayView.onRemove()
 this.setMap(null);
} else {
this.setMap(this.map_);
}
};

}
