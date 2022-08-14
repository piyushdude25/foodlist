import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "./Images/icon.png";
import { getProd } from "./Redux/Action";


export const Page1 = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("data", products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProd());
  }, []);
  return (
    <div>
      <div className="flex green">
        <h2>TheFoodList</h2>

      </div>
      <div className="flex">
        <div className="tLeft">Food List</div>
        <div className="tRight">Favourites</div>
      </div>

      <div className="">
        {products.map((el) => (
          <div
            onClick={() => navigate(`/${el.id}`)}
            className="flex"
            key={el.id}
          >
            <img src={icon} alt="" className="" />
            <div className="">
              <h2>
                {el.product_name} ({el.generic_name})
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
