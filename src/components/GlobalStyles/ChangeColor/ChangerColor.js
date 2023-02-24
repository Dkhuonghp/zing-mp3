import { useSelector } from 'react-redux';

const ChangerColor = ({ children }) => {
    const p = useSelector((state) => state.action.previewBgrIndex);
    const t = useSelector((state) => state.action.bgrIndex);
    const b = useSelector((state) => state.action.booleanPreviewBgr);
    var kq;
    b ? (kq = p) : (kq = t);
    if ([0, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16].includes(kq)) {
        document.documentElement.style.setProperty('--navigation-text', '#dadada');
        document.documentElement.style.setProperty('--text-secondary', 'hsla(0, 0%, 100%, 0.5)');
        document.documentElement.style.setProperty('--text-primary', '#fff');
        document.documentElement.style.setProperty('--player-text', '#fff');
        document.documentElement.style.setProperty('--duration-bg', '#5a5a5a');
        document.documentElement.style.setProperty('--search-text', '#eee');
        document.documentElement.style.setProperty('--text-placeholder', '#dadada');
        document.documentElement.style.setProperty('--setting-icon-text', '#d8d8d8');
        document.documentElement.style.setProperty('--alpha-bg', 'hsla(0,0%,100%,0.1)');
        document.documentElement.style.setProperty('--text-item-hover', '#fff');
        document.documentElement.style.setProperty('--sidebar-bg', 'hsla(0, 0%, 100%, 0.05)');
        document.documentElement.style.setProperty('--border-player', 'hsla(0,0%,100%,0.1)');
        document.documentElement.style.setProperty('--portal-menu-box-shadow', 'rgba(0,0,0,0.2)');
        document.documentElement.style.setProperty(
            '--empty-song-icon',
            'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png)',
        );
        if (kq === 0) {
            document.documentElement.style.setProperty(
                '--linear-gradient-bg',
                'linear-gradient(to bottom, #740091, #2d1a4c)',
            );
            document.documentElement.style.setProperty('--layout-bg', '#37085d');
            document.documentElement.style.setProperty('--sidebar-popup-bg', '#572f90');
            document.documentElement.style.setProperty('--link-text-hover', '#fe63da');
            document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.2)');
            document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.1)');
            document.documentElement.style.setProperty('--purple-primary', '#ed2b91');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#5d218c');
            document.documentElement.style.setProperty('--layout-header-bg', '#37075d');
            document.documentElement.style.setProperty('--primary-bg', '#4B1178');
            document.documentElement.style.setProperty('--text-item-hover', '#fff');
            document.documentElement.style.setProperty('--player-bg', 'rgb(47,7,78)');
        }
        if (kq === 1) {
            document.documentElement.style.setProperty('--layout-bg', '#282828');
            document.documentElement.style.setProperty('--primary-bg', '#363636');
            document.documentElement.style.setProperty('--layout-header-bg', '#282828');
            document.documentElement.style.setProperty('--purple-primary', '#9b4de0');
            document.documentElement.style.setProperty('--link-text-hover', '#c273ed');
            document.documentElement.style.setProperty('--player-bg', 'rgb(24,24,24)');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#2d2f32');
        }
        if (kq === 2) {
            document.documentElement.style.setProperty('--layout-bg', '#061C4F');
            document.documentElement.style.setProperty('--primary-bg', '#1A3570');
            document.documentElement.style.setProperty('--layout-header-bg', '#061C4F');
            document.documentElement.style.setProperty('--link-text-hover', '#4C7CFF');
            document.documentElement.style.setProperty('--purple-primary', '#3560F5');
            document.documentElement.style.setProperty('--text-item-hover', '#fff');
            document.documentElement.style.setProperty('--player-bg', 'rgb(6,22,65)');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#223c75');
        }
        if (kq === 8) {
            document.documentElement.style.setProperty('--layout-bg', '#767269');
            document.documentElement.style.setProperty('--layout-header-bg', '#767269');
            document.documentElement.style.setProperty('--player-bg', '#4C473E');
            document.documentElement.style.setProperty('--primary-bg', '#605C52');
            document.documentElement.style.setProperty('--purple-primary', '#D08011');
            document.documentElement.style.setProperty('--link-text-hover', '#F59D22');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#726c5e');
            document.documentElement.style.setProperty(
                '--linear-gradient-bg',
                'linear-gradient(to bottom, #656156, #574f40)',
            );
        }
        //! Tối
        if (kq === 9) {
            document.documentElement.style.setProperty('--layout-bg', '#1e1e1e');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(30,30,30,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#181818');
            document.documentElement.style.setProperty('--sidebar-bg', 'hsla(0,0%,100%,0.05)');
            document.documentElement.style.setProperty('--primary-bg', '#1e1e1e');
            document.documentElement.style.setProperty('--purple-primary', '#9b4de0');
            document.documentElement.style.setProperty('--link-text-hover', '#c273ed');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#2a2a2a');
        }
        //! Tím
        if (kq === 10) {
            document.documentElement.style.setProperty('--layout-bg', '#170f23');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(23,15,35,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#130c1c');
            document.documentElement.style.setProperty('--primary-bg', '#34224f');
            document.documentElement.style.setProperty('--sidebar-bg', 'hsla(0,0%,100%,0.05)');
            document.documentElement.style.setProperty('--purple-primary', '#9b4de0');
            document.documentElement.style.setProperty('--link-text-hover', '#c273ed');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#2a203a');
        }
        //! Xanh Đậm
        if (kq === 11) {
            document.documentElement.style.setProperty('--layout-bg', '#0f1a2e');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(15,26,46,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#111f3b');
            document.documentElement.style.setProperty('--primary-bg', '#173b45');
            document.documentElement.style.setProperty('--purple-primary', '#148370');
            document.documentElement.style.setProperty('--link-text-hover', '#0daf94');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#1d2a49');
        }
        //! Xanh Biển
        if (kq === 12) {
            document.documentElement.style.setProperty('--layout-bg', '#162a45');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(22,42,69,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#172f4f');
            document.documentElement.style.setProperty('--primary-bg', '#203d65');
            document.documentElement.style.setProperty('--purple-primary', '#3b68ef');
            document.documentElement.style.setProperty('--link-text-hover', '#429eff');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#2b4162');
        }
        //! Xanh Lá
        if (kq === 13) {
            document.documentElement.style.setProperty('--layout-bg', '#142922');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(20,41,34,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#19342c');
            document.documentElement.style.setProperty('--primary-bg', '#204b3d');
            document.documentElement.style.setProperty('--purple-primary', '#138673');
            document.documentElement.style.setProperty('--link-text-hover', '#0daf94');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#24503f');
        }
        //! Nâu
        if (kq === 14) {
            document.documentElement.style.setProperty('--layout-bg', '#251b18');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(37,27,24,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#30201d');
            document.documentElement.style.setProperty('--primary-bg', '#46312b');
            document.documentElement.style.setProperty('--purple-primary', '#b65f21');
            document.documentElement.style.setProperty('--link-text-hover', '#e96f16');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#604a45');
        }
        //! Hồng
        if (kq === 15) {
            document.documentElement.style.setProperty('--layout-bg', '#411636');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(65,22,54,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#4c1a3f');
            document.documentElement.style.setProperty('--primary-bg', '#642654');
            document.documentElement.style.setProperty('--purple-primary', '#ca4974');
            document.documentElement.style.setProperty('--link-text-hover', '#e9638f');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#883c6c');
        }
        //! Đỏ
        if (kq === 16) {
            document.documentElement.style.setProperty('--layout-bg', '#2e0f10');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(46,15,16,0.5)');
            document.documentElement.style.setProperty('--player-bg', '#3b1113');
            document.documentElement.style.setProperty('--primary-bg', '#522325');
            document.documentElement.style.setProperty('--purple-primary', '#ca4954');
            document.documentElement.style.setProperty('--link-text-hover', '#f2636f');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421a');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#561111');
        }
    } else {
        document.documentElement.style.setProperty('--navigation-text', '#32323d');
        document.documentElement.style.setProperty('--text-secondary', 'rgba(0,0,0,0.6)');
        document.documentElement.style.setProperty('--text-primary', '#32323d');
        document.documentElement.style.setProperty('--search-text', '#282828');
        document.documentElement.style.setProperty('--text-placeholder', '#757575');
        document.documentElement.style.setProperty('--setting-icon-text', '#495057');
        document.documentElement.style.setProperty('--alpha-bg', 'rgba(0,0,0,0.05)');
        document.documentElement.style.setProperty('--sidebar-bg', 'hsla(0,0%,100%,0.3)');
        document.documentElement.style.setProperty('--border-primary', 'rgba(0,0,0,0.03)');
        document.documentElement.style.setProperty('--loading-bg', 'rgba(0,0,0,0.05)');
        document.documentElement.style.setProperty('--portal-menu-box-shadow', 'rgba(0,0,0,0.3)');
        document.documentElement.style.setProperty(
            '--box-shadow-queue',
            '0 1px 0 rgba(0,0,0,0.3),0 1px 6px rgba(0,0,0,0.3),inset 0 1px 1px hsla(0,0%,100%,0.3)',
        );
        document.documentElement.style.setProperty('--border-player', 'rgba(0,0,0,0.05)');
        document.documentElement.style.setProperty(
            '--empty-song-icon',
            'url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-fav-song.png)',
        );

        if (kq === 3) {
            document.documentElement.style.setProperty('--layout-bg', '#E6E1DE');
            document.documentElement.style.setProperty('--layout-header-bg', '#E6E1DE');
            document.documentElement.style.setProperty('--primary-bg', '#EFEDEB');
            document.documentElement.style.setProperty('--link-text-hover', '#AC3E82');
            document.documentElement.style.setProperty('--purple-primary', '#C24793');
            document.documentElement.style.setProperty('--layout-header-bg', '#E6E1DE');
            document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.4)');
            document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.3)');
            document.documentElement.style.setProperty('--text-item-hover', '#AC3E82');
            document.documentElement.style.setProperty('--player-bg', 'rgb(245,230,224)');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#e5e3df');
        }
        if (kq === 4) {
            document.documentElement.style.setProperty('--layout-bg', '#B3D8DB');
            document.documentElement.style.setProperty('--layout-header-bg', '#B3D8DB');
            document.documentElement.style.setProperty('--purple-primary', '#1966B2');
            document.documentElement.style.setProperty('--primary-bg', '#D1EDF0');
            document.documentElement.style.setProperty('--link-text-hover', '#1F5A93');
            document.documentElement.style.setProperty('--text-item-hover', '#1F5A93');
            document.documentElement.style.setProperty('--player-bg', '#A3D5DC');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#ced9d9');
        }
        if (kq === 5) {
            document.documentElement.style.setProperty('--layout-bg', '#F1DDD8');
            document.documentElement.style.setProperty('--layout-header-bg', '#F1DDD8');
            document.documentElement.style.setProperty('--player-bg', '#F4CBCA');
            document.documentElement.style.setProperty('--primary-bg', '#F9E6E2');
            document.documentElement.style.setProperty('--purple-primary', '#D14781');
            document.documentElement.style.setProperty('--text-item-hover', '#CC3373');
            document.documentElement.style.setProperty('--link-text-hover', '#CC3373');
            document.documentElement.style.setProperty('--box-hot-item-bg-hove', 'rgba(254,255,255,0.4)');
            document.documentElement.style.setProperty('--box-hot-item-bg', 'rgba(254,255,255,0.3)');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#f9dbdb');
        }
        if (kq === 6) {
            document.documentElement.style.setProperty('--layout-bg', '#BBB9C4');
            document.documentElement.style.setProperty('--layout-header-bg', '#BBB9C4');
            document.documentElement.style.setProperty('--primary-bg', '#CAC6DD');
            document.documentElement.style.setProperty('--purple-primary', '#8919AE');
            document.documentElement.style.setProperty('--text-item-hover', '#2a5e6b');
            document.documentElement.style.setProperty('--link-text-hover', '#6F1F89');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#e5e3df');
            document.documentElement.style.setProperty('--player-bg', '#C6C4D1');
        }
        if (kq === 7) {
            document.documentElement.style.setProperty('--layout-bg', '#fff');
            document.documentElement.style.setProperty('--layout-header-bg', '#fff');
            document.documentElement.style.setProperty('--primary-bg', '#FFFFFF');
            document.documentElement.style.setProperty('--purple-primary', '#8D22C3');
            document.documentElement.style.setProperty('--link-text-hover', '#8D22C3');
            document.documentElement.style.setProperty('--duration-bg', '#dedede');
            document.documentElement.style.setProperty('--text-item-hover', '#8D22C3');
            document.documentElement.style.setProperty('--player-bg', '#fff');
            document.documentElement.style.setProperty('--player-text', '#32323d');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#fff');
        }
        //! Sáng
        if (kq === 17) {
            document.documentElement.style.setProperty('--layout-bg', '#fff');
            document.documentElement.style.setProperty('--layout-header-bg', 'hsla(0,0%,100%,0.8)');
            document.documentElement.style.setProperty('--player-bg', '#fff');
            document.documentElement.style.setProperty('--player-text', '#32323d');
            document.documentElement.style.setProperty('--text-item-hover', '#8d22c3');
            document.documentElement.style.setProperty('--duration-bg', '#dedede');
            document.documentElement.style.setProperty('--primary-bg', '#fff');
            document.documentElement.style.setProperty('--sidebar-bg', 'rgba(0,0,0,0.05)');
            document.documentElement.style.setProperty('--purple-primary', '#8d22c3');
            document.documentElement.style.setProperty('--link-text-hover', '#8d22c3');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#fff');
        }
        //! Xám
        if (kq === 18) {
            document.documentElement.style.setProperty('--layout-bg', '#e5e3df');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(229,227,223,0.8)');
            document.documentElement.style.setProperty('--player-bg', '#dedad1');
            document.documentElement.style.setProperty('--player-text', '#32323d');
            document.documentElement.style.setProperty('--text-primary', '#32323d');
            document.documentElement.style.setProperty('--text-item-hover', '#844d4d');
            document.documentElement.style.setProperty('--duration-bg', '#c0beb6');
            document.documentElement.style.setProperty('--primary-bg', '#f7f5f3');
            document.documentElement.style.setProperty('--sidebar-bg', 'rgba(0,0,0,0.05)');
            document.documentElement.style.setProperty('--purple-primary', '#644646');
            document.documentElement.style.setProperty('--link-text-hover', '#844d4d');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#e5e3df');
        }
        //! Xanh Nhạt
        if (kq === 19) {
            document.documentElement.style.setProperty('--layout-bg', '#ced9d9');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(206,217,217,0.8)');
            document.documentElement.style.setProperty('--player-bg', '#c0d8d8');
            document.documentElement.style.setProperty('--player-text', '#32323d');
            document.documentElement.style.setProperty('--text-item-hover', '#0f7070');
            document.documentElement.style.setProperty('--duration-bg', '#a7bcbc');
            document.documentElement.style.setProperty('--primary-bg', '#e0ebeb');
            document.documentElement.style.setProperty('--sidebar-bg', 'hsla(0,0%,100%,0.3)');
            document.documentElement.style.setProperty('--purple-primary', '#0e8080');
            document.documentElement.style.setProperty('--link-text-hover', '#0f7070');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#ced9d9');
        }
        // ! Hồng Cánh Sen
        if (kq === 20) {
            document.documentElement.style.setProperty('--layout-bg', '#f9dbdb');
            document.documentElement.style.setProperty('--layout-header-bg', 'rgba(249,219,219,0.8)');
            document.documentElement.style.setProperty('--player-bg', '#f9c6c5');
            document.documentElement.style.setProperty('--player-text', '#32323d');
            document.documentElement.style.setProperty('--text-item-hover', '#b72479');
            document.documentElement.style.setProperty('--duration-bg', '#daadac');
            document.documentElement.style.setProperty('--primary-bg', '#fde8e8');
            document.documentElement.style.setProperty('--sidebar-bg', 'rgba(0,0,0,0.05)');
            document.documentElement.style.setProperty('--purple-primary', '#b72479');
            document.documentElement.style.setProperty('--link-text-hover', '#b72479');
            document.documentElement.style.setProperty('--main-box-shadow', '#4242421');
            document.documentElement.style.setProperty('--queue-player-popup-bg', '#f9dbdb');
        }
    }
    return <>{children}</>;
};
export default ChangerColor;
