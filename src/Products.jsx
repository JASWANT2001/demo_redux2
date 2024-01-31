import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "./Reducers/Product-reducers";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);
  const getData = async () => {
    const productData = await axios.get(
      "https://659ca3b9633f9aee7907c3bc.mockapi.io/products"
    );
    dispatch(setproducts(productData.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.products.map((element, index) => {
        return (
          <div key={index}>
            <div class="col mb-5">
              <div class="card h-100">
                <img
                  class="card-img-top"
                  src={element.image}
                  alt="..."
                  style={{ height: "200px" }}
                />

                <div class="card-body p-4">
                  <div class="text-center">
                    <h5 class="fw-bolder">{element.name} </h5>
                    {element.price}
                  </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
        );
      })}
    </>
  );
}

export default Products;
