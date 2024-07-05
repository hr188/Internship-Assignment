import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Navigate("/login");
    } else {
      Navigate("/home");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
