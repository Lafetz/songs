import { useNavigate } from "react-router-dom";

const BackBtn=()=>{
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
      };
    return       <button type="button" onClick={handleBack}>
    Back
  </button>
}
export default BackBtn