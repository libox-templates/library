import React, { FC, useState } from "react";
import { Button } from "antd";
import <%= libName %> from "<%= name %>;

const Basis: FC = () => {
  const [message, setMessage] = useState("");

  const onClick = () => {
    setMessage(<%= libName %>.say());
  };

  return (
    <div>
      <Button type="primary" onClick={onClick}>
        Hey man!
      </Button>

      <span style={{ marginLeft: 12 }}>{message}</span>
    </div>
  );
};

export default Basis;
