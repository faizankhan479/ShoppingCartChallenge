import React from "react";
import "./App.css";

// import Colors from "./components/Colors";
import DetailsThumb from "./components/DetailsThumb";

class App extends React.Component {
  state = {
    disable: true,
    products: [
      {
        _id: "1",
        title: [
          "Item Unavailable",
          "Item Unavailable",
          "Range Rover",
          "Item Unavailable",
        ],
        src: [
          require("./Images/ItemUnavailable.jpg"),
          require("./Images/ItemUnavailable.jpg"),
          require("./Images/rangerover.jpg"),
          require("./Images/ItemUnavailable.jpg"),
        ],
        enginetype: [
          "Item unavailable for black",
          "Item unavailable for red",
          "2017",
          "Item unavailable for blue",
        ],
        specification: ["    ", "", "4 X 4", ""],
        price: ["            ", "          ", "£24500", "        "],
        petrolspecification: [
          "           ",
          "           ",
          "3.0L Diesel 258HP",
          "           ",
        ],
        colors: ["black", "red", "white", "blue"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;

    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
    this.state.disable = false;
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        <div className="row">
          <h2> Your Selection</h2>
        </div>

        {products.map((item) => (
          <div key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2> {item.title[index]}</h2>
              </div>

              <h3>
                {item.enginetype[index]} <br />
                {item.specification[index]}
                <br />
                {item.petrolspecification[index]}
                <br />
              </h3>

              <h2>
                <br />
                OTR Price
                <br />
                {item.price[index]}
              </h2>
              <br />

              <DetailsThumb
                images={item.src}
                colors={item.colors}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <div className="cart">
                <button
                  className="buy-button"
                  onClick={() => alert("Implement checkout")}
                  disabled={this.state.disable}
                >
                  <h1>Buy</h1>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
