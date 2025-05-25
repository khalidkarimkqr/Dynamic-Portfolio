import { GENERAL_INFO } from '@/lib/data';
import { Copyright } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Let’s connect</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-6 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <p className="leading-none text-muted-foreground">
                    Designed & built by Khalid Karim
                </p>
                <div className="flex justify-center items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Copyright size={14} />
                    <span>2025 All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
