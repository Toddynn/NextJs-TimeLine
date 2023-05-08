import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x000,
        width: '100%',
        height: '120px',
        position: 'relative',
        bottom:'0',
        paddingHorizontal: '24px',
        paddingVertical: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Link styleSheet={{color:'white', textDecoration:'none', fontSize:'16px'}} href={`/sobre`}>Sobre mim</Link>
    </Box>
  )
}