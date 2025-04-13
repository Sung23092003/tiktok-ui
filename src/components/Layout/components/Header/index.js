import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Header.module.scss';
import images from '~/assets/images';

// giúp ta viết được class có chứa dấu -
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}/>,
        title: 'Tiếng Việt',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Đánh giá và trợ giúp',
        to : '/feeback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Phím tắt',
    }
]

const Header = () => {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    },[]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </h4>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        {/* spellCheck: kiểm tra lỡi chính tả */}
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>

                {/* actions */}
                <div className={cx('actions')}>
                    {/* target ="_blank": mở tab mới */}
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu
                    items = {MENU_ITEMS}
                    >
                        {/* button ... */}
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
