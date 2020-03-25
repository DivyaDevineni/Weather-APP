import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import { googleMapsKey } from "../config";

const mapStyles = {
  width: "50%",
  height: ""
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.stores = [
      {
        latitude: 58.4374,
        longitude: -129.9994,
        title: "Dease lake",
        cityCode: "bc-14"
      },
      {
        latitude: 58.805,
        longitude: -122.6972,
        title: "Fort Nelson",
        cityCode: "bc-83"
      },
      {
        latitude: 54.5182,
        longitude: -128.6032,
        title: "Terrace",
        cityCode: "bc-80"
      },
      {
        latitude: 53.9171,
        longitude: -122.7497,
        title: "Prince George",
        cityCode: "bc-79"
      },
      {
        latitude: 50.1163,
        longitude: -122.9574,
        title: "Whistler",
        cityCode: "bc-86"
      },
      {
        latitude: 50.9981,
        longitude: -118.1957,
        title: "Revelstoke",
        cityCode: "bc-65"
      },
      {
        latitude: 49.0955,
        longitude: -116.5135,
        title: "Creston",
        cityCode: "bc-26"
      }
    ];
    this.state = {
      activeCityCode: "bc-79"
    };
  }

  displayMarkers = () => {
    return this.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          title={store.title}
          //   label={store.title}
          onClick={() => {
            this.setState({ activeCityCode: store.cityCode });
          }}
        />
      );
    });
  };

  displayclimate = cityCode => {
    var wheatherdataUrl =
      "https://weather.gc.ca/wxlink/wxlink.html?cityCode=" +
      cityCode +
      "&amp;lang=e";
    return (
      <div>
        <iframe
          title="Environment Canada Weather"
          width="287px"
          height="191px"
          src={wheatherdataUrl}
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </div>
    );
  };

  render() {
    console.log(googleMapsKey);
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Map
            google={this.props.google}
            zoom={6}
            style={mapStyles}
            initialCenter={{ lat: 53.9171, lng: -122.7497 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
        <div style={{ width: "50%", zIndex: "1" }}>
          <p>Click on the weather links for more details</p>
          {this.displayclimate(this.state.activeCityCode)}
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper(props => ({
  apiKey: googleMapsKey
}))(MapContainer);
