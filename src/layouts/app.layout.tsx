import { PropsWithChildren, useEffect } from "react";
import Header from "../components/Header";

interface Props {
    pageTitle: string;
    pageIcon?: string;
    backAction?: boolean;
}

export default function AppLayout({children, pageTitle, pageIcon = '/src/assets/images/logo.png', backAction, ...props}: PropsWithChildren<Props>) {

    useEffect(() => {
        document.title = pageTitle
        document.querySelector('link[rel="icon"]')?.setAttribute('href', pageIcon);
    }, []);

    return (
        <div {...props}>
            <div className="w-full p-12"> 
                <Header title={pageTitle} backAction={backAction ? () => window.history.back() : undefined} />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}