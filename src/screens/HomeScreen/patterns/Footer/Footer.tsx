import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Footer() {
  const templateConfig = useTemplateConfig();
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
      <Link styleSheet={{color:'white'}} href={templateConfig.personal.socialNetworks.instagram}>
        <Text styleSheet={{hover:{color:theme.colors.primary.x200}}} >@Vinicius.toddys</Text>
      </Link>
    </Box>
  )
}