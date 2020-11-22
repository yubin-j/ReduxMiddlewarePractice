import React from 'react';
import GoogleMapReact from 'google-map-react';

const API_KEY='';

export default (props) => {
    return (
        <div style={{height:'100%', width:'200px'}}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:API_KEY}}
                defaultCenter={{ lat: props.lat, lng: props.lon }}
                defaultZoom={12} 
            />
        </div>
    );
}