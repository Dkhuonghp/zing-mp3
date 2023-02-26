import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { zingAction } from '~/redux/action';
import style from './Theme.module.scss';
import ThemeContainer from './ThemeContainer/ThemeContainer';
const cx = classNames.bind(style);

const themesModal = {
    topic: {
        names: 'Chủ đề',
        data: [
            {
                id: 0,
                title: 'Zing Music Awards',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/zma.jpg',
            },
            {
                id: 1,
                title: 'Tháp Eiffel',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/eiffel.jpg',
            },
        ],
    },
    artist: {
        names: 'Nghệ sĩ',
        data: [
            {
                id: 2,
                title: 'Rosé',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/rose.jpg',
            },
            {
                id: 3,
                title: 'IU',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/iu.jpg',
            },
            {
                id: 4,
                title: 'Ji Chang Wook',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/ji-chang-wook.jpg',
            },
            {
                id: 5,
                title: 'Lisa',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/lisa.jpg',
            },
            {
                id: 6,
                title: 'Jennie Kim',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jennie.jpg',
            },
            {
                id: 7,
                title: 'Jisoo',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jisoo.jpg',
            },
            {
                id: 8,
                title: 'Jack',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg',
            },
        ],
    },
    darkColor: {
        names: 'Màu Tối',
        data: [
            {
                id:9,
                title: 'Tối',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dark.jpg',
            },
            {
                id:10,
                title: 'Tím',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg',
            },
            {
                id:11,
                title: 'Xanh Đậm',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg',
            },
            {
                id:12,
                title: 'Xanh Biển',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue-light.jpg',
            },
            {
                id:13,
                title: 'Xanh Lá',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green.jpg',
            },
            {
                id:14,
                title: 'Nâu',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/brown.jpg',
            },
            {
                id:15,
                title: 'Hồng',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink.jpg',
            },
            {
                id:16,
                title: 'Đỏ',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/red.jpg',
            },
        ],
    },
    lightColor: {
        names: 'Màu Sáng',
        data: [
            {
                id: 17,
                title: 'Sáng',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/light.jpg'
            },
            {
                id: 18,
                title: 'Xám',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/gray.jpg'
            },
            {
                id: 19,
                title: 'Xanh Nhạt',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green-light.jpg'
            },
            {
                id: 20,
                title: 'Hồng Cánh Sen',
                link: 'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink-light.jpg'
            },
        ]
    }
};

function Theme() {
    const dispatch = useDispatch();
    const handelModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch(zingAction.actions.modalTheme(false));
            dispatch(zingAction.actions.booleanPreview(false));
        }
    };
    const handleCloseModal = () => {
        dispatch(zingAction.actions.modalTheme(false));
        dispatch(zingAction.actions.booleanPreview(false));
    };
    return (
        <div className={cx('modal-topic')} onClick={(e) => handelModal(e)}>
            <div className={cx('topic')}>
                <div className={cx('topic-header')}>
                    <h1>Giao Diện</h1>
                    <div className={cx('icon-close')} onClick={handleCloseModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
                <div className={cx('topic-body')}>
                    <ThemeContainer data={themesModal.topic} />
                    <ThemeContainer data={themesModal.artist} />
                    <ThemeContainer data={themesModal.darkColor} />
                    <ThemeContainer data={themesModal.lightColor} />
                </div>
            </div>
        </div>
    );
}

export default Theme;
