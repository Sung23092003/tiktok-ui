import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        // loại bỏ khoảng trắng và ktr nếu searchValue ko có giá trị thì return
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        // Khi người dùng nhập các ký tự đặc biệt như `&`,'=', `?` có thể khiến URL bị hiểu sai,
        // hàm encodeURIComponent sẽ mã hóa chúng thành các ký tự an toàn để sử dụng trong URL
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChangle = (e) => {
        const searchValue = e.target.value;
        // không cho nhập space(khoảng trắng đầu tiên)
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }
    
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </h4>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                {/* spellCheck: kiểm tra lỡi chính tả */}
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChangle}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')} onMouseDown={(e)=>e.preventDefault()}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
