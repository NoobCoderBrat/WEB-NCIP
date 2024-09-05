import "./App.css";
import NavBar from "./Navbar.js";
import { Container } from "react-bootstrap";

function EducationalAssistance(){
    return(
        <>
            <Container fluid>
                <NavBar />
                <Container fluid className="mt-4">
                    <p className="text">
                        The Educational Assistance Program (EAP) administered by the National Commission on Indigenous 
                        Peoples (NCIP) in the Philippines is designed to provide support and opportunities for indigenous
                        peoples (IPs) to access quality education. This program recognizes the importance of education
                        in empowering indigenous communities, preserving their cultures, and promoting their socio-economic
                        development. <br /><br />
                        <strong>Scholarships and Financial Assistance</strong><br />
                        The NCIP provides scholarships and financial assistance to indigenous students at various levels 
                        of education, including primary, secondary, tertiary, and technical-vocational education. These 
                        scholarships may cover tuition fees, school supplies, transportation costs, and other 
                        educational expenses.<br /><br />
                        <strong>Special Education Programs</strong><br />
                        The EAP may include special education programs tailored to the needs of indigenous students, 
                        particularly those from remote or marginalized communities. These programs may focus on enhancing 
                        basic literacy and numeracy skills, promoting cultural sensitivity in teaching practices, 
                        and providing support for students with special learning needs.<br /><br />
                        <strong>Capacity Building and Training</strong><br />
                        NCIP may offer capacity building and training programs for indigenous teachers, education 
                        administrators, and community leaders. These programs aim to enhance the quality of education in 
                        indigenous communities, improve teaching methodologies, and promote the use of indigenous languages 
                        and cultural materials in the curriculum.<br /><br />
                        <strong>Cultural Sensitivity and Inclusivity</strong><br />
                        The EAP emphasizes the importance of promoting cultural sensitivity and inclusivity in the education 
                        system. This may involve developing culturally relevant curriculum materials, integrating indigenous
                        knowledge systems and practices into the curriculum, and fostering respect for indigenous cultures 
                        and identities among teachers and students.<br /><br />
                        <strong>Community Engagement and Empowerment</strong>
                        NCIP works closely with indigenous communities to identify their educational needs, priorities, and 
                        aspirations. The EAP may include community engagement activities such as consultation meetings, 
                        participatory planning sessions, and capacity building workshops aimed at empowering communities to 
                        take ownership of their education initiatives.
                    </p>
                </Container>
            </Container>
        </>
    );
}

export default EducationalAssistance;