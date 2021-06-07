import React from 'react'
import axios from 'axios'

axios.get('https://discover.search.hereapi.com/v1/discover?at=52.5228,13.4124&q=petrol+station&apiKey=exkvVrXw8hN4lZtiNCdl5nCsmJ3Z_X2SX43M1i0G4po').then((response) =>{
    console.log(response);
})

export class SearchHandler extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default SearchHandler

