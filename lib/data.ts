import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'khalid13878@hotmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Khalid, I am reaching out to you because...',
    oldPortfolio: 'https://khalidkarimkqr.github.io/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/khalidkarimkqr' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/khalidkarim24/' },
    { name: 'instagram', url: 'https://www.instagram.com/khalid_kqr/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Graphical Operating System',
        slug: 'graphical-os',
        liveUrl: '',
        sourceCode:
            'https://github.com/khalidkarimkqr/Graphical-Operating-System',

        year: 2025,
        description: `
I built a 32-bit graphical OS using C and x86 Assembly. I wrote a custom bootloader, implemented multitasking, and handled real-time input via hardware interrupts. The system runs on QEMU and operates independently of any existing kernel.

I also created two demo windows—one with a light/dark mode toggle, and another showing a bouncing ball animation using raw pixel rendering.

br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,

        role: ``,
        techStack: [
            'C',
            'x86 Assembly',
            'QEMU',
            'NASM',
            'GCC',
            'Make',
            'Protected Mode',
            'Hardware Interrupts',
            'Linux',
        ],
        thumbnail: '/projects/thumbnail/graphical-os.jpg',
        longThumbnail: '/projects/long/graphical-os.jpg',
        images: [
            '/projects/images/graphical-os-1.png',
            '/projects/images/graphical-os-2.png',
            '/projects/images/graphical-os-3.png',
        ],
    },
    {
        title: 'AI Podcast Clipper',
        slug: 'ai-podcast-clipper',
        liveUrl: 'https://ai-podcast-clipper-frontend-kk.vercel.app/',
        sourceCode: 'https://github.com/khalidkarimkqr/AI-Podcast-Clipper-SaaS',

        year: 2025,
        description: `
I built AI Podcast Clipper to turn long podcast episodes into short, viral clips. I used WhisperX for transcription and integrated an emotion-based model to detect highlights. Subtitles, speaker labels, and timestamps are auto-generated and delivered in one click.

The platform runs entirely in the browser using Vercel, Supabase, and Modal for a fully serverless workflow.

<br/><br/>Check out the live demo or GitHub repo above.`,

        role: ``,
        techStack: [
            'Next.js',
            'FastAPI',
            'Python',
            'TensorFlow',

            'Inngest',

            'Stripe',
            'Modal',
            'AWS S3',
        ],
        thumbnail: '/projects/thumbnail/ai-clipper.jpg',
        longThumbnail: '/projects/long/ai-clipper.jpg',
        images: [
            '/projects/images/ai-clipper-1.png',
            '/projects/images/ai-clipper-2.png',
            '/projects/images/ai-clipper-3.png',
        ],
    },
    {
        title: 'NASA Mission Control',
        slug: 'nasa-mission-control',
        liveUrl: 'http://3.135.205.104:8000/',
        sourceCode: 'https://github.com/khalidkarimkqr/nasa-project',

        year: 2025,
        description: `
I built NASA Mission Control to simulate rocket launches using the SpaceX REST API. I developed the backend with Node.js, Express, and MongoDB, and created a beautiful React dashboard to track launches, schedule missions, and handle aborts. The app is containerized with Docker, deployed on AWS EC2, and integrated with CI/CD using GitHub Actions. APIs were tested using Postman, and automated with Jest and Supertest.

<br/><br/>Try the live demo or explore the full codebase on GitHub.`,

        role: ``,
        techStack: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'React',
            'Tailwind CSS',
            'Docker',
            'AWS EC2',
            'GitHub Actions (CI/CD)',
            'Jest',
            'SpaceX API',
        ],
        thumbnail: '/projects/thumbnail/nasa-mission.jpg',
        longThumbnail: '/projects/long/nasa-mission.jpg',
        images: [
            '/projects/images/nasa-1.png',
            '/projects/images/nasa-2.png',
            '/projects/images/nasa-3.png',
        ],
    },

    {
        title: 'UniStream',
        slug: 'uni-stream',
        liveUrl: 'https://uni-stream.vercel.app/',
        sourceCode: 'https://github.com/khalidkarimkqr/UniStream',

        year: 2025,
        description: `
I built UniStream as a full-stack event platform for universities. Using React, Node.js, Express, and MongoDB, I created a system where admins can launch HD livestreams in seconds and students can join instantly—no installs needed. It supports campus events from club meetups to academic seminars, with real-time updates, secure access, and a responsive interface.

<br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'Tailwind CSS',
            'debouncing',
            'MongoDB',
            'JWT Auth',
        ],
        thumbnail: '/projects/thumbnail/uni-stream.jpg',
        longThumbnail: '/projects/long/uni-stream.jpg',
        images: [
            '/projects/images/uni-stream-1.png',
            '/projects/images/uni-stream-2.png',
            '/projects/images/uni-stream-3.png',
            '/projects/images/uni-stream-4.png',
            '/projects/images/uni-stream-5.png',
        ],
    },
    {
        title: 'Wedding RSVP',
        slug: 'wedding-rsvp',
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Supabase',
            'EmailJS',
            'Resend',
            'Shadcn UI',
        ],
        thumbnail: '/projects/thumbnail/wedding-rsvp.jpg',
        longThumbnail: '/projects/long/wedding-rsvp.jpg',
        images: [
            '/projects/images/wedding-rsvp-1.png',
            '/projects/images/wedding-rsvp-2.png',
            '/projects/images/wedding-rsvp-3.png',
        ],
        sourceCode: 'https://github.com/khalidkarimkqr/wedding-rsvp-app',
        liveUrl: 'https://i-love-rsvp.vercel.app/',
        year: 2025,
        description: `I built this Wedding RSVP app to make it easy for guests to confirm attendance and for hosts to manage responses. It has a clean form, instant email notifications, and a secure admin login to view submissions. Powered by Next.js, Supabase, Resend, and styled with Shadcn UI, it’s simple, fast, and perfect for any special event.
                <br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
    },
    {
        title: 'Resumate',
        slug: 'resumate',
        techStack: [
            'React',
            'Shadcn UI',
            'Tailwind CSS',
            'Framer Motion',
            'pdf-parse',
            'API Integration',
        ],
        thumbnail: '/projects/thumbnail/resumate.jpg',
        longThumbnail: '/projects/long/resumate.jpg',
        images: [
            '/projects/images/resumate-1.png',
            '/projects/images/resumate-2.png',
            '/projects/images/resumate-3.png',
            '/projects/images/resumate-4.png',
            '/projects/images/resumate-5.png',
        ],
        liveUrl: 'https://final-project-lakes.vercel.app/',
        sourceCode: 'https://github.com/MAKM101/ResuMate',
        year: 2025,
        description: `I built ResuMate as a full-stack AI-powered tool to simplify job applications. Using React, Tailwind CSS, Shadcn UI, and the OpenAI and JSearch APIs, I created a platform where users can analyze resumes, find job matches, and generate tailored cover letters—all in one experience. It’s built to save time and improve application quality with smart automation and client-side PDF parsing.
        <br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
    },
    {
        title: 'Crypto Chatbot',
        slug: 'crypto-chatbot',
        techStack: [
            'React',
            'Next.js (App Router)',
            'Vercel AI SDK',
            'Kraken - CoinMarketCap - OpenAI APIs',
            'Tailwind CSS',
            'Shadcn UI',
        ],
        thumbnail: '/projects/thumbnail/crypto-chatbot.jpg',
        longThumbnail: '/projects/long/crypto-chatbot.jpg',
        images: [
            '/projects/images/crypto-chatbot-1.png',
            '/projects/images/crypto-chatbot-2.png',
        ],
        liveUrl: 'https://cryptochatbot.vercel.app/',
        sourceCode: 'https://github.com/khalidkarimkqr/crypto-chatbot',
        year: 2025,
        description: `I built CryptoChatbot as an AI-powered assistant for exploring the crypto market. Using React, Next.js 14, Tailwind CSS, and the Vercel AI SDK, I created a chat interface where users get real-time price updates, market trends, and answers to crypto questions. It connects to Kraken and CoinMarketCap APIs for live data and uses GPT-4 to deliver reliable insights in a conversational way.
        <br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
    },
    {
        title: 'Heart Disease Predictor',
        slug: 'heart-disease-predictor',
        techStack: [
            'Python',
            'Logistic Regression',
            'Sci-Kit Learn',
            'Numpy',
            'Pandas',
            'Matplotlib',
        ],
        thumbnail: '/projects/thumbnail/heart-disease-predictor.jpg',
        longThumbnail: '/projects/long/heart-disease-predictor.jpg',
        images: [
            '/projects/images/heart-disease-predictor-1.png',
            '/projects/images/heart-disease-predictor-2.png',
            '/projects/images/heart-disease-predictor-3.png',
            '/projects/images/heart-disease-predictor-4.png',
        ],
        liveUrl: 'https://heart-disease-predictor-kqr.streamlit.app/',
        sourceCode: 'https://github.com/khalidkarimkqr/heart-disease-predictor',
        year: 2024,
        description: `I built the Heart Disease Predictor as an AI-powered tool to assess heart disease risk. Using Python, Scikit-learn, SHAP, and Streamlit, I developed an app that takes clinical inputs and predicts the likelihood of heart disease. I trained a Logistic Regression model on the UCI dataset and used SHAP for explainability. The app also visualizes feature importance and gives health tips based on risk level.
            <br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
    },
    {
        title: '3D Book Slider',
        slug: '3d-book-slider',
        techStack: [
            'Three.js',
            'React Three Fiber',
            'TailwindCSS',
            'Web Audio API',
            'Jotai',
        ],
        thumbnail: '/projects/thumbnail/3d-book-slider.jpg',
        longThumbnail: '/projects/long/3d-book-slider.jpg',
        images: [
            '/projects/images/3d-book-slider-1.png',
            '/projects/images/3d-book-slider-2.png',
            '/projects/images/3d-book-slider-3.png',
        ],
        sourceCode: 'https://github.com/khalidkarimkqr/3d-book-slider-threejs',
        liveUrl: 'https://3d-book-slider-threejs.vercel.app/',
        year: 2025,
        description: `I built the 3D Book Slider to create a fun, interactive way to flip through content like a real book. Using React Three Fiber, custom shaders, and Three.js, I made the pages turn with smooth animations, sound effects, and physics. It’s fully responsive, easy to customize, and runs at 60fps for a seamless experience across devices.
            <br/><br/>Feel free to check out the live demo or dive into the GitHub repo using the icons above for all the code, technical details, and full documentation.</br/>`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer Intern',
        company: 'CJSF 90.1FM Radio Station',
        duration: 'Oct 2024 - Jan 2025',
    },
    {
        title: 'Full Stack Developer',
        company: 'Google Developer Student Clubs',
        duration: 'May 2025 - Present',
    },

    {
        title: 'Software Developer',
        company: 'SFU Surge',
        duration: 'Jan 2025 - Apr 2025',
    },

    {
        title: 'Back-end Developer (Casual / On call)',
        company: 'Horizon Expedition',
        duration: 'Sep 2024 - Nov 2024',
    },
    {
        title: 'Math Instructor',
        company: 'Mathnasium',
        duration: 'Nov 2024 - Present',
    },

    {
        title: 'Computer Science Tutor',
        company: 'Varsity Tutors',
        duration: 'Jan 2024 - Apr 2024',
    },
];
