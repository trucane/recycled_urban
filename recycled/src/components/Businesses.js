import React from 'react';
import axios from 'axios';



export default class Businesses extends React.Component{

    state={
        businesses:[]
    }


    async componentDidMount(){
        try{

            const businesses = await axios.get('http://localhost:4000/business');
            this.setState({businesses:businesses.data})
        }catch(err){console.log(err)}
    }

    render(){
        const business = this.state.businesses;
        return (
            <div>
                {business.map(item =>
                    <div key={item._id} >{item.name}</div>
                )}
            </div>
        )
    }
    
}