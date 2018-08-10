import * as React from 'react';
import './App.css';

import Image from './Components/Image/Image'

class App extends React.Component<any, any>  {

  constructor(props: any) {
		super(props); 
    this.state = {
      imageArray: [
        {
          id: 1, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0001_DSCF1020.jpg'),
          title: 'Little Case', 
        },
        {
          id: 2, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0002_DSCF1016.jpg'),
          title: 'Installation', 
        },
        {
          id: 3, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0001_DSCF1286.jpg'),
          title: 'Installation', 
        },
        {
          id: 4, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0006_DSCF1006.jpg'),
          title: 'Installation', 
        },
        {
          id: 5, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0013_DSCF1139.jpg'),
          title: 'Installation', 
        },
        {
          id: 6, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0010_DSCF1163.jpg'),
          title: 'Installation', 
        },
        {
          id: 7, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0024_DSCF0848.jpg'),
          title: 'Installation', 
        },
        {
          id: 8, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/California_0033_DSCF0799.jpg'),
          title: 'Installation', 
        },
        {
          id: 9, 
          info: 'XT2 | XF 18-55mm f2.8 | 1/1000 sec | ISO 200 ',
          source: require('./Assets/Images/DSCF2260.jpg'),
          title: 'Installation', 
        },
      ],
      selectedImage: null,
    }
    this.selectImage = this.selectImage.bind(this);
  }

  public selectImage(id) {
    this.setState({...this.state, selectedId: id})
  }
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Enjoy the snaps </h1>
        </header>
        <div className="imageContainer">
          {this.state.imageArray.map((image) =>
            <Image 
              image={image}
              key={image.id}
              selectImage={this.selectImage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
