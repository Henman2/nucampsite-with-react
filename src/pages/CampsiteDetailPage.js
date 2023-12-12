import { Container, Row } from "reactstrap";
import CampsiteDetail from "../features/campsite/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import { selectCampsiteById } from "../features/campsite/campSitesSlice";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams(); //id here is a sring not a number
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);
    return( 
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;