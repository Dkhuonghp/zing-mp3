/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { GoogleAuthProvider, FacebookAuthProvider, EmailAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '~/firebasse/config';
import { setCurrentUser, setOpenModalLogin } from '~/redux/action';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';

import toastMessage from '../toast';
import style from './ModalLogin.module.scss';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { useEffect } from 'react';

const cx = className.bind(style);

function ModalLogin() {
    const dispatch = useDispatch();
    const { openModalLogin, user } = useSelector((state) => state.action);

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err.message);
        })
        dispatch(setOpenModalLogin(false));

    }
    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
        dispatch(setOpenModalLogin(false));
    };
    useEffect(() => {
        onAuthStateChanged(auth, (currents) => {
            if (currents?.displayName) {
                console.log(currents);
                const { displayName, email, firstName, photoURL } = currents;
                dispatch(
                    setCurrentUser({
                        user: true,
                        displayName,
                        email,
                        firstName,
                        photoURL,
                    }),
                );
                toastMessage('Đăng nhập thành công');
            }
        });
    }, []);

    useEffect(() => {
        window.onload = function () {
            if (!user) {
                auth.signOut();
            }
        };
    }, []);
    return (
        openModalLogin && (
            <ModalWrapper>
                <div className={cx('login')}>
                    <div className={cx('background')}>
                        
                        <div className={cx('content')} onClick={signInWithGoogle}>
                            <img
                                src="https://img-new.cgtrader.com/items/2590270/190c8c862e/google-logo-v1-001-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg"
                                alt=""
                            />
                            <h3>Đăng nhập bằng Google</h3>
                        </div>
                        <div className={cx('content')} onClick={signInWithFacebook}>
                            <img
                                src="https://seeklogo.com//images/F/facebook-logo-966BBFBC34-seeklogo.com.png"
                                alt=""
                            />
                            <h3>Đăng nhập bằng Facebook</h3>
                        </div>
                        <div className={cx('content')}>
                            <img
                                src="https://inkythuatso.com/uploads/thumbnails/800/2021/09/zalo-logo-inkythuatso-14-15-05-01.jpg"
                                alt=""
                            />
                            <h3>Đăng nhập bằng Zalo</h3>
                        </div>
                    </div>
                    <div
                        className={cx('close')}
                        onClick={() => {
                            dispatch(setOpenModalLogin(false));
                        }}
                    >
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </ModalWrapper>
        )
    );
}

export default ModalLogin;
