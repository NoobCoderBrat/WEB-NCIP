import "./App.css";
import NavBar from "./Navbar.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function Statistics() {
  const monthlyData = {
    labels: ['CADT 118', 'CADT 135', 'CADT 252'],
    datasets: [{
      label: 'Monthly Census Records',
      data: [50, 60, 70, 80, 55, 65, 75, 85, 90, 100, 95, 105],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension: 0.1
    }]
  };

  const quarterlyData = {
    labels: ['Children', 'Youth', 'Adult', 'Elderly'],
    datasets: [{
      label: 'Quarterly Census Records',
      data: [180, 210, 240, 290],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
    }]
  };

  const annuallyData = {
    labels: ['2021', '2022', '2023'],
    datasets: [
      {
        label: 'CADT 118',
        data: [300, 400, 500],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'CADT 135',
        data: [600, 700, 800],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'CADT 252',
        data: [900, 1000, 1100],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container fluid>
      <NavBar />
      <Container fluid className="mt-5 font">
        <Row className="mb-4">
          <Col md={12} className="text-center">
            <h2 className="mb-3">Census Statistics Overview</h2>
            <p>Below are visual representations of monthly, quarterly, and annual census data.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">Numbers of IP's and Non IP's per CADT</h5>
                <Line data={monthlyData} options={{ responsive: true }} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="shadow mb-4">
              <Card.Body>
                <h5 className="text-center">By Age Group per CADT</h5>
                <Bar data={quarterlyData} options={{ responsive: true }} />
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
                    indexAxis: 'y', 
                    scales: {
                      x: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Statistics;
