import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTimesCircle } from "react-icons/fa";

//? const dizi = []  -> true
//? dizi ? x : y   ->  x

const AppointmentList = ({ appointments, setAppointments }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
    </Container>
  );
};

export default AppointmentList;
