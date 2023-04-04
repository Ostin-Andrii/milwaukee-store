import React from "react";
import { NumericFormat } from "react-number-format";


const NumFormatOrderSum = ({ totalsOrder }) => {
    return (
      <>
        <NumericFormat
          value={totalsOrder}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => <span {...props}>{value}</span>}
        />
      </>
    );
}

export default NumFormatOrderSum;