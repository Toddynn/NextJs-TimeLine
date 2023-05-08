import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from '@src/services/template/TemplateConfigContext';
import { iPost } from '@src/services/posts/PostsService';
import { FeedPost } from './patterns/FeedPost';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingTop: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();

  const templateConfig = useTemplateConfig();

  return (
    <Box styleSheet={{borderBottom: `1px solid ${theme.colors.neutral.x200}`,paddingBottom: '24px',marginBottom: '24px',}}>

      <Box styleSheet={{flexDirection:{sm:'row', xs:'col'},justifyContent: 'space-between', gap:'16px',marginBottom:'16px'}}>

        <Image styleSheet={{ width: { xs: '100px', md: '128px' }, height: { xs: '100px', md: '128px' }, borderRadius: '100%', margin:{sm:'0', xs:'0 auto'}}} 
        src={templateConfig?.personal.avatar} alt="Imagem de perfil do Mario Souto"></Image>

        <Box styleSheet={{ justifyContent: 'space-between',}}>
          <Box styleSheet={{flex: 1, justifyContent: 'center', gap:'10px'}}>
            <Button fullWidth colorVariant="primary" size="lg" href="/">Newsletter</Button>
            <Button fullWidth colorVariant="neutral" size="lg"  href="/">Buy me a coffee</Button>
          </Box>
        </Box>

      </Box>

      <Text tag="h1" variant="heading4">
        {templateConfig?.personal.name}
      </Text>
      
      <Box styleSheet={{flexDirection: 'row', gap: '4px'}}>
        {
          Object.keys(templateConfig?.personal.socialNetworks).map((key:any) => {
            const socialNetwork = templateConfig?.personal.socialNetworks[key];
            if(socialNetwork){
              return (
                <Link key={key} href={templateConfig?.personal.socialNetworks [key]} target='_blank'>
                  <Icon name={key} />
                </Link>
              )
            }
            return null;
          })
        }
      </Box>
      
    </Box>
  )
}

interface FeedPostsProps {
  posts: iPost[];
}

Feed.Posts = ({posts}: FeedPostsProps) => {
  return (
    <Box>
      <Text variant="heading3"> Ultimas Atualizações </Text>
      {
        posts.map((item)=>(
          <FeedPost key={item.metaData.slug} 
            date={item.metaData.date} 
            resume={item.metaData.resume}
            tags={item.metaData.tags}
            title={item.title}
            url={item.metaData.url}
            image={item.image}
          />
        ))
      }
    </Box>
  )
}
