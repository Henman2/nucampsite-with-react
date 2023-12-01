import { Container} from 'reactstrap';
import CampsitesList from '../features/campsite/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'/>
            <Container> 
                <CampsitesList/>  
            </Container>
        </Container>
    );
};

export default CampsitesDirectoryPage;