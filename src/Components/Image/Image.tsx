import * as React from 'react';
import './Image.css';

class Image extends React.Component<any, any>  {
  constructor(props: any) {
    super(props); 
    this.state = this.props.image;
  }
  public render() {
    return (
      <image>
        <img className="image" src={this.state.source} />
      </image>

    )
  }
}


export default Image;