import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import Container from '~/components/container/Container';
import ContainerSongs from '~/components/container/ContainerSongs';
import Empty from '~/components/Empty/Empty';

function LibraryRecent() {
    const { recentList } = useSelector((state) => state.dataControl);
    return recentList?.length > 0 ? (
        <>
            <Helmet>
                <title>Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại</title>
            </Helmet>
            <Container title="Bài hát gần đây">
                <ContainerSongs data={recentList} type="song-12" />
            </Container>
        </>
    ) : (
        <Empty title="Chưa có bài hát nào gần đây" link="/moi-phat-hanh" />
    );
}

export default LibraryRecent;
