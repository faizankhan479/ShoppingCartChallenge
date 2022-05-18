import React, { Component } from "react";

export class DetailsThumb extends Component {
  render() {
    const { images, tab, myRef, colors } = this.props;
    return (
      <div className="colors" ref={myRef}>
        {colors.map((color, index) => (
          <button
            style={{ background: color }}
            key={index}
            onClick={() => tab(index)}
          ></button>
        ))}
      </div>
    );
  }
}

export default DetailsThumb;
