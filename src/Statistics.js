import "./App.css";
import supabase from "./config/supabaseClient.js";
import { useState, useEffect } from "react";
import NavBar from "./Navbar.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import Footer from "./Footer.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Statistics() {
  const [userdata, setUserData] = useState([]);
  const [cadtCounts, setCadtCounts] = useState({
    cadt118IP: 0,
    cadt135IP: 0,
    cadt252IP: 0,
    cadt118NonIP: 0,
    cadt135NonIP: 0,
    cadt252NonIP: 0,
  });
  const [cadt118, setCadt118] = useState({
    cadtChildren118: 0,
    cadtYouth118: 0,
    cadtAdult118: 0,
    cadtElderly118: 0,
  });
  const [cadt135, setCadt135] = useState({
    cadtChildren135: 0,
    cadtYouth135: 0,
    cadtAdult135: 0,
    cadtElderly135: 0,
  });
  const [cadt252, setCadt252] = useState({
    cadtChildren252: 0,
    cadtYouth252: 0,
    cadtAdult252: 0,
    cadtElderly252: 0,
  });
  const [year2022, set2022] = useState({ cadt118: 0, cadt135: 0, cadt252: 0 });
  const [year2023, set2023] = useState({
    cadt118yr23: 0,
    cadt135yr23: 0,
    cadt252yr23: 0,
  });
  const [year2024, set2024] = useState({
    cadt118yr24: 0,
    cadt135yr24: 0,
    cadt252yr24: 0,
  });

  const monthlyData = {
    labels: ["CADT 118", "CADT 135", "CADT 252"],
    datasets: [
      {
        label: "IP Records",
        data: [
          cadtCounts.cadt118IP,
          cadtCounts.cadt135IP,
          cadtCounts.cadt252IP,
        ], // Data for IP category
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        tension: 0.1,
        fill: false,
      },
      {
        label: "Non-IP Records",
        data: [
          cadtCounts.cadt118NonIP,
          cadtCounts.cadt135NonIP,
          cadtCounts.cadt252NonIP,
        ], // Data for Non-IP category
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const quarterlyData118 = {
    labels: ["Children", "Youth", "Adult", "Elderly"],
    datasets: [
      {
        label: "Census Records",
        data: [
          cadt118.cadtChildren118,
          cadt118.cadtYouth118,
          cadt118.cadtAdult118,
          cadt118.cadtElderly118,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  const quarterlyData135 = {
    labels: ["Children", "Youth", "Adult", "Elderly"],
    datasets: [
      {
        label: "Census Records",
        data: [
          cadt135.cadtChildren135,
          cadt135.cadtYouth135,
          cadt135.cadtAdult135,
          cadt135.cadtElderly135,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };
  const quarterlyData252 = {
    labels: ["Children", "Youth", "Adult", "Elderly"],
    datasets: [
      {
        label: "Census Records",
        data: [
          cadt252.cadtChildren252,
          cadt252.cadtYouth252,
          cadt252.cadtAdult252,
          cadt252.cadtElderly252,
        ],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };

  const annuallyData = {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "CADT 118",
        data: [year2022.cadt118, year2023.cadt118yr23, year2024.cadt118yr24],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "CADT 135",
        data: [year2022.cadt135, year2023.cadt135yr23, year2024.cadt135yr24],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "CADT 252",
        data: [year2022.cadt252, year2023.cadt252yr23, year2024.cadt252yr24],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const fetch_data = async () => {
    try {
      const { error, data } = await supabase.from("census_data").select("*");

      if (error) throw error;

      console.log(data);
      const cadt118IP = data.filter(
        (item) => item.cadt === "CADT 118" && item.category === "IP"
      ).length;
      const cadt135IP = data.filter(
        (item) => item.cadt === "CADT 135" && item.category === "IP"
      ).length;
      const cadt252IP = data.filter(
        (item) => item.cadt === "CADT 252" && item.category === "IP"
      ).length;

      const cadt118NonIP = data.filter(
        (item) => item.cadt === "CADT 118" && item.category === "NON-IP"
      ).length;
      const cadt135NonIP = data.filter(
        (item) => item.cadt === "CADT 135" && item.category === "NON-IP"
      ).length;
      const cadt252NonIP = data.filter(
        (item) => item.cadt === "CADT 252" && item.category === "NON-IP"
      ).length;
      setCadtCounts({
        cadt118IP,
        cadt135IP,
        cadt252IP,
        cadt118NonIP,
        cadt135NonIP,
        cadt252NonIP,
      });

      const cadtChildren118 = data.filter(
        (item) => item.cadt === "CADT 118" && parseInt(item.age) <= 14
      ).length;
      const cadtYouth118 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 118" && age >= 15 && age <= 24;
      }).length;
      const cadtAdult118 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 118" && age >= 25 && age <= 64;
      }).length;
      const cadtElderly118 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 118" && age >= 65;
      }).length;
      setCadt118({
        cadtChildren118,
        cadtYouth118,
        cadtAdult118,
        cadtElderly118,
      });

      const cadtChildren135 = data.filter(
        (item) => item.cadt === "CADT 135" && parseInt(item.age) <= 14
      ).length;
      const cadtYouth135 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 135" && age >= 15 && age <= 24;
      }).length;
      const cadtAdult135 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 135" && age >= 25 && age <= 64;
      }).length;
      const cadtElderly135 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 135" && age >= 65;
      }).length;
      setCadt135({
        cadtChildren135,
        cadtYouth135,
        cadtAdult135,
        cadtElderly135,
      });

      const cadtChildren252 = data.filter(
        (item) => item.cadt === "CADT 252" && parseInt(item.age) <= 14
      ).length;
      const cadtYouth252 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 252" && age >= 15 && age <= 24;
      }).length;
      const cadtAdult252 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 252" && age >= 25 && age <= 64;
      }).length;
      const cadtElderly252 = data.filter((item) => {
        const age = parseInt(item.age);
        return item.cadt === "CADT 252" && age >= 65;
      }).length;
      setCadt252({
        cadtChildren252,
        cadtYouth252,
        cadtAdult252,
        cadtElderly252,
      });

      const cadt118 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        console.log(year);
        return item.cadt === "CADT 118" && parseInt(year) === 2022;
      }).length;
      const cadt135 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 135" && parseInt(year) === 2022;
      }).length;
      const cadt252 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 252" && parseInt(year) === 2022;
      }).length;
      set2022({ cadt118, cadt135, cadt252 });

      const cadt118yr23 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        console.log(year);
        return item.cadt === "CADT 118" && parseInt(year) === 2023;
      }).length;
      const cadt135yr23 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 135" && parseInt(year) === 2023;
      }).length;
      const cadt252yr23 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 252" && parseInt(year) === 2023;
      }).length;
      set2023({ cadt118yr23, cadt135yr23, cadt252yr23 });

      const cadt118yr24 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        console.log(year);
        return item.cadt === "CADT 118" && parseInt(year) === 2024;
      }).length;
      const cadt135yr24 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 135" && parseInt(year) === 2024;
      }).length;
      const cadt252yr24 = data.filter((item) => {
        const date = new Date(item.created_at);
        const year = date.getFullYear();
        return item.cadt === "CADT 252" && parseInt(year) === 2024;
      }).length;
      set2024({ cadt118yr24, cadt135yr24, cadt252yr24 });
    } catch (error) {
      alert("An unexpected error occurred.");
      console.error("Error during data fetch:", error.message);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <Container fluid>
      <NavBar />
      <Container fluid className="mt-5 font">
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2 className="mb-3">Census Statistics Overview</h2>
            <p>
              Below are visual representations of monthly, quarterly, and annual
              census data.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">
                  Numbers of IP's and Non IP's per CADT
                </h5>
                <Line data={monthlyData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow mb-5">
              <Card.Body>
                <h5 className="text-center">Annual Census Records</h5>
                <Bar
                  data={annuallyData}
                  options={{
                    responsive: true,
                    indexAxis: "y",
                    scales: {
                      x: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">By Age Group per CADT 118</h5>
                <Bar data={quarterlyData118} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">By Age Group per CADT 135</h5>
                <Bar data={quarterlyData135} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">By Age Group per CADT 252</h5>
                <Bar data={quarterlyData252} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Statistics;
