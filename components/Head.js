import NextHead from 'next/head'
import { useEffect, useState } from 'react'


const CustomHead = ({title, description}) => {
    const [url, setUrl]  = useState('https://flipbooks.co.in/')

    useEffect(() => {
        const viewport = document.getElementById('viewport-meta')
        if(!viewport) return
        const viewports = {
            default: viewport.getAttribute('content'),
            landscape: 'width = 2560',
            portait: 'width = 768' 
        }
        const setViewport = function(){
            screen.width > 2560
                ? viewport.setAttribute('content', viewports.landscape)
                : screen.width >= 768 && screen.width < 1200
                ? viewport.setAttribute('content', viewports.portait)
                : viewport.setAttribute('content', viewports.default)
        }

        setViewport()
        window.onresize = function() {
            setViewport()
        }
        setUrl(document.location.href)
    }, [])

    return(
        <NextHead>
            <title>{title || 'Flipbooks | Get Books delivered to your home, anywhere in Bangalore' }</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                id="viewport-meta"
            />

            <link rel="icon" href="static/favicon.svg" />
            <meta name="author" content="Flipbooks" />
            <meta property="og:title" content="Flipbooks" />
            <meta name="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Flipbooks | Get books delivered to your home!" />
            <meta property="og:image" content="../../public/static/logo_black.svg" />
            <meta
                name="keywords"
                content="Flipbooks , flipbooks, Flipbooks Bangalore, books to read, books, bookstore, books for upsc, books app ,books delivery, novels, book delivery Bangalore, books near me, college books, books home delivery, books in Jayanagar, books in Koramangala, books near Lakkasandra"
            />
        </NextHead>
    )
}


export default CustomHead;