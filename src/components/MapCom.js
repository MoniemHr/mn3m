import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '95%'  , padding: '5px',margin:'10px', borderStyle:'solid',borderWidth:"3px",borderColor:'#C4E2C0'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCEHsfDVACuHrymlXc8pjjX1sHP8bYLjNI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom} 
          
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;