import { useState, useEffect } from "react";


const Price = (props) => {

  
  //state to hold the stock data
  const [stock, setStock] = useState(null);

  //function to fetch stock data
  const getStock = async () => {
    const response = await fetch();
    const data = await response.jsx();
    setStock(data);
  };

  // useEffect to run getStock when component mounts
  useEffect(() => {
    getStock();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock}
        </h1>
        
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if stock has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading();
};

export default Price;
