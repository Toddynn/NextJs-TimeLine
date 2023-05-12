import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { iPost } from '@src/services/posts/PostsService';
import { useTemplateConfig } from '@src/services/template/TemplateConfigContext';
import { useTheme } from "@src/theme/ThemeProvider";
import React, { useState } from 'react';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import { FeedPost } from './patterns/FeedPost';
import ButtonBase from "@src/components/Button/ButtonBase";

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

      <Box styleSheet={{flexDirection:{sm:'row', xs:'col'},justifyContent: 'space-between', gap:'16px',marginBottom:'16px', alignItems:'center'}}>

        <Image styleSheet={{ width: { xs: '100px', md: '128px' }, height: { xs: '100px', md: '128px' }, borderRadius: '100%', margin:{sm:'0', xs:'0 auto'}}} 
        src={templateConfig?.personal.avatar} alt="Imagem de perfil do Toddys"></Image>

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
      
      <Box styleSheet={{flexDirection: 'row-reverse', gap: '4px', alignItems: 'center', justifyContent:'space-between'}}>
        <Box styleSheet={{flexDirection: 'row', gap: '4px', alignItems: 'center', justifyContent: 'start'}}>
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
        
        <Text tag="h1" styleSheet={{color: 'black', opacity:0.8}} variant="heading4">
          {templateConfig?.site.description}
        </Text>
      </Box>
      
    </Box>
  )
}

interface FeedPostsProps {
  postsNext: iPost[];
  postsUX: iPost[];
}

Feed.Posts = ({postsNext, postsUX}: FeedPostsProps) => {
  const [categoria, setCategoria] = useState('Next');

  const handleSetCategoryUX = () => {
    setCategoria('UX')
  }
  const handleSetCategoryNext = () => {
    setCategoria('Next')
  }

  const theme = useTheme();
  return (
    <Box>
      <Box styleSheet={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems: 'center'}}>
          <Text variant='heading3'>Ultimas Atualizações</Text>
          <Box styleSheet={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:'10px', alignItems: 'center'}}>
            <ButtonBase styleSheet={{backgroundColor: theme.colors.primary.x500,
    hover: {
      backgroundColor: theme.colors.primary.x400,
    },
    focus: {
      backgroundColor: theme.colors.primary.x600,
    }, borderRadius:'25px'}}>
              <HiArrowSmLeft size={40} onClick={handleSetCategoryNext}></HiArrowSmLeft>
            </ButtonBase>
            <ButtonBase>
              <HiArrowSmRight size={40} onClick={handleSetCategoryUX}></HiArrowSmRight>
            </ButtonBase>
          </Box>
      </Box>
      {
        categoria.match('Next') ?
          <>
            {
              postsNext?.map((item)=>(
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
          </>
      :
        categoria.match('UX') ?
          <>
            {
              postsUX?.map((item)=>(
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
          </>
      :
        null
      }
    </Box>
  )
}
