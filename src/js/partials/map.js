// Определяем переменную map
window.onload = function() {

  initMap();

}


var map;

//
// // Функция initMap которая отрисует карту на странице
function initMap() {



  var myLatLng1 = {
    lat: 40.698538,
    lng: -74.140742
  }; //
  var myLatLng2 = {
    lat: 34.202102,
    lng: -118.468940
  }; //
  var myLatLng3 = {
    lat: 42.308489,
    lng: -71.031055
  }; //
  var myLatLng4 = {
    lat: 42.390992,
    lng: -83.217684
  }; //
  var arrLatLng = [myLatLng1, myLatLng2, myLatLng3, myLatLng4]; // массив из адресов
  var i = 0;

  function addMarker(properties) {
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap
      //icon: properties.image
    });

    if (properties.image) {
      marker.setIcon(properties.image);
    }

    if (properties.info) {
      var InfoWindow = new google.maps.InfoWindow({
        content: properties.info
      });

      marker.addListener('click', function() {
        InfoWindow.open(myMap, marker);
      })

    }
  }


  var markers = [{
      coordinates: myLatLng1,
      image: 'images/marker.png',
      info: '<h3>New York</h3>'
    },

    {
      coordinates: myLatLng2,
      image: 'images/marker2.png',
      info: '<h3>Los Angeles</h3>'
    },

    {
      coordinates: myLatLng3,
      image: 'images/marker2.png',
      info: '<h3>Boston</h3>'
    },

    {
      coordinates: myLatLng4,
      image: 'images/marker2.png',
      info: '<h3>Detroit</h3>'
    }

  ];



  function changeCenter(n) {
    var btn = document.getElementsByClassName('btn');
    var active = document.getElementsByClassName('active-btn');
    document.getElementsByClassName("customInfoWindow")[0].innerHTML = markers[n].info;
    if ((btn && active) == true) {

      this.options.center = arrLatLng[n];
      addMarker(markers[n]);
    }

    var element = document.getElementById('map');

    var options = {
      zoom: 14,
      center: arrLatLng[n]
    };


    var myMap = new google.maps.Map(element, options);
    for (var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
  }

  [...document.getElementsByClassName('btn')].forEach((f, i) => f.onclick = () => changeCenter(i));



  var element = document.getElementById('map');
  var options = {
    zoom: 14,
    center: arrLatLng[i]
  };

  var myMap = new google.maps.Map(element, options);
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }
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

// /**
// * Операции при добавлении overlay на карту
// */
INFWOverlay.prototype.onAdd = function() {
var CIW = this;

var div = document.createElement('div');
div.style.border = 'none';
div.style.borderWidth = '0px';
div.style.position = 'absolute';
здесь я задал нужный мне класс, для которого буду
затем создавать каскадные стили
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
// // т.к я решил показывать треугольник стрелки справа, то окно я
// // сдвину вправо и немного вверх от точки позиционирования
// // Треугольник стрелки имеет размеры в моём случае - 5x10 точек.
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

Set the visibility to 'hidden' or 'visible'.
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
