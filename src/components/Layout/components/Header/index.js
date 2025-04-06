import classNames from 'classnames/bind';
import styles from './Header.module.scss'

// giúp ta viết được class có chứa dấu -
const cx = classNames.bind(styles)

const Header = () => {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* Logo */}
            {/* search */}
        </div>
    </header>
};

export default Header;
