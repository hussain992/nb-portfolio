import React, { Component } from 'react';


class Image extends Component {
  static defaultProps = {
    style:{},
    alt: '',
    className: '',
  }
  constructor(props){
    super(props);
  }

  getImagePath(src){
    const { path } = this.props;
    let imgPath = src;
    if (path === 'LOCAL') {
      imgPath = require('../assets/img/' + src);
    }
    return imgPath;
  }
  render() {
    return (
      <img 
        src={this.getImagePath(this.props.src)} 
        alt={this.props.alt}
        width={this.props.width}
        height={this.props.height}
        style={this.props.style ? this.props.style : null}
        className={this.props.className}
      />

    )
  }
}
export default Image;
