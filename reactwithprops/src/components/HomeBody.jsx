import React from 'react';

class HomeBody extends React.Component {
    render()
      {
          return( 
          <>
            <div>
              <img src={'Images/img2.jpg'} alt="img1" style={{ width: '100%',  height: '500px',}}></img>
            </div>
            <div>
                <h1 style={{textAlign:"center"}}>This is the Example of React js </h1>
                <h1 style={{textAlign:"center"}}>I have a {this.props.brand.model} car, which belogs to {this.props.brand.name} Company. </h1>
            </div>
         </>
         );
       
      }
    
}

export default HomeBody;