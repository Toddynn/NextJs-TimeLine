export { default } from '@src/screens/HomeScreen/HomeScreen';
import PostsService from '@src/services/posts/PostsService';
import { withTemplateConfig } from '@src/services/template/TemplateConfig';

export async function getStaticProps(){
    
    const postsNext = await PostsService().getAllNext();
    const postsUX = await PostsService().getAllUX();

    return {
        props: await withTemplateConfig({
            postsNext,
            postsUX
        })
    }
}
