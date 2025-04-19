import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';
// customFallback đổi tên lại
const Image = ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            //wrapper chính là item trong file image.module.scss
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={ fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
};

export default forwardRef(Image);
