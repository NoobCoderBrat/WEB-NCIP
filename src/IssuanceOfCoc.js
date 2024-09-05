import "./App.css";
import NavBar from "./Navbar.js";
import { Container } from "react-bootstrap";

function IssuanceOfCoc(){
    return(
        <>
            <Container fluid>
                <NavBar />
                <Container className="mt-4" fluid>
                    <p className='text'>
                        National Commission on Indigenous Peoples (NCIP) in the Philippines, 
                        the issuance of a Certificate of Ancestral Domain Title (CADT) or Certificate 
                        of Ancestral Land Title (CALT) is a significant process. These 
                        certificates essentially recognize and affirm the indigenous peoples' 
                        rights over their ancestral lands. <br /><br />
                        The issuance of the Certificate of Ancestral Domain Title (CADT) or Certificate
                        of Ancestral Land Title (CALT) involves a series of steps and requirements:<br /><br />
                        <strong>Filing of Application</strong><br />
                        Indigenous communities, through their leaders or representatives, file an application with the NCIP 
                        for the recognition of their ancestral domain or ancestral land.<br /><br />
                        <strong>Verification and Evaluation</strong><br />
                        NCIP conducts verification and evaluation of the application to determine its validity 
                        and compliance with legal requirements.<br /><br />
                        <strong>Field Investigation and Validation</strong><br />
                        NCIP, along with representatives from concerned agencies and stakeholders, conducts 
                        field investigation and validation to verify the claims of the indigenous community.<br /><br />
                        <strong>Consultation and Free Prior Informed Consent (FPIC)</strong><br />
                        NCIP facilitates a series of consultations with the indigenous community to obtain their
                        free prior informed consent regarding the application for CADT/CALT. This process 
                        ensures that the rights and interests of the indigenous community are respected.<br /><br />
                        <strong>Resolution and Endorsement</strong><br />
                        Based on the findings of the investigation and consultation process, NCIP issues a 
                        resolution endorsing the application for CADT/CALT.<br /><br />
                        <strong>Issuance of CADT/CALT</strong><br />
                        Upon approval by the NCIP, the CADT/CALT is issued to the indigenous community, 
                        formally recognizing their rights over their ancestral domain or ancestral land.
                    </p>
                </Container>
            </Container>
        </>
    );
}

export default IssuanceOfCoc;