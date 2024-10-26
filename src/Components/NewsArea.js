import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { NewsItem } from "./NewsItem";
import LoadingBar from 'react-top-loading-bar';
import "./NewsArea.css"

export function NewsArea () {

    const { category } = useParams();
    const [data, setData] = useState(null);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(()=>{
        const scrollContainer = scrollContainerRef.current;

        if(!scrollContainer) return;

        const handleWheel = (event) => {
            if(event.deltaY !== 0) {
                event.preventDefault();
                scrollContainer.scrollLeft += event.deltaY * 3;
            }
        };

        scrollContainer.addEventListener('wheel', handleWheel);

        return ()=> {
            scrollContainer.removeEventListener("wheel", handleWheel);
        }

    }, [data]);

    useEffect( ()=>{
        const mount = ()=>{
            let req = null
            
            if(category)
            {
                req = new Request(`https://news-site-server.vercel.app/us/${category}`)
            }
            else{
                req = new Request(`https://news-site-server.vercel.app/us`)
            }
            fetch(req)
                .then((response)=>{
                    setLoadingProgress(30)
                    return response.json()
                })
                .then((data)=>{
                    setLoadingProgress(50)
                    setData(data.articles)
                    setLoadingProgress(100)
                })
            
        }

        mount()
    }, [category])

    // console.log(data);

    if(!data) return <div>Loading .... </div>

    function formatString(str, mlength) {
        if(!str) return "";
        if(str.length < mlength) return str;
        return (str.substring(0, mlength) + "...");
    }

    return (
        <div>
            <LoadingBar color="red" progress={loadingProgress} onLoaderFinished={() => setLoadingProgress(0)} />
            <div className="news-area" ref={scrollContainerRef}>
                {
                    data.map((source , index) => (
                        source.urlToImage && <NewsItem 
                            key={index} 
                            imgUrl={source.urlToImage} 
                            title={formatString(source.title, 90)} 
                            author={formatString(source.author, 50)} 
                            desc={formatString(source.description, 200)} 
                            newsUrl={source.url} 
                            time={new Date(source.publishedAt).toLocaleDateString()}
                            >
                        </NewsItem>
                    ))
                }
            </div>
        </div>
    );
} 

// link = https://newsapi.org/v2/top-headlines?country=us&apiKey=34d89e1e7e1d45faafb0f708d29d819f

//        https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=34d89e1e7e1d45faafb0f708d29d819f
// categories = business entertainment general health science sports technology