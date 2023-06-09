import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Text from "@src/components/Text/Text";
import { TemplateConfigProvider, useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import theme from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  const baseSize = '40px';
  return (
    <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        left: 0, right: 0, top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '16px',
        paddingHorizontal: '20px',
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <img src={templateConfig.personal.avatar} width={40} alt="oi" />
      </Button.Base>

      <Button.Base
        styleSheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.neutral.x500,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.neutral.x400,
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  )
}
