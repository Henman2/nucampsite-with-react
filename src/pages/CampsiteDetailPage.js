import { Container, Row } from "reactstrap";
import CampsiteDetail from "../features/campsite/CampsiteDetail";
import { selectCampsiteById } from "../features/campsite/campSitesSlice";
import { useParams } from "react-router-dom";
const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId);
    return(
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;