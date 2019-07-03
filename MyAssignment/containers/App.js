import React, { Component } from "react";
import axios from "axios";
import LeftSidebar from "./../components/LeftSidebar";
import TableRecords from "./../components/TableRecords";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      currentAddress: null,
      sidebar: false
    };
    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const data = response.data;
        this.setState({ data });
      })
      .catch(error => {
       document.write(error);
      });
  }

  openSidebar(address) {
    this.setState({ currentAddress: address, sidebar: true });
  }

  validateZipCode(zipCode){
      const pattern = /^[0-9]{5}(?:-[0-9]{4})?$/;
      let zipArray = zipCode.split("-");
      let firstPart = Number(zipArray[0]);
      let secondPart = Number(zipArray[1]);
      return pattern.test(firstPart + "-" + secondPart) ? true : false;
  }
  
  closeSidebar() {
    this.setState({ sidebar: false });
  }
  
  render() {
    return (
      <div>
        {this.state.currentAddress && this.state.sidebar && (
            <LeftSidebar userAddress={this.state.currentAddress} closeSidebar={this.closeSidebar}/>
        )}
		{/* component for display All user record */}
        {this.state.data && (
          <TableRecords
            tableList={this.state.data}
            validateZipCode={this.validateZipCode}
            openSidebar={this.openSidebar} 
            />
        )}
      </div>
    );
  }
}

export default MyApp;