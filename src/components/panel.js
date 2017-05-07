import React from 'react';

export class Panel extends React.Component{
  render(){
    let headingClass = 'panel panel-default';

    if(this.props.headingStyle){
      headingClass = 'panel panel-'+this.props.headingStyle;
    }

    return(
      <div className={headingClass}>
        <div className='panel-heading'>
          {this.props.heading}
        </div>
        <div className='panel-body'>
          {this.props.body}
        </div>
      </div>
    )
  }
}
