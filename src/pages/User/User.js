import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
//   const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>{searchParams.get('id')}</h1>
      <h1>{searchParams.get('age')}</h1>
      <h1>{searchParams.get('name')}</h1>
    </div>
  );
};

export default User;
