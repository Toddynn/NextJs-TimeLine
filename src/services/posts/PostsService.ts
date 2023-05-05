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
    title: string;
    content: string;
}

export default function PostsService() {
    return {
        async getAll():Promise<iPost[]>{
            const PATH_POSTS = path.resolve('.', '_data', 'posts');
            const pathFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
            const postsPromise = pathFiles.map(async(item) => {
                const FILE_PATH = path.join(PATH_POSTS, item);
                const postsFile = await fs.readFile(FILE_PATH, { encoding: 'utf-8'});

                const {data, content} = matter(postsFile);

                const formatDate = () => {
                    let datapost = String(data?.date).substring(0, 10);
                    
                    return format(new Date(datapost), 'dd/mm/yyyy');
                }

                const post: iPost = {
                    metaData:{
                        date: formatDate(),
                        slug: item.replace('.md', ''),
                        url: data.url,
                        resume: data.resume,
                        tags: data.tags
                    },
                    title: data.title,
                    content,
                }
                return post
                
            })

            const posts = Promise.all(postsPromise);
            return posts
        }
    }
}