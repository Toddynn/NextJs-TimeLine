import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Background() {
  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("/assets/purple-space.gif")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  )
}
