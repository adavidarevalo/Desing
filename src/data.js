export const data =[
    {
        title: 'Manage',
        paragraph: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
        project: 'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        img: 'https://i.ibb.co/qB6wNDY/image-portfolio-manage-2x.jpg',
        grid: false,
        images: {
            first: 'https://i.ibb.co/K5fGKhj/image-manage-hero-2x.jpg',
            second: 'https://i.ibb.co/0V3N1Wn/image-manage-preview-1-2x.jpg',
            third: 'https://i.ibb.co/HFz12Zj/image-manage-preview-2-2x.jpg'
        },
        Link: {
            next: 'Bookmark',
            back: 'Insure'
        }
    },
    {
        title: 'Bookmark',
        paragraph: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
        project: 'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        img: 'https://i.ibb.co/ZV3pqHW/image-portfolio-bookmark-2x.jpg',
        grid: true,
        images: {
            first: 'https://i.ibb.co/YLM05Mc/image-bookmark-hero-2x.jpg',
            second: 'https://i.ibb.co/f1hyd1Q/image-bookmark-preview-1-2x.jpg',
            third: 'https://i.ibb.co/k2dFNf2/image-bookmark-preview-2-2x.jpg'
        },
        Link: {
            next: 'Insure',
            back: 'Manage'
        }
    },
    {
        title: 'Insure',
        paragraph: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
        project: 'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        img: 'https://i.ibb.co/8Pm4sSj/image-portfolio-insure-2x.jpg',
        grid: false,
        images: {
            first: 'https://i.ibb.co/yFmnmwX/image-insure-hero-2x.jpg',
            second: 'https://i.ibb.co/xgbPKBz/image-insure-preview-1-2x.jpg',
            third: 'https://i.ibb.co/QF3VS0Z/image-insure-preview-2-2x.jpg'
        },
        Link: {
            next: 'Fylo',
            back: 'Insure'
        }
    },
    {
        title: 'Fylo',
        paragraph: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
        project: 'This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
        img: 'https://i.ibb.co/6Y1sJBj/image-portfolio-fylo-2x.jpg',
        grid: true,
        images: {
            first: 'https://i.ibb.co/NSwX5np/image-fylo-hero-2x.jpg',
            second: 'https://i.ibb.co/q1cw3j4/image-fylo-preview-1-2x.jpg',
            third: 'https://i.ibb.co/3rJBbwW/image-fylo-preview-2-2x.jpg'
        },
        Link: {
            next: 'Manage',
            back: 'Insure'
        }
    },
]

export const GetElement = (item) => {
    const Element = data.filter(element => element.title === item)
    return Element
}