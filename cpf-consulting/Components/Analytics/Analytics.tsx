"use client";

import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID;

const isEnabled =
    typeof window !== "undefined" &&
    //process.env.NODE_ENV === "production" &&
    GA_TRACKING_ID;

export default function Analytics() {
    if (!isEnabled) return null;

    return (
        <>
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
            </Script>
        </>
    );
}
