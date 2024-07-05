import UserTable from "./UserTable";
import Departments from "./Departments";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";

const SecondPage = () => {
  return (
    <div>
      <UserTable />
      <Box sx={{ height: 200 }} />
      <Divider />
      <Box sx={{ height: 100 }} />
      <Departments />
    </div>
  );
};

export default SecondPage;
