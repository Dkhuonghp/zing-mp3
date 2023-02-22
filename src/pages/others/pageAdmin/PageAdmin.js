import className from 'classnames/bind';
import style from './PageAdmin.module.scss';

const cx = className.bind(style);
function PageAdmin() {
    return (
        <div className={cx('wrapper')}>
            <h1>Liên hệ</h1>
        </div>
    );
}

export default PageAdmin;
