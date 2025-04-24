import classNames from 'classnames/bind';
import Header from '../components/Header';
import styles from './DefaltLayout.module.scss'
import SideBar from './SideBar';

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('contaner')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
