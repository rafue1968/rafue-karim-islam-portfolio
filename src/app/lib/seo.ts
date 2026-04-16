export interface SEOMetadata {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

export function generateMetadata(seo: SEOMetadata) {
    return {
        title: seo.title,
        description: seo.description,
        canonical: seo.canonical,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: seo.ogType || 'website',
            images: seo.ogImage ? [{ url: seo.ogImage }] : [],
        },
        twitter: {
            card: seo.twitterCard || 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}