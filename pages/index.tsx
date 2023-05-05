export { default } from '@src/screens/HomeScreen/HomeScreen';
import PostsService from '@src/services/posts/PostsService';
import { withTemplateConfig } from '@src/services/template/TemplateConfig';

export async function getStaticProps(){
    
    const posts = await PostsService().getAll();

    return {
        props: await withTemplateConfig({
            posts,
            exemplo: 'teste'
        })
    }
}
