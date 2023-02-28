import { Helmet } from 'react-helmet';
import MvBody from './MvBody/MvBody';
import MvHeader from './MvHeader/MvHeader';

function Mv() {
    return (
        <>
            <Helmet>
                <title>Video | Tuyển tập nhạc hay chọn lọc</title>
            </Helmet>
            <MvHeader />
            <MvBody />
        </>
    );
}

export default Mv;
