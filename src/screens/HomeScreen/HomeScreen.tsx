import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import TemplatePageHOC from "@src/services/template/TemplatePageHOC";
import type { iPost } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: iPost[]
}

export function HomeScreen(props: any) {

  const theme = useTheme();

  return (
    <Box tag="main" styleSheet={{backgroundColor: theme.colors.neutral.x000, flex: 1, alignItems: 'center',}}>
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts}></Feed.Posts>
      </Feed>
      <Footer />
    </Box>
  )
}

export default TemplatePageHOC(HomeScreen, {
  title: "Home",
})