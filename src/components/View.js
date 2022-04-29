import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import GridView from "./GridView";
import ListView from "./ListView";

function View() {
  const { state } = useContext(productsContext);
  const { found , gridView } = state;
  if (found > 0) {
      if(gridView){
          return <GridView />
      }else{
          return <ListView />
      }
  }else{
      return <><h3 style={{marginTop:"20px"}}>Sorry, no products matched your search.</h3></>
  }
}

export default View;
