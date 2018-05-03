require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//import Image JSON data
var ImageJSonArr = require('../data/imageData.json');


ImageJSonArr = (function(ImageArr){
  ImageArr.map(function(item,index,array){
    //imageUrl props Bind
    item.imageURL = require('../images/'+item.fileName);
    array[index] = item;
  });
  return ImageArr;
})(ImageJSonArr);

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="image-sec">
          </section>
          <nav className="controller-nav">
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
