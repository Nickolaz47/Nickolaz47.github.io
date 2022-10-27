// Components
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="text-center m-3">
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loading;
