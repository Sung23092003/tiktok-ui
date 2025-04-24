import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
// prop : to là link nội bộ (Link), passProps là những thằng mặc định như (target,rel, disabled, v.v.)
const Button = ({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small,
    large,
    children,
    LeftIcon,
    RightIcon,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        // dù thẻ link a hay button điều có onClick
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        // primary: primary = primary(cách viết ngắn)
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {LeftIcon && <span className={cx('icon')}>{LeftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
};

Button.propTypes = {
    // .node bất kì thằng nào có thể render được(span, div, component), ví dụ về thằng ko render được là : function
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    LeftIcon: PropTypes.string,
    RightIcon: PropTypes.node,
    className: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
