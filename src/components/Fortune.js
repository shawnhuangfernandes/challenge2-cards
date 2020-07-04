import React, { useState } from "react";

const Fortune = () => {
  const [fortune, setFortune] = useState("");
  return <p>{fortune}</p>;
};

export default Fortune;
