import { Container, Row } from "reactstrap";
import CampsiteDetail from "../features/campsite/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import { selectCampsiteById } from "../features/campsite/campSitesSlice";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loading from "../components/Loading";
import Error from "../components/Error";
import SubHeader from "../components/SubHeader";
const CampsiteDetailPage = () =>{
    const {campsiteId} = useParams(); //id here is a sring not a number
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite:', campsite);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
}

export default CampsiteDetailPage;