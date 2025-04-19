const images = {
    // require là một cách để nhập (import) tài nguyên trong JavaScript
    logo: require('~/assets/images/logo.svg').default,
    noImage: require('~/assets/images/no-img.png'), //png thì ko cần .defalt
};

export default images;
