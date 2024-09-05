import { Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js"
import IssuanceOfCoc from "./IssuanceOfCoc.js";
import HealthServices from "./HealthServices.js";
import EducationalAssistance from "./EducationalAssistance.js";
import IPForm from "./IPForm.js";
import IPProfile from "./IPProfile.js";
import Statistics from "./Statistics.js";
import Programs from "./Programs.js"
import RequestAccess from "./RequestAccess.js";
import UserProfile from "./UserProfile.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/issuanceofcoc" element={<IssuanceOfCoc />} />
        <Route path="/healthservices" element={<HealthServices />} />
        <Route path="/educationalassistance" element={<EducationalAssistance />} />
        <Route path="/ipform" element={<IPForm />} />
        <Route path="/ipprofile" element={<IPProfile />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/requestaccess" element={<RequestAccess />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
