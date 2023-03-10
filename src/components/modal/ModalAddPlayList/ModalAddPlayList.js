/* eslint-disable react-hooks/exhaustive-deps */
import className from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '~/components/Api/Service';
import ButtonAction from '~/components/Button/ButtonAction';
import useDebounce from '~/components/hooks/useDebounce';
import { setModalAddPlayList } from '~/redux/action';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import style from './ModalAddPlayList.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { setCreatePlayList, setEditPlayList } from '~/redux/FavoriteList';
import { useNavigate } from 'react-router-dom';
import toastMessage from '../toast';
const cx = className.bind(style);
function ModalAddPlayList() {
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [summit, setSummit] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { booleanModalAddPlayList, booleanEdit } = useSelector((state) => state.action);
    const inputRef = useRef();
    const handleValue = (e) => {
        setValue(e.target.value);
    };
    const valueNew = useDebounce(value, 1000);
    useEffect(() => {
        setData([]);
        setSummit(false);
        if (!booleanEdit) {
            if (valueNew) {
                const api = async () => {
                    const data = await search(valueNew);
                    setSummit(true);
                    const id = uuidv4();
                    setData(
                        {
                            title: valueNew,
                            encodeId: id,
                            link: `/album/${valueNew}/${id}.html`,
                            videos: [...data.videos],
                            playlists: [...data.playlists],
                            thumbnailM: data.songs[0].thumbnailM,
                            song: { items: [...data.songs] },
                        } || {},
                    );
                };
                api();
            }
        }
    }, [valueNew]);
    const handleSummit = () => {
        if (booleanEdit) {
            dispatch(setEditPlayList(value));
        } else {
            if (summit) {
                if (data?.song?.items?.length > 0) {
                    toastMessage(`T???o Playlist "${data?.title}" th??nh c??ng`);
                    dispatch(setCreatePlayList(data));
                    navigate('/mymusic');
                } else {
                    toastMessage('T???o danh s??ch kh??ng th??nh c??ng');
                }
            }
        }
        dispatch(setModalAddPlayList(false));
        setSummit(false);
        setData([]);
        setValue('');
        inputRef.current.value = '';
    };
    return (
        booleanModalAddPlayList && (
            <ModalWrapper>
                <div className={cx('vip-ctn')}>
                    <h1 className={cx('title')}>{booleanEdit ? 'Ch???nh s???a playlist' : 'T???o playlist m???i'}</h1>
                    <div className={cx('input')}>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nh???p t??n playlist"
                            onChange={handleValue}
                            onBlur={() => {
                                summit && setSummit(true);
                            }}
                        />
                    </div>
                    <div className={cx('option')}>
                        <div className={cx('left')}>
                            <h3>C??ng khai</h3>
                            <span>M???i ng?????i c?? th??? nh??n th???y playlist n??y</span>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('button', btn && 'action')} onClick={() => setBtn((e) => !e)}></div>
                        </div>
                    </div>
                    <div className={cx('option')}>
                        <div className={cx('left')}>
                            <h3>Ph??t ng???u nhi??n</h3>
                            <span>Lu??n ph??t ng???u nhi??n t???t c??? b??i h??t</span>
                        </div>
                        <div className={cx('right')}>
                            <div className={cx('button', btn2 && 'action')} onClick={() => setBtn2((e) => !e)}></div>
                        </div>
                    </div>
                    <ButtonAction className={cx('btn', (summit || booleanEdit) && 'active')} onClick={handleSummit}>
                        {booleanEdit ? 'L??u' : 'T???o M???i'}
                    </ButtonAction>
                    <div className={cx('close')} onClick={() => dispatch(setModalAddPlayList(false))}>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                </div>
            </ModalWrapper>
        )
    );
}

export default ModalAddPlayList;
