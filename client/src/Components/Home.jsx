import React, { Component } from 'react';
import MapContainer from './MapContainer';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            button: {
              position: 'absolute',
              top: '50px'
            }
          }
        return (
            <div>
            <MapContainer />
            <button type="button" className="btn btn-primary" type="button" style={styles.button} onClick={this.props.handleClick}>Create an event!</button>
            </div>
        )
    }
}
export default Home;