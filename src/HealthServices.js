import "./App.css";
import NavBar from "./Navbar.js";
import { Container } from "react-bootstrap"

function HealthServices(){
    return(
        <>
            <Container fluid>
                <NavBar />
                <Container fluid className="mt-4">
                    <p className="text">
                        The National Commission on Indigenous Peoples (NCIP) in the Philippines has a mandate to ensure 
                        the welfare and well-being of indigenous peoples (IPs), including providing access to health 
                        services. Health services provided by the NCIP typically encompass a range of initiatives aimed 
                        at addressing the unique health needs and challenges faced by indigenous communities. <br /><br />
                        <strong>Health Education and Promotion</strong><br />
                        NCIP often conducts health education and promotion programs tailored to the cultural and linguistic 
                        contexts of indigenous communities. These programs aim to raise awareness about important health issues, 
                        promote healthy behaviors, and empower community members to take charge of their health.<br /><br />
                        <strong>Medical Missions and Outreach Programs</strong><br />
                        NCIP may organize medical missions and outreach programs to provide basic healthcare services
                        to indigenous communities, particularly those in remote or underserved areas. These initiatives 
                        often involve mobile clinics staffed by healthcare professionals who offer medical consultations, 
                        vaccinations, basic treatments, and referrals for more specialized care when needed.<br /><br />
                        <strong>Traditional Medicine Integration</strong><br />
                        Recognizing the significance of traditional healing practices within indigenous cultures, NCIP may
                        support efforts to integrate traditional medicine into the broader healthcare system. This could involve 
                        collaborating with traditional healers, promoting the preservation of traditional knowledge, 
                        and exploring ways to incorporate traditional healing methods into mainstream healthcare services.<br /><br />
                        <strong>Health Infrastructure Development</strong><br />
                        NCIP may also be involved in initiatives aimed at improving health infrastructure in indigenous 
                        communities, such as the construction or renovation of health facilities, the provision of medical 
                        equipment and supplies, and the training of healthcare personnel.<br /><br />
                        <strong>Advocacy and Policy Development</strong><br />
                        NCIP plays a role in advocating for policies and programs that address the health needs of indigenous 
                        peoples at the national and local levels. This may involve lobbying for increased funding for indigenous 
                        health programs, supporting the development of culturally appropriate healthcare policies, and advocating 
                        for the rights of indigenous peoples to access quality healthcare services.
                    </p>
                </Container>
            </Container>
        </>
    );
}

export default HealthServices;