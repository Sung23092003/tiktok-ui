import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import styles from './DefaltLayout.module.scss'

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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired, 
}

export default DefaultLayout;
