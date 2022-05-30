import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../../../hooks/useProductDetail";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/order", data)
      .then(function (response) {
        console.log(response);
        const { data } = response;
        if (data.insertedId) {
          toast("Order successfully Placed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(data);
  };

  return (
    <div>
      <div className="py-12">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="flex flex-row">
                <h2 className="text-3xl font-semibold">Jahan</h2>
                <h2 className="text-3xl text-green-400 font-semibold">Group</h2>
              </div>
              <div className="flex flex-row pt-2 text-xs pt-6 pb-5">
                <span className="font-bold">Information</span>
                <small className="text-gray-400 ml-1">-</small>
                <span className="text-gray-400 ml-1">Shopping</span>
                <small className="text-gray-400 ml-1">-</small>
                <span className="text-gray-400 ml-1">Payment</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span>Product Info</span>
                <div className="relative">
                  <input
                    type="text"
                    {...register("productName")}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    value={product.name}
                  />
                  <input
                    {...register("productId")}
                    value={productId}
                    className="hidden"
                  />
                </div>
                <div className="relative pb-5">
                  <input
                    {...register("quantity", { min: 18, max: 99 })}
                    type="number"
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Product Quantity min 5 max 55"
                  />
                </div>

                <span>Customer Information</span>
                <div className="relative pb-5">
                  <input
                    {...register("email")}
                    type="text"
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="E-mail"
                  />
                  <span className="absolute text-blue-500 right-2 top-4 font-medium text-sm">
                    Log out
                  </span>
                </div>
                <span>Shipping Address</span>
                <div className="grid md:grid-cols-2 md:gap-2">
                  <input
                    {...register("firstName")}
                    type="text"
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="First name*"
                  />
                  <input
                    type="text"
                    {...register("lastName")}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Last name*"
                  />
                </div>
                <input
                  type="text"
                  {...register("address")}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Address*"
                />
                <input
                  type="text"
                  {...register("apartment")}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Apartment, suite, etc. (optional)"
                />
                <div className="grid md:grid-cols-3 md:gap-2">
                  <input
                    type="text"
                    {...register("zipcode")}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="Zipcode*"
                  />
                  <input
                    type="text"
                    {...register("city")}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="City*"
                  />
                  <input
                    type="text"
                    {...register("district")}
                    className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                    placeholder="District*"
                  />
                </div>
                <input
                  type="text"
                  {...register("phone")}
                  className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm"
                  placeholder="Phone Number*"
                />
                <div className="flex justify-between items-center pt-2">
                  <a href="/" className="text-blue-500 text-xs font-medium">
                    Return to Shopping
                  </a>
                  <button
                    type="submit"
                    className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white"
                  >
                    Continue to Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
