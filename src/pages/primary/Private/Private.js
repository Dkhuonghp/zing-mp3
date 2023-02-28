import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Bottom from './Bottom/Buttom';
import PlayList from './PlayList/PlayList';
import style from './Private.module.scss';
import { Helmet } from 'react-helmet';
const cx = classNames.bind(style);

function Private() {
    return (
        <>
            <Helmet>
                <title>Nhạc cá nhân | Xem bài hát, album, MV đang hot nhất hiện tại</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('top')}>
                    <h1>Thư viện</h1>
                    <Button noContent iconLeft={<i className="icon ic-play"></i>} className={cx('btn')} />
                </div>
                <PlayList />
                <Bottom />
            </div>
        </>
    );
}

export default Private;
