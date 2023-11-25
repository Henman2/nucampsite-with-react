import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsite/CampsiteDetail';
import CampsitesList from '../features/campsite/CampsitesList';
import {selectCampsiteById} from '../features/campsite/campSitesSlice';

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <Row>
                <Col  sm='5' md='7'>
                <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col  sm='7' md='5'>
                <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;