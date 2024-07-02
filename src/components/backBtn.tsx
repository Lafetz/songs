import { useNavigate } from "react-router-dom";
import Button from "../styles/button";

const BackBtn=()=>{
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); 
      };
    return       <Button onClick={handleBack}>
    Go Back
  </Button>
}
export default BackBtn