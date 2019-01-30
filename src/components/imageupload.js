import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import  { Redirect } from 'react-router-dom'
import './imageupload.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class imagespace extends Component{
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    gotoNext(){
        console.log("herer");
        // return (<Redirect to="/show" />);
    }

    render(){
        return(
            <div>
            <div className='imageuploadbox'>
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
            </div>
            <div className='imagemsg'>
                <p>Please share your experience with us to serve you better</p>
            </div>
            {/* <Router> */}
            <div className='submitbuttonCover'>
                <input type='button' className='submitButton' value='SUBMIT' onClick={this.gotoNext} ></input>
            </div>
            {/* </Router> */}
            </div>
        );
    }
}
export default imagespace;