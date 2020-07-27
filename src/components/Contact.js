import React from 'react';
import './Contact.css';

class Contact extends React.Component{
      constructor(props) {
      super(props);
      this.state = {
        online: false
      };
    }
    render() {
      return ( 
        <div className="Contact">    
          <img className="avatar" src={this.props.image} alt={this.props.name}/>
            <div>
              <h2 className="name">
                {this.props.name}
              </h2>
            <div className="status" onClick={event => {
              const moveStatus = !this.state.online;
              this.setState({ online: moveStatus });
      }}>

            <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text" >
                    {this.state.online ? 'online' : 'offline'}
                    </p>
                </div>	                
          </div>	          
      </div>	      
    )};	  
  }	 






  export default Contact;