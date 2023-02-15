const imgPath = '/dist/img/card-01.jpg';

export default {
    image: {
        url: imgPath,
        alt: '',
        title: '',
    },
    attributes: {
        // 's-appear': true,
        // in: 'left',
        // delay: '300-600',
    },
    title: 'Supercharged!',
    intro: 'Up to 18 hours of battery life.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec vestibulum mi. Etiam nec arcu ante.',
    cta: {
        color: 'accent',
        link: {
            text: 'Discover more...',
            url: 'https://apple.com',
            target: '_blank',
            title: 'Discover more on apple.com',
        },
    },
    direction: 'horizontal',
    margin: {
        media: {
            desktop: {
                inline: 20,
                block: 100,
            },
            mobile: {
                inline: 20,
                block: 50,
            },
        },
    },
};
