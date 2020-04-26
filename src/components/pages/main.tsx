import React, { FunctionComponent } from "react";
import { UseGetEntries } from "hooks/getEntries";

export const MainPage: FunctionComponent = () => {
  const [data, error, loading] = UseGetEntries({});

  console.log("data = ", data);
  return <>main page</>;
};
