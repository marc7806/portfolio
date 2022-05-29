---
title: "Notion API Cache"
date: "2022"
type: "Project"
previewImage: ../../images/notion-api-cache/notion-api-cache-preview.png
mainColor: "#96a3ff"
technologies: ['Go']
showcaseRegex: "/----/"
website: "https://github.com/marc7806/notion-api-cache"
position: 2
---
<a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">Notion</a> is a tool I really enjoy using for all of my personal notes and also some projects I've been working on. I used the offical API multiple times and was dissapointed of the bad response times, so I started to implement a proxy service that basically saves notion databases into a mongodb for faster data retrieval.
<br/> <br>
I choose Go as programming language because I wanted to try out new things. The language perfectly suits the usecase due to it's lightweight development process. MongoDB as document store is a great fit for saving the nested and unstructured data that is returned from Notion's API.