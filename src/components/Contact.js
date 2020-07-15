import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

function Contact(props) {
    return (
      <div className="Contact">
        <img className="avatar" src={props.avatar} alt="avatar"/>
          <div>
                <h2 className="name">
                  {props.name} </h2>
                    
               
                <div className="status">
                    <div className={props.status ? "status-online" : "status-offline"}></div>
                    <p className="status-text">
                    {props.status ? 'online' : 'offline'}</p>
                        
                    
                </div>
          </div>
      </div>
    );
          
 
  }

  export default Contact;