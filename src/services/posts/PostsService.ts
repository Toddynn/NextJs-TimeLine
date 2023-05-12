import path from "path";
import fs from 'fs/promises';
import matter from "gray-matter";
import { format } from "date-fns";

export interface iPost {
    metaData:{
        date: string;
        slug: string; //id do post
        url: string;
        resume: string;
        tags: string[];
    },
    image?: string;
    title: string;
    content: string;
}

export default function PostsService() {
    return {
        async getAllNext():Promise<iPost[]>{
            const PATH_POSTS = path.resolve('.', '_data', 'posts', 'Cursos', 'Next');
            const pathFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
            const postsPromise = pathFiles.map(async(item) => {
                const FILE_PATH = path.join(PATH_POSTS, item);
                const postsFile = await fs.readFile(FILE_PATH, { encoding: 'utf-8'});

                const {data, content} = matter(postsFile);

                const post: iPost = {
                    metaData:{
                        date: new Date(data.date).toISOString(),
                        slug: item.replace('.md', ''),
                        url: data.url,
                        resume: data.resume,
                        tags: data.tags
                    },
                    image: data.image || '',
                    title: data.title,
                    content,
                }
                return post
                
            })

            function compare(a, b) {
                console.log(a, b)
                if(a.metaData.date < b.metaData.date){
                    return -1;
                }
                if(a.metaData.date > b.metaData.date){
                    return 1;
                }
                return 0;
            };

            const posts = Promise.all(postsPromise);
            return (await posts).sort(compare).reverse();
        },
        async getAllUX():Promise<iPost[]>{
            const PATH_POSTS = path.resolve('.', '_data', 'posts', 'Cursos', 'UI_UX');
            const pathFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
            const postsPromise = pathFiles.map(async(item) => {
                const FILE_PATH = path.join(PATH_POSTS, item);
                const postsFile = await fs.readFile(FILE_PATH, { encoding: 'utf-8'});

                const {data, content} = matter(postsFile);

                const post: iPost = {
                    metaData:{
                        date: new Date(data.date).toISOString(),
                        slug: item.replace('.md', ''),
                        url: data.url,
                        resume: data.resume,
                        tags: data.tags
                    },
                    image: data.image || '',
                    title: data.title,
                    content,
                }
                return post
                
            })

            function compare(a, b) {
                console.log(a, b)
                if(a.metaData.date < b.metaData.date){
                    return -1;
                }
                if(a.metaData.date > b.metaData.date){
                    return 1;
                }
                return 0;
            };

            const posts = Promise.all(postsPromise);
            return (await posts).sort(compare).reverse();
        }
    }
}