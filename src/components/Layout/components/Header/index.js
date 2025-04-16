import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faSearch,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

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
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English', // United States, Canada, Australia, etc.
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt', // Vietnam
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
                {
                    type: 'language',
                    code: 'nht',
                    title: 'Ngoài hành tinh',
                    children: {
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'SumBaShomo',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Namex',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and help',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard',
    },
];

const Header = () => {
    const [searchResult, setsearchResult] = useState([]);

    const currenUser = true;

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([]);
        }, 0);
    }, []);

    //hanle Logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
        switch (menuItem.type) {
            case 'language':
                // thực hiện logic
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@sun',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            // có vạch
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* search */}
                <HeadlessTippy
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
                </HeadlessTippy>

                {/* actions */}
                <div className={cx('actions')}>
                    {currenUser ? (
                        <>
                            <Tippy delay={[0, 200]} offset={[16, 8]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Text Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* target ="_blank": mở tab mới */}
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://image-cdn.solana.fm/images/?imageUrl=https://gateway.irys.xyz/adf5uwHkAxM7gGel_t-tmtDRmdLoaOMmx6PZQg6w38Q"
                                alt="Nguyễn Văn A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                {/* button ... */}
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
