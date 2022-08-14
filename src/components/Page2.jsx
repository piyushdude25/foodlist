import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Icon from "./Images/icon.png";
import { selectedProd } from "./Redux/Action";

export const Page2 = () => {
  const { id } = useParams();
  let product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id && id !== "") dispatch(selectedProd(id));
  }, []);
  return (
    <div className="">

      <div className="flex green">
        <h2>TheFoodList</h2>
      </div>
      <div className="flex">
        <img src={Icon} alt="" className="icons" />
        <h3 className="">{product.product_name}</h3>
      </div>

      <table>
        <tbody>
          {Object.keys(product).map((key, index) => {
            return (
              <tr key={index}>
                <td className="td1" >{key}</td>
                <td>{product[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
