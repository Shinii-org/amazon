import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  hasPrime,
  description,
  category,
  image,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      hasPrime,
      description,
      category,
      image,
    };
    // Push item into redux
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    //Remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 ">
      {/* Left */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle*/}
      <div className="col-span-3 mx-5 text-sm space-y-2 mt-3 ">
        <h1 className="font-semibold">{title}</h1>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon
                key={i}
                className="h-5 text-yellow-500"
                fill="#eab308"
              />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div className="flex items-center space-x-2 ">
            <img
              loading="lazy"
              className="w-12   "
              src="https://links.papareact.com/fdw"
              alt=""
            ></img>
            <p className="text-gray-500 text-xs">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        {/* Add btn */}
        <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button>
        {/* Remove btn */}
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
