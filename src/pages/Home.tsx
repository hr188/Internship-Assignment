import UserTable from "../components/UserTable";
import Departments from "../components/Departments";
import { Box } from "@mui/material";
import { Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const buttonClickHandler = () => {
    localStorage.clear();
    Navigate("/login");
  };

  return (
    <div>
      <UserTable />
      <Box sx={{ height: 200 }} />
      <Divider />
      <Box sx={{ height: 100 }} />
      <Departments />
      <Button
        sx={{ m: 5, padding: 2, borderRadius: 2 }}
        variant="contained"
        onClick={buttonClickHandler}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
