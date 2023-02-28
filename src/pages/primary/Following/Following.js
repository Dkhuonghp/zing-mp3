/* eslint-disable no-const-assign */
import className from 'classnames/bind';
import style from './Following.module.scss';
import BodyFollowing from './BodyFollowing';
import HeaderFollowing from './HeaderFollowing';
import { Helmet } from 'react-helmet';
const cx = className.bind(style);

function Following() {
    return (
        <>
            <Helmet>
                <title>Nghệ sĩ | Xem bài hát, album, MV đang hot nhất hiện tại</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <HeaderFollowing />
                <BodyFollowing />
            </div>
        </>
    );
}

export default Following;
