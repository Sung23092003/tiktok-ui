import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src= 'https://placehold.co/600x400' alt='avatar'/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyễn Văn A</span>
                <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
};

export default AccountItem;
