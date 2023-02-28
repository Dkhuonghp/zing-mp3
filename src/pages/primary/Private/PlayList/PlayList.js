import { useDispatch, useSelector } from 'react-redux';
import ItemPlayList from '~/components/item/ItemPlayList/ItemPlayList';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import style from './PlayList.module.scss';
import { setBooleanEdit, setModalAddPlayList } from '~/redux/action';
import Empty from '~/components/Empty/Empty';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(style);
function PlayList() {
    const { playListFavorite, privatePlayLists } = useSelector((state) => state.Favorite);
    const dispatch = useDispatch();
    const handleAddPlayList = () => {
        dispatch(setModalAddPlayList(true));
        dispatch(setBooleanEdit(false));
    };

    return (
        <>
            <Helmet>
                <title>Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h3>Playlist</h3>
                    <Button
                        content="Tạo playlist mới"
                        className={cx('btn')}
                        iconLeft={<i className="icon ic-add"></i>}
                        onClick={handleAddPlayList}
                    />
                </div>
                {/* <div className={cx('container')}>
                    <div className={cx('empty-playlist') + ' l- m-3 c-6 col'} onClick={handleAddPlayList}>
                        <div className={cx('content')}>
                            <i className="icon ic-24-add"></i>
                            <span>Tạo playlist mới</span>
                        </div>
                    </div>
                </div> */}
                {playListFavorite?.length > 0 || privatePlayLists?.length > 0 ? (
                    <div className={cx('body')}>
                        {privatePlayLists.map((e) => (
                            <ItemPlayList data={e} type="private-playlist" />
                        ))}
                    </div>
                ) : (
                    <Empty title="Chưa có PlayList nào trong thư viện cá nhân" link="/top100" />
                )}
            </div>
        </>
    );
}

export default PlayList;
