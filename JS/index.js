import React from "react";
import ReactDOM from "react-dom/client";

function Book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: 150,
    height: 150,
    alt: "Book Image",
  });
  const h4 = React.createElement("h4", null, "Price: " + props.price + "/-");
  const child = React.createElement(
    "div",
    { className: "card", style: styles.card },
    image,
    h4
  );
  return child;
}

const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
    price: 235,
  },
  {
    image:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
    price: 245,
  },
  {
    image:
      "https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UF1000,1000_QL80_.jpg",
    price: 300,
  },
];

function App() {
  const heading = React.createElement("h2", null, "📚 My Book Store");
  const bookElements = books.map((b, index) =>
    React.createElement(Book, { key: index, image: b.image, price: b.price })
  );

  return React.createElement(
    "div",
    { style: styles.container },
    heading,
    ...bookElements
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
