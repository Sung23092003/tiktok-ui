import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountsItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                     <AccountPreview/>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20,0]} placement="bottom-start" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/168/63369821b1a38.jpg"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Test</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tùng Tes</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountsItem.propTypes = {};

export default AccountsItem;
