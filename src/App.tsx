import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Text,
  Input,
  VStack,
  HStack,
  Flex,
  Stack,
  Link,
  Divider,
  SimpleGrid,
} from "design-system";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

const MenuIcon = () => (
  <Box aria-hidden w="5" h="4" display="flex" flexDirection="column" justifyContent="space-between">
    <Box as="span" display="block" h="0.5" bg="currentColor" borderRadius="full" />
    <Box as="span" display="block" h="0.5" bg="currentColor" borderRadius="full" />
    <Box as="span" display="block" h="0.5" bg="currentColor" borderRadius="full" />
  </Box>
);

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = (
    <>
      <Link href="#features" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Features</Link>
      <Link href="#how-it-works" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>How it works</Link>
      <Link href="#pricing" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Pricing</Link>
      <Link href="#contact" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Contact</Link>
    </>
  );

  return (
    <Box minH="100vh" bg="figma.bg" color="figma.fg">
      {/* Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={10}
        borderBottomWidth="1px"
        borderColor="figma.borderDefault"
        bg="figma.default"
        py={3}
        px={4}
      >
        <Container maxW="6xl">
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <Link href="#" fontWeight="bold" fontSize="lg" _hover={{ opacity: 0.85 }} textDecoration="none">
              Web-App
            </Link>
            {/* Desktop nav */}
            <HStack gap={{ base: 3, md: 8 }} display={{ base: "none", md: "flex" }}>
              <HStack gap={6}>{navLinks}</HStack>
              <HStack gap={3}>
                <Button label="Sign in" variant="ghost" size="sm" />
                <Button label="Get started" colorScheme="teal" size="sm" />
              </HStack>
            </HStack>
            {/* Mobile: menu button */}
            <HStack gap={3} display={{ base: "flex", md: "none" }}>
              <Button label="Sign in" variant="ghost" size="sm" />
              <Button label="Get started" colorScheme="teal" size="sm" />
              <IconButton
                aria-label="Open menu"
                icon={<MenuIcon />}
                variant="ghost"
                size="sm"
                onClick={onOpen}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="figma.default" color="figma.fg">
          <DrawerCloseButton aria-label="Close menu" color="figma.fg" />
          <DrawerHeader pt={8}>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" gap={4}>
              <Link href="#features" fontSize="lg" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Features</Link>
              <Link href="#how-it-works" fontSize="lg" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>How it works</Link>
              <Link href="#pricing" fontSize="lg" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Pricing</Link>
              <Link href="#contact" fontSize="lg" textDecoration="none" _hover={{ textDecoration: "none" }} onClick={onClose}>Contact</Link>
              <Divider borderColor="figma.borderDefault" my={2} />
              <Button label="Sign in" variant="ghost" w="full" />
              <Button label="Get started" colorScheme="teal" w="full" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <main>
        {/* Hero */}
        <Box py={{ base: 12, md: 20 }} px={4}>
          <Container maxW="4xl">
            <VStack gap={6} textAlign="center">
              <Heading as="h1" size="2xl" lineHeight="tight">
                Build better products with a shared design system
              </Heading>
              <Text fontSize="lg" color="figma.fg_muted" maxW="2xl">
                Keep your UI consistent across web and mobile. One source of truth for components and tokens, synced with your Figma files.
              </Text>
              <HStack gap={4} flexWrap="wrap" justify="center" pt={2}>
                <Button label="Start free trial" colorScheme="teal" size="lg" />
                <Button label="Watch demo" variant="outline" size="lg" />
              </HStack>
            </VStack>
          </Container>
        </Box>

        {/* Features */}
        <Box id="features" py={16} px={4} bg="figma.bgSubtle">
          <Container maxW="6xl">
            <VStack gap={12} align="stretch">
              <Box textAlign="center">
                <Heading size="lg" mb={3}>Features</Heading>
                <Text color="figma.fg_muted" maxW="xl" mx="auto">
                  Everything you need to ship consistent interfaces and keep design and code in sync.
                </Text>
              </Box>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Components</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Buttons, inputs, cards, dialogs, and more — built on Chakra UI and styled with your Figma tokens.
                  </Text>
                </Card>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Design tokens</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Colors, spacing, radii, and breakpoints from Figma variables. One update, everywhere.
                  </Text>
                </Card>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Dark mode</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Semantic tokens for light and dark themes. Toggle follows system preference or user choice.
                  </Text>
                </Card>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Accessibility</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Components follow WCAG patterns. Focus states, ARIA, and keyboard navigation built in.
                  </Text>
                </Card>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Documentation</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Live docs and code examples for every component. Copy-paste or import from the design system.
                  </Text>
                </Card>
                <Card p={6}>
                  <Heading size="sm" mb={2}>Integrations</Heading>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Use the design system in any React app. Link locally or publish to npm for your team.
                  </Text>
                </Card>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* How it works */}
        <Box id="how-it-works" py={16} px={4}>
          <Container maxW="6xl">
            <VStack gap={10} align="stretch">
              <Box textAlign="center">
                <Heading size="lg" mb={3}>How it works</Heading>
                <Text color="figma.fg_muted" maxW="xl" mx="auto">
                  Connect your design system repo and consume it in any app. Updates flow automatically.
                </Text>
              </Box>
              <Stack direction={{ base: "column", md: "row" }} gap={8} align="stretch">
                <Box flex={1} p={6} borderRadius="lg" borderWidth="1px" borderColor="figma.borderDefault" bg="figma.default">
                  <Text fontWeight="bold" mb={2}>1. Design in Figma</Text>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Define variables and components in Figma. Export tokens or sync via plugin.
                  </Text>
                </Box>
                <Box flex={1} p={6} borderRadius="lg" borderWidth="1px" borderColor="figma.borderDefault" bg="figma.default">
                  <Text fontWeight="bold" mb={2}>2. Build the design system</Text>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Map tokens to your theme. Wrap Chakra (or other) components with your styles.
                  </Text>
                </Box>
                <Box flex={1} p={6} borderRadius="lg" borderWidth="1px" borderColor="figma.borderDefault" bg="figma.default">
                  <Text fontWeight="bold" mb={2}>3. Use in your apps</Text>
                  <Text color="figma.fg_muted" fontSize="sm">
                    Install the design system as a dependency. Import components and theme. Done.
                  </Text>
                </Box>
              </Stack>
            </VStack>
          </Container>
        </Box>

        {/* CTA + Newsletter */}
        <Box id="contact" py={16} px={4} bg="figma.bgSubtle">
          <Container maxW="xl">
            <Card p={8} textAlign="center">
              <Heading size="md" mb={2}>Stay in the loop</Heading>
              <Text color="figma.fg_muted" mb={6}>
                Get updates on new components and token changes. No spam.
              </Text>
              <Flex gap={3} maxW="md" mx="auto" direction={{ base: "column", sm: "row" }}>
                <Input placeholder="you@company.com" flex={1} />
                <Button label="Subscribe" colorScheme="teal" flexShrink={0} />
              </Flex>
            </Card>
          </Container>
        </Box>
      </main>

      {/* Footer */}
      <Box
        as="footer"
        borderTopWidth="1px"
        borderColor="figma.borderDefault"
        bg="figma.default"
        py={10}
        px={4}
      >
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} gap={8} mb={8}>
            <Box>
              <Link href="#" fontWeight="bold" fontSize="lg" textDecoration="none" _hover={{ textDecoration: "none" }}>Web-App</Link>
              <Text fontSize="sm" color="figma.fg_muted" mt={2}>
                Design system and component library.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="sm" mb={3}>Product</Text>
              <VStack align="start" gap={2}>
                <Link href="#features" fontSize="sm" color="figma.fg_muted">Features</Link>
                <Link href="#pricing" fontSize="sm" color="figma.fg_muted">Pricing</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Changelog</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Docs</Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="sm" mb={3}>Company</Text>
              <VStack align="start" gap={2}>
                <Link href="#" fontSize="sm" color="figma.fg_muted">About</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Blog</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Careers</Link>
                <Link href="#contact" fontSize="sm" color="figma.fg_muted">Contact</Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="sm" mb={3}>Legal</Text>
              <VStack align="start" gap={2}>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Privacy</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Terms</Link>
                <Link href="#" fontSize="sm" color="figma.fg_muted">Cookies</Link>
              </VStack>
            </Box>
          </SimpleGrid>
          <Divider borderColor="figma.borderDefault" mb={6} />
          <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
            <Text fontSize="sm" color="figma.fg_muted">
              © {new Date().getFullYear()} Web-App. Built with the design system.
            </Text>
            <HStack gap={4}>
              <Link href="#" fontSize="sm" color="figma.fg_muted">Twitter</Link>
              <Link href="#" fontSize="sm" color="figma.fg_muted">GitHub</Link>
              <Link href="#" fontSize="sm" color="figma.fg_muted">LinkedIn</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
