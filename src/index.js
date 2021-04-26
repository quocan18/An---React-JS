import React from "react";
import ReactDOM from "react-dom";

// React components
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return  <h2>Đây là cái xe màu {this.state.color}</h2>; //JSX Rules
//   }
// }

//React Props: giống như function trong JS và thuộc tính trong HTML
// Props: là các arguments được truyền vào React Components
// Props được truyền vào components qua các thuộc tính HTML
// class Car extends React.Component {
//   render() {
//     return (
//       <h1>
//         Đây là chiếc xe {this.props.brand.model} của {this.props.brand.name}
//       </h1>
//     );
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const car_info = { name: "BMW", model: "5 series" };
//     return (
//       <div>
//         <h1>Xe gì nhìn ngầu nhất?</h1>
//         <Car brand={car_info} />
//       </div>
//     );
//   }
// }

// React State: các thành phần của React đều có một state tích hợp sẵn
// State: là nơi lưu giữ các thuôc tính thuộc về component
// State thay đổi thì component sẽ được render lại
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     // Tạo một state
//     this.state = {
//       brand: "BMW",
//       model: "7 series",
//       color: "white",
//       year: "2021",
//     };
//   }

// Thay đổi state
// Luôn sử dụng setState để thay đổi state
// nó sẽ đảm bảo rằng component biết rằng nó được update
// và gọi phương thức render và tất cả các phương thức lifecycle
//   change_color = () => {
//     this.setState({ color: "đỏ" });
//   };

//   // Sử dụng state
//   render() {
//     return (
//       <div>
//         <h1>Xe của An</h1>
//         <strong>
//           Nó là chiếc xe {this.state.model} có màu {this.state.color}
//           của {this.state.brand} được sản xuất năm {this.state.year}
//         </strong>

//         <button type="button" onClick={this.change_color}>
//           Muốn đổi màu bấm đây
//         </button>
//       </div>
//     );
//   }
// }

// React lifecycle có một vòng đời gồm 3 giai đoạn:
// Giai đoạn 1: Mounting theo trình tự:
// constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
// Giai đoạn 2: Updating
// Giai đoạn 3: Unmounting

class Header extends React.Component {
  constructor(props) {
    super(props); // luôn luôn bắt đầu bằng super vì các phần tử con sẽ thừa hưởng từ đó
    // Tạo một state
    this.state = {
      brand: "BMW",
      model: "7 series",
      color: "white",
      year: "2021",
    };
  }

  //Thay đổi thuộc tính của một state theo thuộc tính mới
  static getDerivedStateFromProps(props, state) {
    return { color: props.favcol };
  }

  render() {
    return (
      <div>
        <h1>Xe này có màu là {this.state.color}</h1>
      </div>
    );
  }

  // Chạy câu lệnh cần component có sẵn trong DOM
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favcolor: "vàng" });
    }, 1000);
  }
}

//###
// React có event tương tự như HTML
// React có xử lý trong ngoặc nhọn
class Football extends React.Component {
  shoot = () => {
    alert("Đá hay lắm");
  };
  render() {
    return <button onClick={this.shoot}>Làm phát - _ -</button>;
  }
}
ReactDOM.render(<Football />, document.getElementById("root"));
ReactDOM.render(<Header favcol="vàng" />, document.getElementById("root"));
// render được dùng để thay đổi thuộc tính html dựa theo đối tượng
